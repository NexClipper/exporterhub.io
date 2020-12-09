import json

from django.views import View
from django.http import JsonResponse

from hub.models import Token, Exporter, Release, Category

api_url = 'https://api.github.com/repos/'
PATTERN = r"!\[(\w*|\s|\w+( \w+)*)\]\(([^,:!]*|\/[^,:!]*\.\w+|\w*.\w*)\)"
categories={category.name:category.id for category in Category.objects.all()}


class TokenView(View):
    def get_exporters(self, token):
    exporters     = Exporter.objects.select_related('category', 'official').prefetch_related('release_set').order_by('id')
    exporter_list = 'https://raw.githubusercontent.com/NexClipper/exporterhub/master/api/exporter_list.csv'
    repo_get      = requests.get(exporter_list)
    headers       = {'Authorization' : 'token ' + token}

    if repo_get.status_code == 200:
        repo_infos = csv.reader(repo_get.text.strip().split('\n'))
        next(repo_infos, None)

        for info in repo_infos:
            repo_name     = info[0]
            repo_url      = info[1]
            repo_official = 1 if info[2] == '1' else 2
            repo_category = info[3]

            if not exporters.filter(repository_url=repo_url).exists():
                repo_api_url    = api_url+repo_url.replace('https://github.com/','')
                readme_api_url  = repo_api_url+'/readme'
                release_api_url = repo_api_url+'/releases'
                repository      = requests.get(repo_api_url, headers=headers)

                if repository.status_code==200:
                    repo_data    = repository.json()
                    readme       = requests.get(readme_api_url, headers=headers)
                    readme_data  = readme.json()
                    release      = requests.get(release_api_url, headers=headers)
                    release_data = release.json() if release.json() else []
                    new_readme   = base64.b64decode(readme_data["content"]).decode('utf-8')
                    matches      = re.findall(PATTERN, new_readme)
                    repo_address = repo_url.replace('https://github.com/','')
                    categories   = {category.name:category.id for category in Category.objects.all()}

                    for match in matches:
                        for element in match:
                            if '.' in element:
                                new_readme = new_readme.replace(element,f"https://raw.githubusercontent.com/{repo_address}/master/{element}")

                    exporter=Exporter.objects.create(
                        category_id    = categories[repo_category],
                        official_id    = repo_official,
                        name           = repo_name,
                        logo_url       = repo_data["owner"]["avatar_url"],
                        stars          = repo_data["stargazers_count"],
                        repository_url = repo_url,
                        description    = repo_data["description"],
                        readme_url     = repo_url+"/blob/master/README.md",
                        readme         = new_readme.encode('utf-8'),
                    )

                    releases=sorted(release_data, key=lambda x: x["created_at"])

                    for info in releases:
                        Release(
                            exporter_id = exporter.id,
                            release_url = info["html_url"],
                            version     = info["tag_name"],
                            date        = info["created_at"]
                        ).save()

                    logger.info(f'id: {exporter.id} name: {exporter.name} | SUCCESSFULLY_ADDED_REPOSITORY | {datetime.datetime.now()}')

                else:
                    logger.error(f"ERROR_CHECK_REPOSITORY({repo_url}) | {datetime.datetime.now()}")
    
    else:
        return JsonResponse({'message':"ERROR_CHECK_EXPORTERHUB'S_LIST"}, status=400)

    def get(self, request):
        token = Token.objects.filter()
        if not token.exists():
            return JsonResponse({'message':'CREATE_TOKEN_FIRST'}, status=400)
        
        return JsonResponse({'TOKEN':token.last().token}, status=200)
        
    def post(self, request):
        try:
            data         = json.loads(request.body)
            token        = data['token']
            if Token.objects.filter().exists():
                Token.objects.update(token=token, is_valid=True)
            else:
                Token.objects.create(token=token, is_valid=True)

            

            return JsonResponse({'message':'SUCCESS'}, status=200)

        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)