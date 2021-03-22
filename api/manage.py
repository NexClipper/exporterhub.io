#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'exporterhub.settings.local')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

    from hub.models import Category, Official
    if 'migrate' in sys.argv:
        if not Category.objects.filter().exists():
            Category.objects.bulk_create([
                Category(name='Database'),
                Category(name='Hardware'),
                Category(name='HTTP'),
                Category(name='Library'),
                Category(name='Logging'),
                Category(name='Messaging'),
                Category(name='Miscellaneous'),
                Category(name='Monitoring'),
                Category(name='Software'),
                Category(name='Storage'),
            ])
            print('Added Categories')
        if not Official.objects.filter().exists():
            Official.objects.bulk_create([
                Official(name='Official'),
                Official(name='Unofficial')
            ])
            print('Added Officials')


if __name__ == '__main__':
    main()
