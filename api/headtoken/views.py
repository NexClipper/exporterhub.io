import json
import requests
import base64
import re
import csv

from django.views    import View
from django.http     import JsonResponse

from .models         import Token
from exporter.models import Exporter, Release, Category


class TokenView(View):
    def get(self, request):
        token = Token.objects.filter()
        if not token.exists():
            return JsonResponse({'token_state':False,'token':''}, status=400)

        token_valid = token.last().is_valid if Token.objects.filter().exists() else False
        return JsonResponse({'TOKEN_VALID':token_valid, 'TOKEN':token.last().token}, status=200)
        
    def post(self, request):
        try:
            data         = json.loads(request.body)
            input_token  = data['token']
            
            if Token.objects.filter().exists():
                Token.objects.filter().update(token=input_token, is_valid=True)
            else:
                Token.objects.create(token=input_token, is_valid=True)

            token=Token.objects.filter().last()

            return JsonResponse({'message': 'SUCCESS'}, status=200)
            
        except KeyError:
            return JsonResponse({'message':'KEY_ERROR'}, status=400)

class InitView(View):
    def get(self, request):
        return JsonResponse({'message':'OK'}, status=200)