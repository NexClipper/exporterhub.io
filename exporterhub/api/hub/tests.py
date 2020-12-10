import json

from django.test import TestCase, Client

from .models import Category, Official, Exporter, Release

client=Client()

class CategoryTest(TestCase):
    def setUp(self):
        Category.objects.create(
            id=1,
            name='category1'
        )
    
    def tearDown(self):
        Category.objects.all().delete()

    def test_get_category_success(self):
        response=client.get('/categories')
        self.assertEqual(response.status_code,200)
        self.assertEqual(response.json(),
            {
                'categories':[{
                'category_id':1,
                'category_name':'category1'}]
            }
        )

    def test_get_category_not_found(self):
        response=client.get('/category')
        self.assertEqual(response.status_code,404)

class MainPageTest(TestCase):
    def setUp(self):
        Category.objects.create(
            id=1,
            name='category'
        )
        Official.objects.create(
            id=1,
            name='official'
        )
        Exporter.objects.create(
            id=1,
            category_id=1,
            official_id=1,
            name='exporter',
            logo_url='logo.com',
            stars=1,
            repository_url='repo.com',
            description='hello world',
            readme_url='readme.com',
            readme=b'this is readme',
            created_at='2020-11-27T15:00:00Z',
            modified_at='2020-11-27T15:00:00Z'
        )
        Release.objects.create(
            id=1,
            exporter_id=1,
            release_url='release.com',
            version='1.0',
            date='2020-11-27T15:00:00Z'
        )

    def tearDown(self):
        Category.objects.all().delete()
        Official.objects.all().delete()
        Exporter.objects.all().delete()
        Release.objects.all().delete()
    
    def test_get_main_success(self):
        response=client.get('/')
        self.maxDiff = None
        self.assertEqual(response.status_code,200)
        self.assertEqual(response.json(),
            {'exporters':[
                {
                    'exporter_id':1,
                    'name':'exporter',
                    'logo_url':'logo.com',
                    'category':'category',
                    'official':'official',
                    'stars':1,
                    'repository_url':'repo.com',
                    'description':'hello world',
                    'recent_release':'2020-11-27T15:00:00Z',
                    'release':[{
                        'release_version':'1.0',
                        'release_date':'2020-11-27T15:00:00Z',
                        'release_url':'release.com',
                        }],
                }
                ]
            }
        )
    def test_get_main_not_found(self):
        response=client.get('/main')
        self.assertEqual(response.status_code,404)

class DetailPageTest(TestCase):
    def setUp(self):
        Category.objects.create(
            id=1,
            name='category'
        )
        Official.objects.create(
            id=1,
            name='official'
        )
        Exporter.objects.create(
            id=1,
            category_id=1,
            official_id=1,
            name='exporter',
            logo_url='logo.com',
            stars=1,
            repository_url='repo.com',
            description='hello world',
            readme_url='readme.com',
            readme=b'this is readme',
            created_at='2020-11-27T15:00:00Z',
            modified_at='2020-11-27T15:00:00Z'
        )

    def tearDown(self):
        Category.objects.all().delete()
        Official.objects.all().delete()
        Exporter.objects.all().delete()

    def test_get_exporter_detail_success(self):
        response=client.get('/exporters/1')
        self.assertEqual(response.status_code,200)
        self.assertEqual(response.json(),
            {
                'data':'this is readme'
            }
        )

    def test_get_exporter_detail_fail(self):
        response=client.get('/exporters/99999')
        self.assertEqual(response.status_code,400)
        self.assertEqual(response.json(),
            {
                'message':'NO_EXPORTER'
            }
        )

    def test_get_exporter_detail_not_found(self):
        response=client.get('/exporters?id=1')
        self.assertEqual(response.status_code,404)

class RepositoryTest(TestCase):
    def setUp(self):
        Category.objects.create(
            id=1,
            name='Database'
        )
        Official.objects.create(
            id=1,
            name='official'
        )
        Official.objects.create(
            id=2,
            name='unofficial'
        )
        Exporter.objects.create(
            id=1,
            category_id=1,
            official_id=1,
            name='exporter',
            logo_url='logo.com',
            stars=1,
            repository_url='repo.com',
            description='hello world',
            readme_url='readme.com',
            readme=b'this is readme',
            created_at='2020-11-27T15:00:00Z',
            modified_at='2020-11-27T15:00:00Z'
        )
        Release.objects.create(
            id=1,
            exporter_id=1,
            release_url='release.com',
            version='1.0',
            date='2020-11-27T15:00:00Z'
        )

    def tearDown(self):
        Category.objects.all().delete()
        Official.objects.all().delete()
        Exporter.objects.all().delete()
        Release.objects.all().delete()

    def test_post_repository_success(self):
        exporter={
            'repo_url':'https://github.com/prometheus-community/json_exporter',
            'category':'Database'
        }
        response=client.post('/exporter', data=exporter, content_type='application/json')
        self.maxDiff = None
        self.assertEqual(response.status_code,201)
        self.assertEqual(response.json(),
            {
                'message':'SUCCESS'
            }
        )
    
    def test_post_repository_fail(self):
        exporter={
            'repo_url':'https://github.com/prometheus-community/doesnotexist',
            'category':'Database'
        }
        response=client.post('/exporter', data=exporter, content_type='application/json')
        self.maxDiff = None
        self.assertEqual(response.status_code,400)
        self.assertEqual(response.json(),
            {
                'message':'WRONG_REPOSITORY'
            }
        )

    def test_post_repository_existing(self):
        exporter={
            'repo_url':'repo.com',
            'category':'Database'
        }
        response=client.post('/exporter', data=exporter, content_type='application/json')
        self.maxDiff = None
        self.assertEqual(response.status_code,400)
        self.assertEqual(response.json(),
            {
                'message':'EXISTING_REPOSITORY'
            }
        )

    def test_post_repository_key_error(self):
        exporter={
            'repository_url':'https://github.com/prometheus-community/doesnotexist',
            'category':'Database'
        }
        response=client.post('/exporter', data=exporter, content_type='application/json')
        self.maxDiff = None
        self.assertEqual(response.status_code,400)
        self.assertEqual(response.json(),
            {
                'message':'KEY_ERROR'
            }
        )
        
    def test_delete_exporter_success(self):
        response=client.delete('/exporter?exporter_id=1')
        self.assertEqual(response.status_code,200)

    def test_delete_exporter_fail(self):
        response=client.delete('/exporter?exporter_id=99999')
        self.assertEqual(response.status_code,400)
        self.assertEqual(response.json(),
            {
                'message':'NO_EXPORTER'
            }
        )
    
    def test_delete_exporter_key_error(self):
        response=client.delete('/exporter?name=1')
        self.assertEqual(response.status_code,400)
        self.assertEqual(response.json(),
            {
                'message':'KEY_ERROR'
            }
        )
