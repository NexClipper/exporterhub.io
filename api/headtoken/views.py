import json
import requests

from django.views    import View
from django.http     import JsonResponse
from django.conf     import settings

from .models         import Token


class TokenView(View):
    def get(self, request):

        if not Token.objects.filter().exists():
            return JsonResponse({'token_state':False, 'token':''}, status=400)
        
        token_info  = Token.objects.last()
        headers     = {'Authorization': 'token ' + token_info.token}
        
        check_valid = requests.get('https://api.github.com/repos/NexClipper/exporterhub.io', headers=headers)
        if check_valid.status_code == 401:
            token_info.is_valid = False
            token_info.save()

        #return JsonResponse({'TOKEN_VALID': token_info.is_valid, 'TOKEN': token_info.token}, status=200)
        return JsonResponse({'TOKEN_VALID': token_info.is_valid, 'TOKEN': token_info.token, "secret": settings.SECRET_KEY}, status=200)
        
    def post(self, request):
        try:
            data         = json.loads(request.body)
            input_token  = data['token']
            
            Token.objects.update_or_create(
                defaults = {
                    'token'   : input_token,
                    'is_valid': True
                }
            )

            return JsonResponse({'message': 'SUCCESS'}, status=200)
            
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)


class InitView(View):
    def get(self, request):
        return JsonResponse({'message':'OK'}, status=200)
