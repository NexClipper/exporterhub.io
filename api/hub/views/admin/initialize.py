from django.views import View
from django.http import JsonResponse

class InitView(View):
    def get(self, request):
        return JsonResponse({'message':'OK'}, status=200)