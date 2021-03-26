from django.urls     import path
from user.views      import GithubLoginView, TestView

urlpatterns = [
    path('/login', GithubLoginView.as_view()),
    path('/test', TestView.as_view())
]