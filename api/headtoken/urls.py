from django.urls import path
from .views      import TokenView

urlpatterns = [
    path('', TokenView.as_view()),
]