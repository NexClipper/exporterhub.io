from django.urls     import path
from user.views      import GithubLoginView, StarView

urlpatterns = [
    path('/login', GithubLoginView.as_view()),
    path('/star', StarView.as_view()),
]
