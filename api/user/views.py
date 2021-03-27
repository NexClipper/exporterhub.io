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
                token = jwt.encode({'user_id':user.id, 'usertype':user.type.name}, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
                #print(jwt.decode(token, settings.SECRET_KEY, settings.ALGORITHM))
                
                return JsonResponse({'message' : 'SUCCESS', 'access_token':token}, status = 200)
            
            user = User.objects.create(
                username          = username,
                email             = email,
                organization      = organization,
                profile_image_url = profile_image_url,
                type              = UserType.objects.get(name=usertype_name)
            )
            token = jwt.encode({'user_id':user.id, 'usertype':user.type.name}, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
            
            return JsonResponse({'message' : 'SUCCESS', 'access_token':token}, status = 200)
        
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)

class ProfileView(View):
    @login_decorator
    def get(self, request):
        user = request.user
        data = {
            'username'    : user.username,
            'email'       : user.email,
            'fullName'    : user.fullname,
            'organization': user.organization,
            'type'        : user.type.name
        }
        return JsonResponse({'message': 'SUCCESS', 'data': data}, status=200)

    @login_decorator
    def patch(self, request):
        try:
            user         = request.user
            data         = json.loads(request.body)
            email        = data.get('email', user.email)
            fullname     = data.get('name', user.fullname)
            organization = data.get('organization', user.organization)

            user = User.objects.get(id=user.id)
            user.email        = email
            user.fullname     = fullname
            user.organization = organization
            user.save()

            return JsonResponse({'message': 'SUCCESS'}, status=200)

        except User.DoesNotExist:
            return JsonResponse({'message': 'NO_USER'}, status=400)


    @login_decorator
    def delete(self, reuquest):
        reuquest.user.delete()
        
        return JsonResponse({'message': 'SUCCESS'}, status=200)
