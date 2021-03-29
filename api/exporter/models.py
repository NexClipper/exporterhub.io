from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        db_table='categories'

class Official(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        db_table = 'officials'

class Exporter(models.Model):
    category       = models.ForeignKey(Category, on_delete=models.CASCADE)
    official       = models.ForeignKey(Official, on_delete=models.SET_NULL, null=True)
    name           = models.CharField(max_length=200)
    app_name       = models.CharField(max_length=45, null=True)
    logo_url       = models.URLField(max_length=2000)
    stars          = models.IntegerField()
    repository_url = models.URLField(max_length=2000)
    description    = models.TextField()
    readme_url     = models.URLField(max_length=2000)
    readme         = models.BinaryField()
    comment        = models.TextField(null=True)
    view_count     = models.PositiveIntegerField(default=0)
    created_at     = models.DateTimeField(auto_now_add=True)
    modified_at    = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'exporters'

class Release(models.Model):
    exporter    = models.ForeignKey(Exporter, on_delete=models.CASCADE)
    release_url = models.URLField(max_length=2000)
    version     = models.CharField(max_length=200)
    date        = models.DateTimeField()

    class Meta:
        db_table = 'releases'

class Log(models.Model):
    exporter    = models.ForeignKey(Exporter, on_delete=models.CASCADE)
    official    = models.ForeignKey(Official, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    comment     = models.TextField(null=True)
    readme      = models.BinaryField()
    created_at  = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'logs'
