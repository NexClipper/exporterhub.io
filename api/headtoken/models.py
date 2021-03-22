from django.db import models

class Token(models.Model):
    token    = models.CharField(max_length=2000)
    is_valid = models.BooleanField()

    class Meta:
        db_table='tokens'