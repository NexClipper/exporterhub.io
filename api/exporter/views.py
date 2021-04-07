import json
import requests
import base64
import re
import csv

from django.views           import View
from django.http            import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.db.models       import Q, Max
from django.utils           import timezone
from django.conf            import settings

from .models                import Category, Exporter, Release, Official 
from headtoken.models       import Token
from user.models            import Bucket, Star
from user.utils             import login_check, admin_decorator

api_url = 'https://api.github.com/repos/'
PATTERN = r"!\[(\w*|\s|\w+( \w+)*)\]\(([^,:!]*|\/[^,:!]*\.\w+|\w*.\w*)\)"


class CategoryView(View):
    def get(self, request):
        categories = Category.objects.all().order_by('name')
        data = {
            "categories": [{   
                "category_id"  : category.id,
                "category_name": category.name
            } for category in categories]
        }
        return JsonResponse(data, status=200)


class ExporterView(View):
    def get_repo(self, github_token, repo_url):
        headers     = {'Authorization' : 'token ' + github_token} 

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

    @admin_decorator
    def post(self, request):
        try:
            user     = request.user
            data     = json.loads(request.body)
            repo_url = data["repo_url"]
            category = data["category"]
            app_name = data["title"]

            if not(repo_url and category and app_name):
                return JsonResponse({'message': 'FILL_THE_BLANK'}, status=400)

            if Exporter.objects.filter(repository_url=repo_url).exists():
                return JsonResponse({'message':'EXISTING_REPOSITORY'}, status=400)

            official = Official.objects.get(name='Official') if "prometheus/" in repo_url else Official.objects.get(name='Unofficial')

            repo_info = self.get_repo(github_token=user.github_token, repo_url=repo_url)

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
                    official       = official,
                    name           = repo_info["name"],
                    logo_url       = repo_info["logo_url"],
                    stars          = repo_info["stars"],
                    repository_url = repo_url,
                    description    = repo_info["description"],
                    readme_url     = repo_info["readme_url"],
                    readme         = readme.encode('utf-8'),
                    app_name       = app_name
                )
                release = sorted(repo_info["release"], key=lambda x: x["release_date"])

                for info in release:
                    Release(
                        exporter_id = exporter.id,
                        release_url = info["release_url"],
                        version     = info["release_version"],
                        date        = info["release_date"]
                    ).save()

                file   = open("exporter_list.csv", 'a', newline='')
                writer = csv.writer(file)
                writer.writerow([app_name, repo_info["name"], repo_url, 1 if "prometheus/" in repo_url else 0, category])
                file.close()

                return JsonResponse({'message':'SUCCESS'}, status=201)
            
            return JsonResponse({'message':'WRONG_REPOSITORY'}, status=400)

        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)
        
        except Category.DoesNotExist:
            return JsonResponse({'message':'NO_CATEGORY'}, status=400)

        except Official.DoesNotExist:
            return JsonResponse({'message':'OFFICIAL_OBJECT_DOES_NOT_EXIST'}, status=410)
     
    @admin_decorator
    def delete(self, request):
        try:
            exporter_id = request.GET['exporter-id']
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

    @admin_decorator
    def patch(self, request):
        try:
            exporter_id       = request.GET['exporter-id']
            data              = json.loads(request.body)
            category          = data['category']
            exporter          = Exporter.objects.get(id=exporter_id)
            exporter.category = Category.objects.get(name=category)
            exporter.save()
        
            return JsonResponse({'message':'SUCCESS'}, status=200)
        
        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)
        
        except Category.DoesNotExist:
            return JsonResponse({'message':'NO_CATEGORY'}, status=400)

        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)


class ExporterDetailView(View):
    def check_starred(self, user, exporter, headers, repo_info):
        result    = requests.get(f'https://api.github.com/user/starred/{repo_info}', headers=headers)
        
        if result.status_code == 204 and not Star.objects.filter(user=user, exporter=exporter).exists():
            Star.objects.create(user=user, exporter=exporter)
        
        elif result.status_code == 404 and Star.objects.filter(user=user, exporter=exporter).exists():
            Star.objects.filter(user=user, exporter=exporter).delete()

        elif result.status_code != 204 and result.status_code != 404:
            return 'ERROR'

    @login_check
    def get(self, request, exporter_id):
        try:
            user      = request.user
            exporter  = Exporter.objects.select_related('category', 'official').prefetch_related('release_set').get(id=exporter_id)
            repo_info = exporter.repository_url.replace('https://github.com/', '')

            exporter.view_count += 1
            exporter.save()

            github_token = user.github_token if user else Token.objects.last().token
            headers      = {'Authorization' : 'token ' + github_token} 
            
            # check starred by user at github
            if user:
                if self.check_starred(user=user, exporter=exporter, headers=headers, repo_info=repo_info) == 'ERROR':
                    return JsonResponse({'message': 'GITHUB_API_FAIL_AT_CHECK_STARRED'}, status=400)
 
            get_star_counts = requests.get(f'https://api.github.com/repos/{repo_info}', headers=headers)

            if get_star_counts.status_code != 200:
                return JsonResponse({'message': 'GITHUB_GET_STAR_COUNT_API_FAIL'}, status=400)

            exporter.stars = get_star_counts.json()['stargazers_count']
            exporter.save()

            if user and user.added_exporters.filter(id=exporter.id).exists():
                forked_repository_url = Bucket.objects.get(user_id=user.id, exporter_id=exporter.id).forked_repository_url
            else:
                forked_repository_url = None

            data = {
                    'exporter_id'           : exporter.id,
                    'name'                  : exporter.name,
                    'logo_url'              : exporter.logo_url,
                    'category'              : exporter.category.name,
                    'official'              : exporter.official.name,
                    'title'                 : exporter.app_name,
                    'stars'                 : exporter.stars,
                    'is_star'               : user.starred_exporters.filter(id=exporter.id).exists() if user else False,
                    'is_bucket'             : user.added_exporters.filter(id=exporter.id).exists() if user else False,
                    'is_new'                : (timezone.now() - exporter.created_at).days <= 7,
                    'repository_url'        : exporter.repository_url,
                    'forked_repository_url' : forked_repository_url,
                    'description'           : exporter.description,
                    'readme'                : exporter.readme.decode('utf-8'),
                    'recent_release'        : exporter.release_set.order_by('date').last().date if exporter.release_set.filter().exists() else '1970-01-01',
                    'release'               : [{
                        'release_version': release.version,
                        'release_date'   : release.date,
                        'release_url'    : release.release_url
                    } for release in exporter.release_set.all()],
                }
            
            return JsonResponse({'data': data}, status=200)

        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)


class ExporterTabView(View):
    def get_contents(self, app_name, content_type, file_type, headers):
        repo   = f"{settings.ORGANIZATION}/exporterhub.io"        
        url    = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/{app_name}_{content_type}.{file_type}"
        result = requests.get(url, headers=headers)
        data   = result.json()

        if result.status_code == 200:
            contents = {
                'content' : data['content'],
                'sha'     : data['sha']
            }
        elif result.status_code == 404:
            contents = {
                'content' : None,
                'sha'     : None
            }
        else:
            contents = "GITHUB_GET_REPO_ERROR"

        return contents

    @login_check
    def get(self, request, exporter_id):
        try:
            user         = request.user
            exporter     = Exporter.objects.get(id=exporter_id)
            github_token = user.github_token if user else Token.objects.last().token
            headers      = {'Authorization' : 'token ' + github_token}

            content_type = request.GET['type']
            file_type    = {
                'dashboard': 'json',
                'alert'    : 'yaml'
            }

            code_file_info = self.get_contents(app_name=exporter.app_name, content_type=content_type, file_type=file_type[content_type], headers=headers)
            md_file_info   = self.get_contents(app_name=exporter.app_name, content_type=content_type, file_type='md', headers=headers)

            if code_file_info == 'GITHUB_GET_REPO_ERROR' or md_file_info == 'GITHUB_GET_REPO_ERROR':
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

            code_file_sha   = code_file_info['sha']
            md_file_sha     = md_file_info['sha']
            md_file_content = base64.b64decode(md_file_info['content']).decode('utf-8') if md_file_info['content'] else None

            data = {
                'code_sha'   : code_file_sha,
                'md_sha'     : md_file_sha,
                'md_content' : md_file_content
            }

            return JsonResponse(data, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except Exporter.DoesNotExist:
            return JsonResponse({'message': 'NO_EXPORTER'}, status=404)
    
    def push_to_github(self, app_name, file_name, token, message, content, sha):
        repo = f"{settings.ORGANIZATION}/exporterhub.io"        
        url  = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/{file_name}"
        
        data     = requests.get(url, headers={'Content-Type': 'application/json', 'Authorization': 'token ' + token})
        contents = json.dumps({
                        "message" : message,
                        "content" : content,
                        "sha"     : sha
                    })
        if data.status_code == 404:
            result = requests.put(url, data=contents, headers={'Authorization': 'token ' + token})
            
        elif data.status_code == 200:   
            repo_content = data.json()['content'].replace('\n', '')

            if content != repo_content:
                result  = requests.put(url, data=contents, headers={'Authorization': 'token ' + token})
                
        else:
            return "GITHUB_REPO_API_ERROR"
        

    @admin_decorator
    def post(self, request, exporter_id):
        try:
            user           = request.user
            exporter       = Exporter.objects.get(id=exporter_id)
            token          = user.github_token
            data           = json.loads(request.body)
            app_name       = exporter.app_name

            code_file_name = data["codeFileName"]
            code_content   = data["codeBlock"]
            code_sha       = data["code-SHA"]

            md_file_name   = data["mdFileName"]
            md_content     = data["mdFile"]
            md_sha         = data["md-SHA"]

            message        = data["message"]

            if not app_name:
                return JsonResponse({'message': 'TITLE_REQUIRED'}, status=400)
            
            code_result = self.push_to_github(app_name=app_name, file_name=code_file_name, token=token, message=message, content=code_content, sha=code_sha)
            md_result   = self.push_to_github(app_name=app_name, file_name=md_file_name, token=token, message=message, content=md_content, sha=md_sha)
            
            if code_result == 'GITHUB_REPO_API_ERROR' or md_result == 'GITHUB_REPO_API_ERROR':
                return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)
            
            return JsonResponse({'message': 'SUCCESS'}, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)
            
