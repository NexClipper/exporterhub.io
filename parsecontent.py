import json
from urllib.request import urlopen
from urllib import parse


def parseGiturl(githubUrl):
  url = parse.urlparse(githubUrl)
  return url.path

def getReadme(githubUrl):  # get content repository readme markdown
  url = 'https://api.github.com/repos' + parseGiturl(githubUrl)
  url += '/readme'
  # https://api.github.com/repos/prometheus/mysqld_exporter/readme
  response = urlopen(url).read().decode('utf-8')
  responseJson = json.loads(response)
  return responseJson

def getContent(githubUrl): # get content repository contents
  url = 'https://api.github.com/repos' + parseGiturl(githubUrl)
  response = response = urlopen(url).read().decode('utf-8')
  responseJson = json.loads(response)
  return responseJson

# print(getReadme('prometheus/mysqld_exporter')) # function test
