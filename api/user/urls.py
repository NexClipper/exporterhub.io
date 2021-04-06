from django.urls     import path
from user.views      import (GithubLoginView, StarView, ProfileView, 
                             BucketView, AdminView, UserListView, CheckAdminView)

urlpatterns = [
    path('/login', GithubLoginView.as_view()),
    path('/star', StarView.as_view()),
    path('/profile', ProfileView.as_view()),
    path('/bucket', BucketView.as_view()),
    path('/admin', AdminView.as_view()),
    path('/search', UserListView.as_view()),
    path('/check', CheckAdminView.as_view()),
]
