from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request
import requests, json
import os
import parsecontent
import base64
import markdown


def write_repo():

    exporterContent = parsecontent.getContent(
        'https://github.com/NexClipper/NexClipper')
    exporterReadme = parsecontent.getReadme(
        'https://github.com/NexClipper/NexClipper')

    print(exporterContent.get('fork'))
    print(exporterReadme.get('type'))

    # print(exporterReadme.get('download_url'))

    URL = exporterReadme.get('download_url')

    urlTxt = requests.get(URL)
    # print(response.status_code)
    # print(response.text)
    urlTxt.text

    decoded_text = base64.b64decode(exporterReadme.get('content')).decode('utf8')
    # print(decoded_text)
    readmeURL = 'https://api.github.com/markdown'

    data = {
        "text": decoded_text,
        "mode": "gfm"
    }
    res = requests.post(readmeURL, data=json.dumps(data))
    print(res.text)


write_repo()
