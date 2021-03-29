import json
import requests
import base64
import re

from django.views           import View
from django.http            import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.db.models       import Q, Max
from django.utils           import timezone

from .models                import Category, Exporter, Release
from headtoken.models       import Token
from user.utils             import login_check, admin_decorator

api_url = 'https://api.github.com/repos/'
PATTERN = r"!\[(\w*|\s|\w+( \w+)*)\]\(([^,:!]*|\/[^,:!]*\.\w+|\w*.\w*)\)"


class CategoryView(View):
    def get(self, request):
        categories = Category.objects.all()
        data = {
            "categories": [{   
                "category_id"  : category.id,
                "category_name": category.name
            } for category in categories]
        }
        return JsonResponse(data, status=200)


class ExporterView(View):
    def get_repo(self, repo_url):
        valid_token = Token.objects.filter(is_valid=True)
        TOKEN       = valid_token.last().token
        headers     = {'Authorization' : 'token ' + TOKEN} 

        if 'https://github.com/' in repo_url:
            repo_api_url     = api_url + repo_url.replace('https://github.com/','')
            readme_api_url   = repo_api_url + '/readme'
            release_api_url  = repo_api_url + '/releases'
            repo             = requests.get(repo_api_url, headers=headers)

            if repo.status_code == 200:
                repo_data       = repo.json()
                readme          = requests.get(readme_api_url, headers=headers)
                release         = requests.get(release_api_url, headers=headers)
                readme_data     = readme.json()
                release_data    = release.json()

                data = {
                    "name"        : repo_data["name"],
                    "logo_url"    : repo_data["owner"]["avatar_url"],
                    "stars"       : repo_data["stargazers_count"],
                    "description" : repo_data["description"],
                    "readme_url"  : repo_url+"/blob/master/README.md",
                    "readme"      : readme_data["content"],
                    "release"     : [{
                        "release_version": release["tag_name"],
                        "release_date"   : release["created_at"],
                        "release_url"    : release["html_url"]
                    } for release in release_data]
                }
                return data

            elif repo.status_code == 401:
                token          = Token.objects.filter().last()
                token.is_valid = False
                token.save()

                return 'INVALID_TOKEN'

    @login_check
    def get(self, request):
        try:
            user          = request.user
            category      = request.GET.get('category')
            official_type = request.GET.get('type')
            sort          = request.GET.get('sort', 'popular')
            sort_dict     = {
                'popular' : '-stars', 
                'recent'  : 'date', 
                'trending': '-view_count'
            }
            
            q = Q()
            if category:
                q.add(Q(category__name__icontains=category), Q.AND)

            if official_type:
                q.add(Q(official__name__istartswith=official_type), Q.AND)

            if sort == 'recent':    
                exporters = Exporter.objects.select_related('category', 'official').prefetch_related('release_set')\
                            .filter(q).annotate(recent=Max('release__date')).order_by('-recent')
            else:
                exporters = Exporter.objects.select_related('category', 'official').filter(q).order_by(sort_dict[sort])

            data = {
                "exporters": [{
                    "exporter_id"    : exporter.id,
                    "name"           : exporter.name,
                    "logo_url"       : exporter.logo_url,
                    "category"       : exporter.category.name,
                    "official"       : exporter.official.name,
                    "stars"          : exporter.stars,
                    "is_star"        : user.starred_exporters.filter(id=exporter.id).exists() if user else False,
                    "is_bucket"      : user.added_exporters.filter(id=exporter.id).exists() if user else False,
                    "is_new"         : (timezone.now() - exporter.created_at).days <= 7,
                    "repository_url" : exporter.repository_url,
                    "description"    : exporter.description,   
                }for exporter in exporters]
            }
            return JsonResponse(data, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except Exception as e:
            return JsonResponse({'message':f"{e}"}, status=400)

    def post(self, request):
        try:
            data      = json.loads(request.body)
            repo_url  = data["repo_url"]
            category  = data["category"]

            if Exporter.objects.filter(repository_url=repo_url).exists():
                return JsonResponse({'message':'EXISTING_REPOSITORY'}, status=400)

            OFFICIAL_ID      = 1
            NON_OFFICIAL_ID  = 2

            official = OFFICIAL_ID if "prometheus/" in repo_url else NON_OFFICIAL_ID

            repo_info = self.get_repo(repo_url)

            if repo_info == 'INVALID_TOKEN':
                return JsonResponse({'message':'INVALID_TOKEN'}, status=401)

            elif repo_info:
                readme    = base64.b64decode(repo_info["readme"]).decode('utf-8')
                matches   = re.findall(PATTERN, readme)
                repo_name = repo_url.replace('https://github.com/','')

                for match in matches:
                    for element in match:
                        if '.' in element:
                            readme = readme.replace(element,f"https://raw.githubusercontent.com/{repo_name}/master/{element}")

                exporter = Exporter.objects.create(
                    category       = Category.objects.get(name=category),
                    official_id    = official,
                    name           = repo_info["name"],
                    logo_url       = repo_info["logo_url"],
                    stars          = repo_info["stars"],
                    repository_url = repo_url,
                    description    = repo_info["description"],
                    readme_url     = repo_info["readme_url"],
                    readme         = readme.encode('utf-8'),
                )
                release = sorted(repo_info["release"], key=lambda x: x["release_date"])

                for info in release:
                    Release(
                        exporter_id = exporter.id,
                        release_url = info["release_url"],
                        version     = info["release_version"],
                        date        = info["release_date"]
                    ).save()
                return JsonResponse({'message':'SUCCESS'}, status=201)
            
            return JsonResponse({'message':'WRONG_REPOSITORY'}, status=400)

        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)
        
        except Category.DoesNotExist:
            return JsonResponse({'message':'NO_CATEGORY'}, status=400)
     
    def delete(self, request):
        try:
            exporter_id = request.GET['exporter_id']
            exporter    = Exporter.objects.get(id=exporter_id)
            release     = Release.objects.filter(exporter_id=exporter_id)

            if release.exists():
                release.delete()    

            exporter.delete()
            
            return JsonResponse({'message':'SUCCESS'}, status=200)
        
        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)
        
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)

    def patch(self, request):
        try:
            exporter_id          = request.GET['exporter_id']
            data                 = json.loads(request.body)
            category             = data['category']
            exporter             = Exporter.objects.get(category=category)
            exporter.save()
        
            return JsonResponse({'message':'SUCCESS'}, status=200)
        
        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)
        
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)


class ExporterDetailView(View):
    @login_check
    def get(self, request, exporter_id):
        try:
            exporter = Exporter.objects.get(id=exporter_id)
            exporter.view_count += 1
            exporter.save()

            data = {
                    'exporter_id'    : exporter.id,
                    'name'           : exporter.name,
                    'logo_url'       : exporter.logo_url,
                    'category'       : exporter.category.name,
                    'official'       : exporter.official.name,
                    'stars'          : exporter.stars,
                    'repository_url' : exporter.repository_url,
                    'description'    : exporter.description,
                    'readme'         : exporter.readme.decode('utf-8'),
                    'recent_release' : exporter.release_set.order_by('date').last().date if exporter.release_set.filter().exists() else '1970-01-01',
                    'release'        : [{
                        'release_version': release.version,
                        'release_date'   : release.date,
                        'release_url'    : release.release_url
                    } for release in exporter.release_set.all()],
                }
            
            return JsonResponse(data, status=200)

        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)
