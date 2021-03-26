from django.urls     import path, include
from headtoken.views import InitView

urlpatterns = [
    path('exporter', include('exporter.urls')),
    path('headtoken', include('headtoken.urls')),
    path('init_done', InitView.as_view()),
    path('user', include('user.urls'))
]