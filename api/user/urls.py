from django.urls     import path
from user.views      import GithubLoginView, StarView, ProfileView, BucketView, TestView

urlpatterns = [
    path('/login', GithubLoginView.as_view()),
    path('/star', StarView.as_view()),
    path('/profile', ProfileView.as_view()),
    path('/bucket', BucketView.as_view()),
    path('/test', TestView.as_view()),
]
