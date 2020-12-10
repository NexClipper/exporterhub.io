import json

from django.views import View
from django.http import JsonResponse

from hub.models import Category

class CategoryView(View):
    def get(self, request):
        categories=Category.objects.all()
        data={"categories":
            [{   
                "category_id"  : category.id,
                "category_name": category.name
            } for category in categories]
        }
        return JsonResponse(data, status=200)