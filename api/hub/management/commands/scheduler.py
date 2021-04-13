import requests
import base64
import logging
import re
import csv
from datetime                          import datetime, date

# apscheduler
from apscheduler.schedulers.blocking   import BlockingScheduler
from apscheduler.triggers.cron         import CronTrigger
from apscheduler.events                import EVENT_JOB_ERROR, EVENT_JOB_EXECUTED
from django_apscheduler.jobstores      import DjangoJobStore
from django_apscheduler.models         import DjangoJobExecution

from django.conf                       import settings
from django.core.management.base       import BaseCommand

from exporter.models                   import Exporter, Release, Category, Official
from headtoken.models                  import Token

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

file_handler   = logging.FileHandler('update.log')
stream_handler = logging.StreamHandler()

logger.addHandler(file_handler)
logger.addHandler(stream_handler)

scheduler = BlockingScheduler(timezone=settings.TIME_ZONE)

api_url   = 'https://api.github.com/repos/'
PATTERN   = r"!\[(\w*|\s|\w+( \w+)*)\]\(([^,:!]*|\/[^,:!]*\.\w+|\w*.\w*)\)"

def check_token():
    if Token.objects.filter(is_valid=True).exists():
        logger.info('Valid token check')
        return "VALID_TOKEN"

    logger.info('No token. Input valid token first.')

            
def create_or_update_exporters():
    if Token.objects.filter(is_valid=True).exists():
        TOKEN = Token.objects.last().token
        logger.info('CHECK_EXPORTERS_START')
        headers       = {'Authorization' : 'token ' + TOKEN}
        exporters     = Exporter.objects.select_related('category', 'official').prefetch_related('release_set').order_by('id')
        exporter_list_file = open('exporter_list.csv', 'r', encoding='utf-8') 
        repo_infos         = csv.reader(exporter_list_file)

        next(repo_infos, None)

        for info in repo_infos:
            app_name      = info[0]
            repo_name     = info[1]
            repo_url      = info[2]
            repo_official = 'Official' if info[3] == '1' else 'Unofficial'
            repo_category = info[4]

            if 'https://github.com/' not in repo_url:
                logger.error(f"NOT_GITHUB_REPOSITORY ({repo_url})")

            repo_api_url    = api_url + repo_url.replace('https://github.com/','')
            readme_api_url  = repo_api_url + '/readme'
            release_api_url = repo_api_url + '/releases'
            repository      = requests.get(repo_api_url, headers=headers)

            if repository.status_code == 401:
                Token.objects.filter(token=TOKEN).update(is_valid=False)
                logger.error("INVALID_TOKEN")

            elif repository.status_code == 200:
                repo_data    = repository.json()
                readme       = requests.get(readme_api_url, headers=headers)
                readme_data  = readme.json()
                release      = requests.get(release_api_url, headers=headers)
                release_data = release.json() if release.json() else []
                new_readme   = base64.b64decode(readme_data["content"]).decode('utf-8')
                matches      = re.findall(PATTERN, new_readme)
                repo_address = repo_url.replace('https://github.com/','')

                for match in matches:
                    for element in match:
                        if '.' in element:
                            new_readme = new_readme.replace(element,f"https://raw.githubusercontent.com/{repo_address}/master/{element}")

                # create new exporter
                if not exporters.filter(repository_url=repo_url).exists():
                    category = Category.objects.get_or_create(name=repo_category)[0]
                    official = Official.objects.get_or_create(name=repo_official)[0]

                    exporter = Exporter.objects.create(
                        category       = category,
                        official       = official,
                        name           = repo_name,
                        logo_url       = repo_data["owner"]["avatar_url"],
                        stars          = repo_data["stargazers_count"],
                        repository_url = repo_url,
                        description    = repo_data["description"],
                        readme_url     = repo_url + "/blob/master/README.md",
                        readme         = new_readme.encode('utf-8'),
                        app_name       = app_name.replace(' ','-')
                    )

                    releases = sorted(release_data, key=lambda x: x["created_at"])

                    for release in releases:
                        Release(
                            exporter    = exporter,
                            release_url = release["html_url"],
                            version     = release["tag_name"],
                            date        = release["created_at"]
                        ).save()

                    logger.info(f'id: {exporter.id} name: {exporter.name} | SUCCESSFULLY_ADDED_REPOSITORY_AND_RELEASES | {datetime.now()}')
                
                # update exporter
                else:
                    exporter = exporters.get(repository_url=repo_url)

                    updated_time_db     = date.strftime(exporter.modified_at, '%Y-%m-%d %H:%M:%S')
                    updated_time_remote = datetime.strptime(repo_data['updated_at'], '%Y-%m-%dT%H:%M:%SZ').strftime('%Y-%m-%d %H:%M:%S')

                    if updated_time_db < updated_time_remote:
                        exporter.stars       = repo_data["stargazers_count"]
                        exporter.description = repo_data["description"]
                        exporter.readme      = new_readme.encode('utf-8')
                        exporter.app_name    = app_name.replace(' ','-')
                        exporter.save()
                        logger.info(f'id: {exporter.id} name: {exporter.name} | SUCCESSFULLY_UPDATED_REPOSITORY_INFO | {datetime.now()}')
                
                    releases = sorted(release_data, key=lambda x: x["created_at"])

                    if exporter.release_set.filter().exists():
                        releases = [release for release in releases if str(exporter.release_set.order_by('date').last().date) < release['created_at']]

                    for release in releases:
                        is_created = Release.objects.get_or_create(
                            exporter    = exporter,
                            release_url = release['html_url'],
                            version     = release['tag_name'],
                            date        = release['created_at']
                        )[1]
                        if is_created:
                            logger.info(f'id: {exporter.id} name: {exporter.name} SUCCESSFULLY_UPDATED_LASTEST_RELEASE_INFO | {datetime.now()}')

            else:
                logger.error(f"ERROR_CHECK_REPOSITORY({repo_url}) | {datetime.now()}")

        logger.info('CHECK_EXPORTERS_DONE')

    else:
        logger.info('NO_VALID_TOKEN')


def delete_old_job_executions(max_age=604_800):
    """This job deletes all apscheduler job executions older than `max_age` from the database."""
    DjangoJobExecution.objects.delete_old_job_executions(max_age)

def listener(event):
    if not event.exception:
        if scheduler.get_job('check_token'):
            job = scheduler.get_job('check_token')
       
            if job.func() == 'VALID_TOKEN':
                scheduler.remove_job('check_token')
                logger.info('Remove check_token job.')

                scheduler.add_job(
                    create_or_update_exporters,
                    trigger            = CronTrigger(hour='*/4'),
                    id                 = 'create_or_update_exporters',
                    max_instances      = 3,
                    replace_existing   = True,
                    coalesce           = True,
                    misfire_grace_time = 900,
                    next_run_time      = datetime.now()
                )
                logger.info("Added job 'create_or_update_exporters'.")
                

class Command(BaseCommand):
    def handle(self,*args, **options):
        scheduler.add_jobstore(DjangoJobStore(),'default')
        scheduler.add_listener(listener, EVENT_JOB_EXECUTED | EVENT_JOB_ERROR)

        scheduler.add_job(
            check_token,
            trigger          = CronTrigger(second='*/20'),
            id               = 'check_token',
            max_instances    = 1,
            replace_existing = True,
            next_run_time    = datetime.now()
        )
        logger.info("Added job 'check_token'")
        
        scheduler.add_job(
            delete_old_job_executions,
            trigger            = CronTrigger(day_of_week="mon", hour="00", minute="00"),
            id                 = 'delete_old_job_executions',
            max_instances      = 1,
            replace_existing   = True,
            coalesce           = True,
            misfire_grace_time = 3600
        )
        logger.info("Added weekly job 'delete_old_job_executions'.")

        try:
            logger.info('Starting scheduler...')
            scheduler.start()

        except KeyboardInterrupt:
            logger.info('Stopping scheduler...')
            scheduler.shutdown()
            logger.info('Scheduler shut down successfully.')

