import os
import django
import csv
import sys

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'exporterhub.settings.base')
django.setup()

from user.models import UserType

CSV_PATH = "./csv/user_type.csv"
with open(CSV_PATH) as in_file:
    data_reader = csv.reader(in_file)
    next(data_reader, None)
    for row in data_reader:
        if row[0]:
            id   = row[0]
            name = row[1]
            print(id, name)

            UserType.objects.create(id=id, name=name)
