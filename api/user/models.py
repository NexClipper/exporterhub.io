from django.db       import models
from exporter.models import Exporter

class UserType(models.Model):
    id   = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45)

    class Meta:
        db_table = 'user_types'

class User(models.Model):
    username              = models.CharField(max_length=45, unique=True, null=True)
    type                  = models.ForeignKey('UserType', on_delete=models.SET_NULL, null=True)
    email                 = models.CharField(max_length=100, unique=True, null=True)
    fullname              = models.CharField(max_length=50, null=True)
    organization          = models.CharField(max_length=50, null=True)
    profile_image_url     = models.URLField(max_length=2000)
    created_at            = models.DateTimeField(auto_now_add=True)
    modified_at           = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'users'

class Bucket(models.Model):
    exporter              = models.ForeignKey('exporter.Exporter', on_delete=models.CASCADE)
    user                  = models.ForeignKey('User', on_delete=models.CASCADE)
    forked_repository_url = models.URLField(max_length=2000)

    class Meta:
        db_table = 'buckets'

class Star(models.Model):
    exporter = models.ForeignKey('exporter.Exporter', on_delete=models.CASCADE)
    user     = models.ForeignKey('User', on_delete=models.CASCADE)

    class Meta:
        db_table = 'stars'
