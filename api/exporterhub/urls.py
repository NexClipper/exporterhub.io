from django.urls     import path, include
from headtoken.views import InitView

urlpatterns = [
    path('init_done', InitView.as_view()),
    path('exporter', include('exporter.urls')),
    path('headtoken', include('headtoken.urls')),
    path('user', include('user.urls'))
]
