import json
import jwt
import requests

from django.views            import View
from django.http             import JsonResponse
from django.db.models        import Q
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
            

            if User.objects.filter(username=username.exists():
                user  = User.objects.get(username=username)
                token = jwt.encode({'id':user.id, 'usertype':user.type.name}, SECRET_KEY, algorithm=ALGORITHM)
                
                return JsonResponse({'message' : 'SUCCESS', 'access_token':token}, status = 200)
            
            user = User.objects.create(
                username          = username,
                email             = email,
                organization      = organization,
                profile_image_url = profile_image_url,
                type              = UserType.objects.get(name=usertype_name)
            )
            token = jwt.encode({'id':user.id, 'usertype':user.type.name}, SECRET_KEY, algorithm=ALGORITHM)
            
            return JsonResponse({'message' : 'SUCCESS', 'access_token':token}, status = 200)
        
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)

class ProfileView(View):
    #@login_decorater
    def patch(self, request):
        try:
            user         = request.user
            data         = json.load(request.body)
            email        = data.get('email', user.email)
            fullname     = data.get('name', user.fullname)
            organization = data.get('organization', user.organization)

            user = User.object.get(id=user.id)
            user.email        = email
            user.fullname     = fullname
            user.organization = organization
            user.save()

            return JsonResponse({'message': 'SUCCESS'}, status=200)

        except User.DoesNotExist:
            return JsonResponse({'message': 'NO_USER'}, status=400)

    def delete(self, reuquest):
