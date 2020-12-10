import json

from django.views import View
from django.http import JsonResponse

from hub.models import Exporter

class MainView(View):
    def get(self, request):
        try:
            exporters=Exporter.objects.select_related('category', 'official').prefetch_related('release_set').order_by('id')
            data={
                "exporters":
                [
                    {
                        "exporter_id"    : exporter.id,
                        "name"           : exporter.name,
                        "logo_url"       : exporter.logo_url,
                        "category"       : exporter.category.name,
                        "official"       : exporter.official.name,
                        "stars"          : exporter.stars,
                        "repository_url" : exporter.repository_url,
                        "description"    : exporter.description,
                        "recent_release" : exporter.release_set.last().date if exporter.release_set.all() else '1970-01-01',
                        "release"        : [{
                            "release_version": release.version,
                            "release_date"   : release.date,
                            "release_url"    : release.release_url
                        } for release in exporter.release_set.all()],
                    }
                for exporter in exporters]
            }

            return JsonResponse(data, status=200)
        except Exception as e:
            return JsonResponse({'message':f"{e}"}, status=400)