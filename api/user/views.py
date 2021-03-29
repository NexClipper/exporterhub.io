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
from user.utils              import login_decorator, login_check, admin_decorator


class GithubLoginView(View):
    def post(self, request):
        try:
            data         = json.loads(request.body)
            github_token = data['token']
            headers      = {'Authorization' : 'token ' + github_token} 
            user_info    = requests.get('https://api.github.com/user', headers=headers)
            
            if user_info.status_code != 200:
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

            user_data         = user_info.json()
            github_id         = user_data['id']
            username          = user_data.get('login')
            email             = user_data.get('email')
            organization      = user_data.get('company')
            profile_image_url = user_data.get('avatar_url')
            usertype_name     = "user" if User.objects.filter().exists() else "admin"

            user = User.objects.get_or_create(
                username = username,
                defaults = {
                    'email'            : email,
                    'organization'     : organization,
                    'profile_image_url': profile_image_url,
                    'type'             : UserType.objects.get(name=usertype_name),
                    'github_token'     : github_token,
                    'github_id'        : github_id
                }
            )[0]
            token = jwt.encode({'user_id':user.id, 'usertype':user.type.name}, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
            
            return JsonResponse({'message' : 'SUCCESS', 'access_token':token, 'type': user.type.name}, status = 200)
        
        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except UserType.DoesNotExist:
            return JsonResponse({'message': 'USERTYPE_DOES_NOT_EXIST'}, status=410)


class StarView(View):
    @login_decorator
    def post(self, request):
        try:
            user    = request.user
            headers = {'Authorization' : 'token ' + user.github_token} 

            data        = json.loads(request.body)
            exporter_id = data['exporter_id']
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
            return JsonResponse({'message':'NO_EXPORTER'}, status=410)

        except User.DoesNotExist:
            return JsonResponse({'message': 'NO_USER'}, status=410)


class ProfileView(View):
    def validate_email(self, email):
        pattern = re.compile('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
        return pattern.match(email)

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
            
            if not self.validate_email(email=email):
                return JsonResponse({"message": "EMAIL_VALIDATION_ERROR"}, status=400)

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


class BucketView(View):
    @login_decorator
    def post(self, request):
        try:
            user    = request.user
            headers = {'Authorization' : 'token ' + user.github_token}

            data        = json.loads(request.body)
            exporter_id = data['exporter_id']
            exporter    = Exporter.objects.get(id=exporter_id)
            repo_info   = exporter.repository_url.replace('https://github.com/', '')
            repo_name   = repo_info.split('/')[-1]

            if not user.added_exporters.filter(id=exporter_id).exists():
                result = requests.post(f'https://api.github.com/repos/{repo_info}/forks', headers=headers)

                if result.status_code != 202:
                    print("error")
                    return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

                Bucket.objects.create(
                    exporter = exporter,
                    user     = user,
                    forked_repository_url = f'https://github.com/{user.username}/{repo_name}'
                )

                return JsonResponse({'message': 'SUCCESS'}, status=200)

            return JsonResponse({'message': 'ALREADY_FORKED'}, status=200)

        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except Exporter.DoesNotExist:
            return JsonResponse({'message': 'EXPORTER_DOSE_NOT_EXIST'}, status=410)

    @login_decorator
    def delete(self, request):
        try:
            user    = request.user
            headers = {'Authorization' : 'token ' + user.github_token}

            exporter_id      = request.GET['exporter_id']
            is_delete_all    = request.GET.get('is_delete_all')
            exporter         = Exporter.objects.get(id=exporter_id)
            forked_exporter  = Bucket.objects.get(exporter=exporter, user=user)
            forked_repo_info = forked_exporter.forked_repository_url.replace('https://github.com/', '')

            if is_delete_all:
                result = requests.delete(f'https://api.github.com/repos/{forked_repo_info}', headers=headers)

                if result.status_code != 204:
                    return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

            forked_exporter.delete()

            return JsonResponse({'message': 'SUCCESS'}, status=200)
            
        except KeyError:
            return JsonResponse({'message': 'KEY_ERROR'}, status=400)

        except Exporter.DoesNotExist:
            return JsonResponse({'message': 'NO_EXPORTER'}, status=410)
        
        except Bucket.DoesNotExist:
            return JsonResponse({'message': 'NO_EXPORTER_IN_BUCKET'}, status=410)

    @login_decorator
    def get(self, request):
        user = request.user

        forked_exporters_id_list = Bucket.objects.filter(user=user).values_list('exporter_id', flat=True)

        if not forked_exporters_id_list:
            return JsonResponse({'message': 'EMPTY'}, status=200)

        forked_exporters = Exporter.objects.select_related('category', 'official')\
                            .filter(id__in=forked_exporters_id_list).order_by('-id')

        exporters = [
                {
                    "exporter_id"    : forked_exporter.id,
                    "name"           : forked_exporter.name,
                    "logo_url"       : forked_exporter.logo_url,
                    "category"       : forked_exporter.category.name,
                    "official"       : forked_exporter.official.name,
                    "stars"          : forked_exporter.stars,
                    "is_star"        : user.starred_exporters.filter(id=forked_exporter.id).exists(),
                    "repository_url" : forked_exporter.repository_url,
                    "description"    : forked_exporter.description,
                    "recent_release" : forked_exporter.release_set.order_by('date').last().date if forked_exporter.release_set.filter().exists() else '1970-01-01',
                } for forked_exporter in forked_exporters]
        
        return JsonResponse({'data': exporters}, status=200)


class TestView(View):
    def get(self, request):
        data = {
            'client_id'    : 'ee39a6aa02038e0866cf',
            'client_secret': 'f4ae0fd4d2d17eb2c799b0c73a1cadbcd9057f84',
            'code' : '3ec7134d2385da68a09c'
        }
        headers = {'accept': 'application/json'}
        token   = requests.post('https://github.com/login/oauth/access_token',data=data, headers=headers)
        token   = token.json()
        print(token)
        return JsonResponse({'message' : 'SUCCESS', 'token':token}, status = 200)

USER_CODE          = 1
PENDING_ADMIN_CODE = 2
ADMIN_CODE         = 3

class AdminView(View):
    @admin_decorator
    def post(self, request):
        try:
            user      = request.user    
            data      = json.loads(request.body)
            github_id = User.objects.get(username=data['name']).github_id

            data = {
                'invitee_id': github_id,            
                'role'      : 'admin'
            }

            headers = {'Authorization' : 'token ' + user.github_token}
            result  = requests.post('https://api.github.com/orgs/Exporterhubv3/invitations', data=json.dumps(data), headers=headers)

            if result.status_code != 201:
                return JsonResponse({'message': 'GITHUB_API_FAIL'}, status=400)

            return JsonResponse({'message' : 'CREATED'}, status=201)
        
        except KeyError:
            return JsonResponse({'message' : 'KEY_ERROR'}, status=400)

        except User.DoesNotExist:
            return JsonResponse({'message': 'USER_DOES_NOT_EXIST'}, status=400)

    @admin_decorator
    def get(self, request):
        try:
            user    = request.user   
            headers = {'Authorization' : 'token ' + user.github_token}
            result  = requests.get('https://api.github.com/orgs/Exporterhubv3/members', headers=headers)
            
            if result.status_code != 200:
                return JsonResponse({'message' : 'GITHUB_API_FAIL'}, status=400)
            
            result_json = result.json()
            admin_list  = [admin_info['login'] for admin_info in result_json]
    
            for pending_admin in User.objects.filter(type_id=PENDING_ADMIN_CODE):
                if pending_admin in admin_list:
                    pending_admin.type.name='admin'
                    pending_admins.save()

            admin = [{
                'username'        : admin.username,
                'usertype'        : 'Admin',
                'profileImageUrl' : admin.profile_image_url
            } for admin in User.objects.filter(type_id=ADMIN_CODE)]

            return JsonResponse({'message' : 'SUCCESS', 'data':admin}, status=200)
        
        except KeyError:
            return JsonResponse({'message' : 'KEY_ERROR'}, status=400)
    
    @admin_decorator
    def patch(self, request):
        try:
            user     = request.user  
            data     = json.loads(request.body)
            username = data['username']
            headers  = {'Authorization' : 'token ' + user.github_token}
            result   = requests.delete(f'https://api.github.com/orgs/Exporterhubv3/members/{username}', headers=headers)
            
            if result.status_code != 204:
                return JsonResponse({'message' : 'GITHUB_API_FAIL'}, status=400)

            User.objects.filter(username=username).update(type_id=USER_CODE)

            return JsonResponse({'message' : 'SUCCESS'}, status=204)

        except KeyError:
            return JsonResponse({'message' : 'KEY_ERROR'}, status=400)



class UserListView(View):
    @admin_decorator
    def get(self, request):
        keyword  = request.GET.get('q')
        
        if not keyword:
            return JsonResponse({'message':'NEED_KEYWORD'}, status=400)
        
        users = [{
            'username'        : user.username,
            'usertype'        : user.type.name,
            'profileImageUrl' : user.profile_image_url
        } for user in User.objects.filter(username__icontains=keyword)]

        return JsonResponse({'message' : 'SUCCESS', 'data':users}, status=200)
