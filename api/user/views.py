import json
import jwt
import requests

from django.views            import View
from django.http             import JsonResponse
from django.db.models        import Q

from exporterhub.settings.local    import SECRET_KEY, ALGORITHM
from .models                 import User, UserType, Bucket, Star



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
            

            if User.objects.filter(username=user_data.get('login').exists():
                user = User.objects.get(username=user_data.get('login')
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





