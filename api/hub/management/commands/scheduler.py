import requests
import base64
import logging
import datetime
import time
import re

from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.cron import CronTrigger
from django_apscheduler.jobstores import DjangoJobStore
from django_apscheduler.models import DjangoJobExecution

from django.conf import settings
from django.core.management.base import BaseCommand

from hub.models import Exporter, Release
from my_settings import TOKEN

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
file_handler = logging.FileHandler('update.log')
logger.addHandler(file_handler)

api_url = 'https://api.github.com/repos/'
headers = {'Authorization':TOKEN}
PATTERN = r"!\[(\w*|\s|\w+( \w+)*)\]\(([^,:!]*|\/[^,:!]*\.\w+|\w*.\w*)\)"


def update_exporters():
    exporters = Exporter.objects.select_related('category', 'official').prefetch_related('release_set').order_by('id')
    repo_urls = exporters.values_list('repository_url', flat=True)
    
    for repo_url in repo_urls:
        repo_api_url    = api_url+repo_url.replace('https://github.com/','')
        readme_api_url  = repo_api_url+'/readme'
        release_api_url = repo_api_url+'/releases'
        repository      = requests.get(repo_api_url, headers=headers)

        if repository.status_code==200:
            repo_data    = repository.json()
            readme       = requests.get(readme_api_url, headers=headers)
            readme_data  = readme.json()
            release      = requests.get(release_api_url, headers=headers)
            release_data = release.json()[0] if release.json() else []
            exporter     = exporters.get(repository_url=repo_url)
            new_readme   = base64.b64decode(readme_data["content"]).decode('utf-8')
            matches      = re.findall(PATTERN, readme)
            repo_name    = repo_url.replace('https://github.com/','')

            for match in matches:
                for element in match:
                    if '.' in element:
                        new_readme=new_readme.replace(element,f"https://raw.githubusercontent.com/{repo_name}/master/{element}")

            if str(exporter.modified_at) < repo_data['updated_at']:
                Exporter.objects.filter(id=exporter.id).update(
                    stars       = repo_data["stargazers_count"],
                    description = repo_data["description"],
                    readme      = new_readme.encode('utf-8')
                )
                logger.info(f'id: {exporter.id} name: {exporter.name} | SUCCESSFULLY_UPDATED_REPOSITORY_INFO | {datetime.datetime.now()}')

                if release_data and (str(exporter.release_set.last()) < release_data['created_at']):
                    Release.objects.create(
                        exporter_id=exporter.id,
                        date=release_data['created_at'],
                        version=release_data['tag_name'],
                        release_url=release_data['html_url']
                    )
                    logger.info(f'id: {exporter.id} name: {exporter.name} SUCCESSFULLY_UPDATED_RELEASE_INFO | {datetime.datetime.now()}')

            else:
                logger.info(f'id: {exporter.id} name: {exporter.name} NO_CHANGES_MADE | {datetime.datetime.now()}')
        else:
            logger.error(f"id: {exporter.id} name: {exporter.name} ERROR_CHECK_REPOSITORY({repo_url}) | {datetime.datetime.now()}")

def delete_old_job_executions(max_age=604_800):
    """This job deletes all apscheduler job executions older than `max_age` from the database."""
    DjangoJobExecution.objects.delete_old_job_executions(max_age)

class Command(BaseCommand):
    help="Update exporters' GitHub repository information."

    def handle(self,*args, **options):
        scheduler=BlockingScheduler(timezone=settings.TIME_ZONE)
        scheduler.add_jobstore(DjangoJobStore(),'default')

        scheduler.add_job(
            update_exporters,
            trigger=CronTrigger(hour='23', minute='50'),
            id='update_exporters',
            max_instances=1,
            replace_existing=True,
        )
        logger.info("Added job 'update_exporters'.")

        scheduler.add_job(
            delete_old_job_executions,
            trigger=CronTrigger(
                day_of_week="mon", hour="00", minute="00"
            ),
            id='delete_old_job_executions',
            max_instances=1,
            replace_existing=True,
        )
        logger.info("Added weekly job 'delete_old_job_executions'.")

        try:
            logger.info('Starting scheduler...')
            scheduler.start()
        except KeyboardInterrupt:
            logger.info('Stopping scheduler...')
            scheduler.shutdown()
            logger.info('Scheduler shut down successfully.')