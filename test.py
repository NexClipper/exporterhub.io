from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request
import os
import parse
import base64
from markdown import markdown



def write_repo():

    exporterContent = parse.getContent('justinyoo/ThreeSixNine')
    exporterReadme = parse.getReadme('justinyoo/ThreeSixNine')

    print(exporterContent.get('fork'))
    print(exporterReadme.get('type'))

    decoded_text = base64.b64decode(exporterReadme.get('content'))
    # print(decoded_text)

    mdtohtml = markdown(decoded_text)
    print(mdtohtml)

write_repo()
