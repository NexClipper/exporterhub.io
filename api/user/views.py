import json
import jwt
import requests

from django.views            import View
from django.http             import JsonResponse
from django.db.models        import Q
from django.conf             import settings 
from django.core.exceptions  import ObjectDoesNotExist

from .models                 import User, UserType, Bucket, Star
from exporter.models         import Exporter
from user.utils              import login_decorator


class GithubLoginView(View):
    def post(self, request):
        try:
            data         = json.loads(request.body)
            github_token = data['token']
            headers      = {'Authorization' : 'token ' + github_token} 
            user_info    = requests.get('https://api.github.com/user', headers=headers)
            user_data    = user_info.json()

            username          = user_data.get('login')
            email             = user_data.get('email')
            organization      = user_data.get('company')
            profile_image_url = user_data.get('avatar_url')
            usertype_name     = "user" if User.objects.filter().exists() else "admin"

            if User.objects.filter(username=username).exists():
                user  = User.objects.get(username=username)
                token = jwt.encode({'id':user.id, 'usertype':user.type.name}, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
                
                return JsonResponse({'message' : 'SUCCESS', 'access_token': token}, status = 200)

            user = User.objects.create(
                username          = username,
                email             = email,
                organization      = organization,
                profile_image_url = profile_image_url,
                type              = UserType.objects.get(name=usertype_name)
            )
            token = jwt.encode({'id':user.id, 'usertype':user.type.name}, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
            
            return JsonResponse({'message' : 'SUCCESS', 'access_token':token}, status = 200)
        
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)


@login_decorator
class StarView(View):
    def post(self, request):
        try:
            user    = request.user
            headers = {'Authorization' : 'token ' + user.github_token} 

            data        = json.loads(request.body)
            exporter_id = data['exporterId']
            exporter    = Exporter.objects.get(id=exporter_id)
            repo_info   = exporter.repository_url.replace('https://github.com/', '')
            
            # unstar
            if user.starred_exporters.filter(id=exporter_id).exists():
                result = requests.delete(f'https://api.github.com/user/starred/{repo_info}', headers=headers)

                if result.status_code != 204:
                    return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

                user.starred_exporters.remove(exporter)
                return JsonResponse({'message': 'SUCCESS', 'isStar': False}, status=200)
            
            # star
            result = requests.put(f'https://api.github.com/user/starred/{repo_info}', headers=headers)

            if result.status_code != 204:
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

            user.starred_exporters.add(exporter)
            return JsonResponse({'message': 'SUCCESS', 'isStar': True}, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)

