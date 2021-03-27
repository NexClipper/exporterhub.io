from django.urls     import path
from user.views      import GithubLoginView, ProfileView

urlpatterns = [
    path('/login', GithubLoginView.as_view()),
    path('/profile', ProfileView.as_view()),
]
