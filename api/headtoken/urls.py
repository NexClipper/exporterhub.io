from django.urls import path
from .views      import TokenView, InitView

urlpatterns = [
    path('', TokenView.as_view()),
    path('/init_done', InitView.as_view()),
]