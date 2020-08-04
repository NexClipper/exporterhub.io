import json
from urllib.request import urlopen
from urllib import parse

client_token = 'token 517d413e9c97d986ad0839084d9a2d2cf2dbd0f9'
headers = {'Authorization': client_token}
login = requests.get('https://api.github.com/repos/prometheus/docs', headers=headers)

def parseGiturl(githubUrl):
  url = parse.urlparse(githubUrl)
  return url.path

def getReadme(githubUrl):  # get content repository readme markdown
  url = 'https://api.github.com/repos' + parseGiturl(githubUrl)
  url += '/readme'
  # example : https://api.github.com/repos/prometheus/mysqld_exporter/readme
  response = urlopen(url).read().decode('utf-8')
  responseJson = json.loads(response)
  return responseJson

def getContent(githubUrl): # get content repository contents
  url = 'https://api.github.com/repos' + parseGiturl(githubUrl)
  response = urlopen(url).read().decode('utf-8')
  responseJson = json.loads(response)
  return responseJson

# print(getReadme('prometheus/mysqld_exporter')) # function test
