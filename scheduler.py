import json
import requests
import base64
import parsecontent
import os
from urllib.request import urlopen
from urllib import parse

def convert_markdown():

  filePath = os.path.abspath("3rdparty/exporter_lists")
    
  with open(filePath, 'r') as f:
    data = f.read()
  file_list = data.splitlines()

  for i in file_list:
    # git project name parsing
    exporter_lists = parsecontent.parseGiturl(i)
    for j in exporter_lists:
      markdown_list = parsecontent.getReadme(j)
    
  print(markdown_list[1])
  
  
    
convert_markdown()
