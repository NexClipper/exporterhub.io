import json
from os import name
import requests
import base64
import re
import csv

from django.views           import View
from django.http            import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from django.db.models       import Q, Max
from django.db              import transaction
from django.utils           import timezone
from django.conf            import settings

from .models                import Category, Exporter, Release, Official 
from headtoken.models       import Token
from user.models            import Bucket, Star
from user.utils             import login_check, admin_decorator

api_url = 'https://api.github.com/repos/'
PATTERN = r"!\[(\w*|\s|\w+( \w+)*)\]\(([^,:!]*|\/[^,:!]*\.\w+|\w*.\w*)\)"


class CategoryView(View):
    def get_contents(self, headers):
        repo   = f"{settings.ORGANIZATION}/exporterhub.io"        
        url    = f"https://api.github.com/repos/{repo}/contents/api/exporter_list.csv"
        result = requests.get(url, headers=headers)
        data   = result.json()

        if result.status_code == 200:
            contents = {
                'sha'     : data['sha']
            }
        elif result.status_code == 404:
            contents = {
                'sha'     : None
            }
        else:
            contents = "GITHUB_GET_REPO_ERROR"
        
        return contents

    def get(self, request):
        categories = Category.objects.all().order_by('name')
        data = {
            "categories": [{   
                "category_id"  : category.id,
                "category_name": category.name,
                "create_at"    : category.create_at
            } for category in categories]
        }
        return JsonResponse(data, status=200)

    @admin_decorator
    def post(self, request):
        try:
            data   = json.loads(request.body)
            date   = data['date'].split('.')
            create_at = date[0]+'-'+date[1]+'-'+date[2]
            
            category, is_create = Category.objects.get_or_create(
                name = data['category'],
                create_at = create_at.replace(' ','')
            )

            if not is_create:
                return JsonResponse({'message':'EXISTING_CATEGORY'}, status=400)

            return JsonResponse({'message':'SUCCESS'}, status=201)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)
    
    @admin_decorator
    @transaction.atomic
    def patch(self, request):
        try:
            data                = json.loads(request.body)
            category_id         = data['category_id']
            feature_category_id = data['feature_category_id']
            user                = request.user
            token               = user.github_token
            repo                = f"{settings.ORGANIZATION}/exporterhub.io"
            url                 = f"https://api.github.com/repos/{repo}/contents/api/exporter_list.csv"
            responses           = []
            response            = ''

            if not Category.objects.filter(id=category_id).exists:
                return JsonResponse({'message':'EXISTING_CATEGORY'}, status=400)
            if not Category.objects.filter(id=feature_category_id).exists:
                return JsonResponse({'message':'EXISTING_CATEGORY'}, status=400)

            category = Category.objects.get(id=category_id)
            feature_category = Category.objects.get(id=feature_category_id)

            file   = open('exporter_list.csv', 'r')
            reader = [row for row in csv.reader(file)]
            file.close()

            file = open('exporter_list.csv', 'w', newline='')
            writer = csv.writer(file)
            for i, row in enumerate(reader):         
                if reader[i][4] == category.name:
                    reader[i][4] = feature_category.name
                    responses.append([reader[i][0],  reader[i][1],  reader[i][2],  reader[i][3],  reader[i][4],'\n'])
                    writer.writerow(row)
                else:
                    writer.writerow(row)
                    responses.append([reader[i][0],  reader[i][1],  reader[i][2],  reader[i][3],  reader[i][4],'\n'])
            file.close()

            csv_info = self.get_contents(headers={'Authorization' : 'token ' + token})

            if csv_info == 'GITHUB_GET_REPO_ERROR':
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)
            
            for detail in responses:
                response += ','.join(detail)

            contents = json.dumps({
                'sha'     : csv_info['sha'],
                'message' : 'wip',
                'content' : base64.b64encode(response.encode('utf-8')).decode('utf-8')
                })

            result = requests.put(url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})

            if result.status_code == 200:
                Exporter.objects.filter(category_id = category_id).update(category_id=feature_category_id)
                Category.objects.filter(id=category_id).delete()

                return JsonResponse({'message':'SUCCESS'}, status=200)

            else:
                return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

    @admin_decorator
    @transaction.atomic
    def delete(self, request, category_id):
        user     = request.user
        token    = user.github_token
        repo     = f"{settings.ORGANIZATION}/exporterhub.io" 
        url      = f"https://api.github.com/repos/{repo}/contents/api/exporter_list.csv"
        category = Category.objects.get(id=category_id)
        content  = []
        response = ''

        if not Category.objects.filter(id=category_id).exists:
            return JsonResponse({'message':'EXISTING_CATEGORY'}, status=400)

        file   = open('exporter_list.csv', 'r')
        reader = [row for row in csv.reader(file)]
        file.close()

        file = open('exporter_list.csv', 'w', newline='')
        writer = csv.writer(file)
        for i, row in enumerate(reader):
            if reader[i][4] == category.name: 
                continue
            else:
                writer.writerow(row)
                content.append([reader[i][0], reader[i][1], reader[i][2], reader[i][3], reader[i][4], '\n'])
        file.close()

        csv_info = self.get_contents(headers={'Authorization' : 'token ' + token})

        if csv_info == 'GITHUB_GET_REPO_ERROR':
            return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

        for detail in content:
            response += ','.join(detail)

        contents = json.dumps({
            'sha' : csv_info['sha'],
            'message' : 'wip',
            'content' : base64.b64encode(response.encode('utf-8')).decode('utf-8')
            })

        result = requests.put(url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})

        if result.status_code == 200:
            Exporter.objects.filter(category_id=category_id).delete()
            Category.objects.filter(id=category_id).delete()
            return JsonResponse({'message':'SUCCESS'}, status=200)

        else:
            return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)

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

    def get_csv(self, token):
        repo   = f"{settings.ORGANIZATION}/exporterhub.io"
        url    = f"https://api.github.com/repos/{repo}/contents/api/exporter_list.csv"
        result = requests.get(url, headers={'Content-Type':'application/json','Authorization': 'token ' + token})
        data   = result.json()

        if result.status_code == 200:
            contents = {
                'content' : base64.b64decode(data['content']).decode('utf-8'),
                'sha'     : data['sha']
            }
            return contents

        elif result.status_code == 404:
            return "GITHUB_GET_REPO_ERROR"

    def push_to_github(self, token, message, content, sha):
        repo = f"{settings.ORGANIZATION}/exporterhub.io"
        url  = f"https://api.github.com/repos/{repo}/contents/api/exporter_list.csv"
        
        contents = json.dumps({
                        "message" : message,
                        "content" : content,
                        "sha"     : sha
                    })
        
        return requests.put(url, data=contents, headers={'Content-Type':'application/json','Authorization': 'token ' + token})     

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
            github_token = request.user.github_token
            exporter_id  = request.GET.get('exporter_id', None)

            if not Exporter.objects.filter(id=exporter_id).exists:
                return JsonResponse({'message':'NO_EXPORTER'}, status=400)

            exporter     = Exporter.objects.get(id = exporter_id)
            message      = f'{exporter.name} delete'
            content      = []
            response     = ''

            file   = open('exporter_list.csv', 'r')
            reader = [row for row in csv.reader(file)]
            file.close()

            file   = open('exporter_list.csv', 'w', newline='')
            writer = csv.writer(file)
            for i, row in enumerate(reader):
                if reader[i][1] != exporter.name:                    
                    writer.writerow(row)
                    content.append([reader[i][0], reader[i][1], reader[i][2], reader[i][3], reader[i][4], '\n'])
            file.close()
            
            for detail in content:
                response += ','.join(detail)
            
            get_csv = self.get_csv(github_token)
            if get_csv == 'GITHUB_GET_REPO_ERROR':
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)
            
            content = base64.b64encode(response.encode('utf-8')).decode('utf-8')
            result  = self.push_to_github(token=github_token, message=message, content=content, sha=get_csv['sha'])
            
            if result.status_code == 200:
                Exporter.objects.filter(id=exporter.id).delete()
                return JsonResponse({'message':'SUCCESS'}, status=200)
        
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

    def get_csv(self, token):
        repo     = f"{settings.ORGANIZATION}/exporterhub.io"
        file     = "exporter_description.csv"
        url      = f"https://api.github.com/repos/{repo}/contents/contents/{file}"
        result   = requests.get(url, headers={'Content-Type':'application/json','Authorization': 'token ' + token})
        data     = result.json()
        csv_file = []
        
        if result.status_code == 200:
            content = base64.b64decode(data['content']).decode('utf-8')            
            details = [v for v in content.split('\n') if v]
            for detail in details:
                csv_detail = detail.split('"')
                csv_detail = [v for v in csv_detail if v]
                csv_detail = [v for v in csv_detail if ',' != v]                
                csv_detail = [v for v in csv_detail if ', ' != v]
                csv_file.append(
                    [csv_detail[0], csv_detail[1], csv_detail[2]]
                )

            content = {
                'sha'     : data['sha'],
                'csv_file': csv_file
            }
            
            return content

        elif result.status_code == 404:
            content = ""
            return content

        return "GITHUB_GET_REPO_ERROR"

    def push_to_github(self, token, message, exporter_id, name, description):
        repo            = f"{settings.ORGANIZATION}/exporterhub.io"
        file            = "exporter_description.csv"
        url             = f"https://api.github.com/repos/{repo}/contents/contents/{file}"
        result          = requests.get(url, headers={'Content-Type':'application/json','Authorization': 'token ' + token})
        data            = result.json()
        csv_file        = []
        request_content = ''
        count           = 0
        
        if result.status_code == 200:
            content = base64.b64decode(data['content']).decode('utf-8')            
            details = [v for v in content.split('\n') if v]
            for detail in details:
                csv_detail = detail.split('"')
                csv_detail = [v for v in csv_detail if v]
                csv_detail = [v for v in csv_detail if ',' != v]                
                csv_detail = [v for v in csv_detail if ', ' != v]
                csv_file.append(
                    [csv_detail[0], csv_detail[1], csv_detail[2]]
                )
            for row in csv_file:
                if row[0] == str(exporter_id):
                    if description:
                        request_content += f'"{row[0]}","{row[1]}","{description}"' + '\n'
                    count += 1
                else:
                    request_content += f'"{row[0]}","{row[1]}","{row[2]}"' + '\n'

            if count == 0:
                request_content += f'"{exporter_id}","{name}","{description}"' + '\n'
                
            content  = base64.b64encode(request_content.encode('utf-8')).decode('utf-8')
            contents = json.dumps({
                            "message" : message,
                            "content" : content,
                            "sha"     : data['sha']
                        })

            result = requests.put(url, data=contents, headers={'Content-Type':'application/json','Authorization': 'token ' + token})  

            return result
        
        elif result.status_code == 404:
            request_content = '"exporter_id","exporter_name","description"' + '\n'
            request_content += f'"{exporter_id}","{name}","{description}"' + '\n'
            content  = base64.b64encode(request_content.encode('utf-8')).decode('utf-8')
            
            contents = json.dumps({
                            "message" : message,
                            "content" : content
                        })
            
            result = requests.put(url, data=contents, headers={'Content-Type':'application/json','Authorization': 'token ' + token})  
            
            return result
            
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
            
            detail_description = ''
            get_csv            = self.get_csv(github_token)

            if get_csv == 'GITHUB_GET_REPO_ERROR':
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)   
            elif not get_csv:
                detail_description = ''
            else:
                csv_file = get_csv['csv_file']
                for row in csv_file:
                    if row[0] == str(exporter.id):
                        detail_description = row[2] 
            
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
                    'detail_description'    : detail_description,
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

    @admin_decorator
    def post(self, request, exporter_id):
        try:
            github_token = request.user.github_token
            exporter     = Exporter.objects.get(id = exporter_id)
            data         = json.loads(request.body)
            description  = data["description"]
            message      = f"{exporter.name} description create"

            if not description:
                return JsonResponse({'message':'FILL_THE_BLANK'}, status = 400)  
            
            get_csv = self.get_csv(github_token)
            if get_csv == 'GITHUB_GET_REPO_ERROR':
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)   
            else:
                result = self.push_to_github(
                    token       = github_token,
                    message     = message,
                    exporter_id = exporter.id,
                    name        = exporter.name,
                    description = description,
                )
                  
                if result.status_code == 201 or 200:
                    response = {
                        "exporter_id"   : exporter.id,
                        "exporter_name" : exporter.name,
                        "description"   : description
                    }
                    
                    return JsonResponse(response, status = 201)

                else:
                    return JsonResponse({'message':'GITHUB_API_ERROR'}, status=400)

        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status = 400)

    @admin_decorator
    def patch(self, request, exporter_id):
        try:
            github_token = request.user.github_token
            exporter     = Exporter.objects.get(id = exporter_id)
            data         = json.loads(request.body)
            description  = data["description"]
            message      = f"{exporter.name} description update"

            get_csv = self.get_csv(github_token)
            if get_csv == 'GITHUB_GET_REPO_ERROR':
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)   
            else:
                result = self.push_to_github(
                    token       = github_token,
                    message     = message,
                    exporter_id = exporter.id,
                    name        = exporter.name,
                    description = description,
                )       
                if result.status_code == 200:
                    response = {
                        "exporter_id"   : exporter.id,
                        "exporter_name" : exporter.name,
                        "description"   : description
                    }
                    return JsonResponse(response, status = 200)
                    
                else:
                    return JsonResponse({'message':'GITHUB_API_ERROR'}, status=400)

        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status = 400)


class ExporterTabView(View):
    def get_csv(self, app_name, content_type, csv_file_type, headers):
        repo      = f"{settings.ORGANIZATION}/exporterhub.io"
        url       = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/"
        result    = requests.get(url, headers=headers)
        data      = result.json()
        csv_files = []

        if result.status_code == 200:
            for each_version in data:
                version = each_version["name"]
                if version == 'helm':
                    pass
                else:
                    csv_data = requests.get(f"{url}{version}/{app_name}_{content_type}.{csv_file_type}", headers=headers)
                    csv_data = csv_data.json()
                    content  = base64.b64decode(csv_data['content']).decode('utf-8')
                    details  = content.split('\n')
                    details  = [v for v in details if v]
                    for detail in details:
                        csv_detail  = detail.split('"')
                        csv_detail  = [v for v in csv_detail if v]
                        csv_detail  = [v for v in csv_detail if ',' != v]
                        csv_detail  = [v for v in csv_detail if ', ' != v]
                        file_url    = csv_detail[2].strip()
                        yaml_result = requests.get(f"https://api.github.com/repos/{repo}/contents/{file_url}", headers=headers)

                        if yaml_result.status_code == 200:
                            yaml_data = yaml_result.json()
                            csv_files.append(
                                    {
                                    'file_content' : base64.b64decode(yaml_data['content']).decode('utf-8'),
                                    'file_sha'     : yaml_data['sha'],
                                    'file_id'      : csv_detail[0],
                                    'csv_desc'     : csv_detail[1].strip(),
                                    'csv_sha'      : csv_data['sha'],
                                    'file_url'     : csv_detail[2],
                                    'version'      : version,
                                    }
                                    ) 
            return csv_files

        elif result.status_code == 404:
            csv_files = None
            return csv_files

        else:
            csv_files = "GITHUB_GET_REPO_ERROR"
            return csv_files

    def get_helm(self, app_name, content_type, file_type, headers):
        repo      = f"{settings.ORGANIZATION}/exporterhub.io"
        url       = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{content_type}/"
        result    = requests.get(url, headers=headers)
        data      = result.json()
        helm_files = []

        if result.status_code == 200:
            for each_version in data:
                version  = each_version["name"]
                helm_data = requests.get(f"{url}{version}", headers=headers)
                helm_data = helm_data.json()
                helm_files.append({
                    'file_content'  : base64.b64decode(helm_data['content']).decode('utf-8'),
                    'file_sha'      : helm_data['sha'],
                    'file_url'      : f"./contents/{app_name}/nc/{content_type}/{version}",
                    'file_id'       : "",
                    'csv_desc'      : "",
                    'csv_sha'       : "",
                    'version'       : version,
                    })

            return helm_files

        elif result.status_code == 404:
            helm_files = None
            return helm_files

        else:
            helm_files = "GITHUB_GET_REPO_ERROR"
            return helm_files

    @login_check
    def get(self, request, exporter_id):
        try:
            user         = request.user
            exporter     = Exporter.objects.get(id=exporter_id)
            github_token = user.github_token if user else Token.objects.last().token
            headers      = {'Authorization' : 'token ' + github_token}
            content_type = request.GET['type']

            if content_type == 'helm':
                helm_result = self.get_helm(app_name=exporter.name, content_type=content_type, file_type='yaml', headers=headers)

                if helm_result == 'GITHUB_GET_REPO_ERROR':
                    return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

                if helm_result == None: 
                    return JsonResponse({'message':'No_Content'}, status=200)

                return JsonResponse({"message": helm_result}, status=200)

            else:
                csv_file    = self.get_csv(app_name=exporter.name, content_type=content_type, csv_file_type='csv', headers=headers)

                if csv_file == 'GITHUB_GET_REPO_ERROR':
                    return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

                if csv_file == None: 
                    return JsonResponse({'message':'No_Content'}, status=200)

                return JsonResponse({"message": csv_file}, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except Exporter.DoesNotExist:
            return JsonResponse({'message': 'NO_EXPORTER'}, status=404)

    def helm_to_github(self, app_name, token, content_type, content, file_type, sha, version):
        repo       = f"{settings.ORGANIZATION}/exporterhub.io"
        url        = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{content_type}/{version}"
        contents   = json.dumps({
                    'sha'    : sha,
                    'message': 'update_csv_file',
                    'content': base64.b64encode(str(content).encode('utf-8')).decode('utf-8')
                            })

        result = requests.put(url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})

        if result.status_code == 404:
            return "GITHUB_REPO_API_ERROR"

        return result

    def code_to_github(self, app_name, file_name, token, content_type, content, file_type, sha, bf_file_name, version):
        repo           = f"{settings.ORGANIZATION}/exporterhub.io"
        old_file_name  = bf_file_name.strip('"')
        url            = f"https://api.github.com/repos/{repo}/contents/{old_file_name}"
        delete_content = json.dumps({'sha': sha, 'message': 'delete_old_file'})
        delete         = requests.delete(url, data=delete_content, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})
            
        if delete.status_code == 200:
            create_url = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{version}/{file_name}_{content_type}.{file_type}"
            contents   = json.dumps({
                    'name'   : file_name,
                    'sha'    : sha,
                    'message': 'update_csv_file',
                    'content': base64.b64encode(str(content).encode('utf-8')).decode('utf-8')
                            })
            result = requests.put(create_url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})

            if result.status_code == 404:
                return "GITHUB_REPO_API_ERROR" 

            return result

        else:
            create_url = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{version}/{file_name}_{content_type}.{file_type}"
            contents   = json.dumps({
                    'sha'    : sha,
                    'message': 'update_csv_file',
                    'content': base64.b64encode(str(content).encode('utf-8')).decode('utf-8')
                            })

            result = requests.put(create_url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})

            if result.status_code == 404:
                return "GITHUB_REPO_API_ERROR"

            return result

        return "GITHUB_REPO_API_ERROR"

    def csv_to_github(self, app_name, file_name, token, content_type, content, file_type, sha, file_id, version):
        repo         = f"{settings.ORGANIZATION}/exporterhub.io"
        csv_url      = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{version}/{app_name}_{content_type}.{file_type}"
        data         = requests.get(csv_url, headers={'Content-Type': 'application/json', 'Authorization': 'token ' + token})
        response     = ''
        bf_file_name = ''
        content_list = []
        count        = 0

        type         = {
                    'alert'     : 'yaml',
                    'dashboard' : 'json',
                    'helm'      : 'yaml',
                }

        if data.status_code == 200:
            result       = data.json()
            csv_content  = base64.b64decode(result['content']).decode('utf-8')
            details      = csv_content.split('\n')
            details      = [v for v in details if v]

            for j in details:
                csv_contents = j.split(',')
                content_list.append(csv_contents)
            yaml_id  = len(content_list) + 1

            for i, detail in enumerate(content_list):
                if detail[0] == f'"{file_id}"':
                    bf_file_name       = detail[2].strip()
                    content_list[i][1] = f'"{content}"'
                    content_list[i][2] = f'"./contents/{app_name}/nc/{version}/{file_name}_{content_type}.{type[content_type]}"'
                    count += 1
            if count == 0:
                content_list.append([f'"0{yaml_id}","{content}","./contents/{app_name}/nc/{version}/{file_name}_{content_type}.{type[content_type]}",'])

            for each_content in content_list:
                response += ','.join(each_content) + '\n'
            contents = json.dumps(
                        {
                            "sha"     : result['sha'],
                            'message' : 'wip',
                            "content" : base64.b64encode(response.encode('utf-8')).decode('utf-8')
                        }
                        )

            result   = requests.put(csv_url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'})

            if result.status_code == 404:
                return "GITHUB_REPO_API_ERROR"

            return {'result' :result , 'bf_file_name': bf_file_name}

        elif data.status_code == 404:
            response = f'"01","{content}", "./contents/{app_name}/nc/{version}/{file_name}_{content_type}.{type[content_type]}", \n'
            contents = json.dumps(
                    {
                        'message' : 'wip',
                        "content" : base64.b64encode(response.encode('utf-8')).decode('utf-8')
                    }
                    )

            result   = requests.put(csv_url, data=contents, headers={'Authorization': 'token ' + token, 'Content-Type':'application/vnd.github.v3+json'}) 

            if result.status_code == 404:
                return "GITHUB_REPO_API_ERROR"

            return {'result' :result , 'bf_file_name': bf_file_name}

        else:
            return "GITHUB_REPO_API_ERROR" 


    @admin_decorator
    def post(self, request, exporter_id):
        try:
            user           = request.user
            exporter       = Exporter.objects.get(id=exporter_id)
            token          = user.github_token
            data           = json.loads(request.body)
            app_name       = exporter.name
            content_type   = request.GET['type']

            if not app_name:
                return JsonResponse({'message': 'TITLE_REQUIRED'}, status=400)
            
            type    = {
                    'alert'     : 'yaml',
                    'dashboard' : 'json',
                    'helm'      : 'yaml',
                }

            file_sha       = data['file_sha'] if data['file_sha'] else ''
            file_name      = data["file_name"] if data['file_name'] else '-'
            file_content   = data["file_content"] 
            csv_desc       = data["csv_desc"] if data["csv_desc"] else '-'
            csv_sha        = data['csv_sha'] if data['file_sha'] else ''
            file_id        = data['file_id'] if data['file_id'] else ''
            version        = data['version']
            
            if content_type == 'helm':
                helm_result = self.helm_to_github(app_name=app_name, token=token, content_type=content_type, content = file_content, file_type = type[content_type], sha=file_sha, version = version)

                if helm_result == 'GITHUB_REPO_API_ERROR':
                    return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)

            else:
                csv_result   = self.csv_to_github(app_name=app_name, file_name=file_name, token=token, content_type=content_type, content = csv_desc, file_type = 'csv', sha=csv_sha, file_id = file_id, version = version)

                if csv_result['bf_file_name']:
                    code_result  = self.code_to_github(app_name=app_name, file_name=file_name, token=token, content_type=content_type, content = file_content, file_type = type[content_type], sha=file_sha, bf_file_name = csv_result['bf_file_name'], version = version)
                else:
                    code_result  = self.code_to_github(app_name=app_name, file_name=file_name, token=token, content_type=content_type, content = file_content, file_type = type[content_type], sha=file_sha, bf_file_name = "", version = version)
 
            if code_result == 'GITHUB_REPO_API_ERROR' or csv_result == 'GITHUB_REPO_API_ERROR':
                return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)

            return JsonResponse({'message': 'SUCCESS'}, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

    def helm_file_delete(self, app_name, content_type, file_type, token, version): 
        repo        = f"{settings.ORGANIZATION}/exporterhub.io"  
        url         = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{content_type}/{version}"
        data        = requests.get(url, headers={'Content-Type': 'application/json', 'Authorization': 'token ' + token})

        if data.status_code == 404:
            return 'FILE_NOT_EXISTING' 
            
        elif data.status_code == 200:  
            data = data.json()
            contents = json.dumps(
                    {
                        "sha" : data['sha'],
                        'message' : 'delete_helm_file'
                    })

            helm_result = requests.delete(url, data=contents, headers={'Authorization': 'token ' + token})

            if helm_result.status_code == 404:
                return "GITHUB_REPO_API_ERROR"

            return helm_result

        else:
            return 'GITHUB_REPO_API_ERROR' 

    def code_file_delete(self, token, yaml_url):
        repo        = f"{settings.ORGANIZATION}/exporterhub.io"  
        yaml_urls   = yaml_url.replace('"','')
        yaml_urls   = yaml_urls.strip()
        url         = f"https://api.github.com/repos/{repo}/contents/{yaml_urls}"
        data        = requests.get(url, headers={'Content-Type': 'application/json', 'Authorization': 'token ' + token})
        

        if data.status_code == 404:
            return 'FILE_NOT_EXISTING' 
            
        elif data.status_code == 200:  
            data = data.json()
            contents = json.dumps(
                    {
                        "sha" : data['sha'],
                        'message' : 'delete_code_file'
                    })

            code_result = requests.delete(url, data=contents, headers={'Authorization': 'token ' + token})

            if code_result.status_code == 404:
                return "GITHUB_REPO_API_ERROR"

            return code_result

        else:
            return 'GITHUB_REPO_API_ERROR' 
             

    def csv_file_delete(self, app_name, content_type, file_type, token, file_id, version):
        repo         = f"{settings.ORGANIZATION}/exporterhub.io"        
        url          = f"https://api.github.com/repos/{repo}/contents/contents/{app_name}/nc/{version}/{app_name}_{content_type}.{file_type}"
        content_list = []
        results      = []
        response     = ''
        code_url     = ''
        
        data = requests.get(url, headers={'Content-Type': 'application/json', 'Authorization': 'token ' + token})

        if data.status_code == 404:
            return "FILE_NOT_EXISTING"
            
        elif data.status_code == 200:
            data         = data.json()
            csv_content  = base64.b64decode(data['content']).decode('utf-8')
            details      = csv_content.split('\n')
            details      = [v for v in details if v]

            for j in details:
                csv_contents = j.split(',')
                content_list.append(csv_contents)

            for i, detail in enumerate(content_list):
                if detail[0] == f'"{file_id}"':
                    code_url = detail[2]
                else:
                    results.append([detail[0], detail[1], detail[2], '\n'])

            if results == []:
                contents = json.dumps({
                        "message" : 'delete_csv',
                        "sha"     : data['sha']
                    })
                csv_delete = requests.delete(url, data=contents,headers={'Authorization': 'token ' + token})

                if csv_delete == 404:
                    return "GITHUB_REPO_API_ERROR"
                   
                return {'result' : csv_delete, 'code_url' : code_url}

            for content in results:
                response += ','.join(content)
            contents = json.dumps({
                        "message" : 'wip',
                        "sha"     : data['sha'],
                        "content" : base64.b64encode(response.encode('utf-8')).decode('utf-8')
                    })

            result  = requests.put(url, data=contents, headers={'Authorization': 'token ' + token})
            return {'result' : result, 'code_url' : code_url}

        return "GITHUB_REPO_API_ERROR"


    @admin_decorator
    def delete(self, request, exporter_id):
        try:
            user           = request.user
            token          = user.github_token
            exporter       = Exporter.objects.get(id=exporter_id)
            content_type   = request.GET['type']
            app_name       = exporter.name

            if not app_name:
                    return JsonResponse({'message': 'TITLE_REQUIRED'}, status=400)

            type    = {
                    'alert'     : 'yaml',
                    'dashboard' : 'json',
                    'helm'      : 'yaml',
                }

            version   = request.GET['version']

            if content_type == 'helm':
                helm_result = self.helm_file_delete(app_name = app_name, content_type = content_type, file_type = type[content_type], token = token, version=version)

                if helm_result == 'GITHUB_REPO_API_ERROR':
                    return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)

                if helm_result == "FILE_NOT_EXISTING":
                    return JsonResponse({'messasge':"FILE_NOT_EXISTING"}, status=404)
               
                return JsonResponse({'message': 'SUCCESS'}, status=200)

            else:    
                file_id   = request.GET['file_id']

                csv_result  = self.csv_file_delete(app_name = app_name, content_type = content_type, file_type = 'csv', token = token, file_id=file_id, version = version)
                code_result = self.code_file_delete(token = token, yaml_url = csv_result['code_url'])

                if code_result == 'GITHUB_REPO_API_ERROR' or csv_result == 'GITHUB_REPO_API_ERROR':
                    return JsonResponse({'message': 'GITHUB_REPO_API_ERROR'}, status=404)

                if code_result == "FILE_NOT_EXISTING" or csv_result == "FILE_NOT_EXISTING":
                    return JsonResponse({'messasge':"FILE_NOT_EXISTING"}, status=404)
               
                return JsonResponse({'message': 'SUCCESS'}, status=200)
            
        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)
