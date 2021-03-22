import os

SECRET_KEY = 'supersecretkey'


DATABASES = {
    'default' : {
        'ENGINE'  : 'django.db.backends.mysql',
        'NAME'    : "exporterhub",
        'USER'    : "root",
        'PASSWORD': 'secret',
        'HOST'    : "127.0.0.1",
        'PORT'    : "3306",
    }
}