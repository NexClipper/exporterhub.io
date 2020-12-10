import json

from django.views import View
from django.http import JsonResponse

from hub.models import Exporter

class DetailView(View):
    def get(self, request, exporter_id):
        try:
            exporter=Exporter.objects.select_related('category','official').prefetch_related('release_set').get(id=exporter_id)
            data={
                        'exporter_id'    : exporter.id,
                        'name'           : exporter.name,
                        'logo_url'       : exporter.logo_url,
                        'category'       : exporter.category.name,
                        'official'       : exporter.official.name,
                        'stars'          : exporter.stars,
                        'repository_url' : exporter.repository_url,
                        'description'    : exporter.description,
                        'readme'         : exporter.readme.decode('utf-8'),
                        'recent_release' : exporter.release_set.last().date if exporter.release_set.all() else '1970-01-01',
                        'release'        : [{
                            'release_version': release.version,
                            'release_date'   : release.date,
                            'release_url'    : release.release_url
                        } for release in exporter.release_set.all()],
                    }
            
            return JsonResponse(data, status=200)

        except Exporter.DoesNotExist:
            return JsonResponse({'message':'NO_EXPORTER'}, status=400)