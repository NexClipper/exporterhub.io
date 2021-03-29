from .base import *
import my_settings

DATABASES = my_settings.DATABASES

SECRET_KEY = my_settings.SECRET_KEY
ALGORITHM  = my_settings.ALGORITHM

DEBUG = True

<<<<<<< HEAD
#LOGGING = {
#    'version': 1,
#    'filters': {
#        'require_debug_true': {
#            '()': 'django.utils.log.RequireDebugTrue',
#        }
#    },
#    'handlers': {
#        'console': {
#            'level': 'DEBUG',
#            'filters': ['require_debug_true'],
#            'class': 'logging.StreamHandler',
#        }
#    },
#    'loggers': {
#        'django.db.backends': {
#            'level': 'DEBUG',
#            'handlers': ['console'],
#        }
#    }
#}
=======
# LOGGING = {
#     'version': 1,
#     'filters': {
#         'require_debug_true': {
#             '()': 'django.utils.log.RequireDebugTrue',
#         }
#     },
#     'handlers': {
#         'console': {
#             'level': 'DEBUG',
#             'filters': ['require_debug_true'],
#             'class': 'logging.StreamHandler',
#         }
#     },
#     'loggers': {
#         'django.db.backends': {
#             'level': 'DEBUG',
#             'handlers': ['console'],
#         }
#     }
# }
>>>>>>> 28b4bb874b5bc31cac42b7b8d3adff10e7d9fc0f
