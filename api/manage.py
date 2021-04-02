#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'exporterhub.settings.base')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
    
    from user.models import UserType
    
    if 'migrate' in sys.argv:
        if not UserType.objects.filter().exists():
            UserType.objects.bulk_create([
                UserType(id=1, name='user'),
                UserType(id=2, name='admin pending'),
                UserType(id=3, name='admin')
            ])
            print('Added UserType')


if __name__ == '__main__':
    main()
