from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request
from dotenv import load_dotenv
import os
import parsecontent, convertmd

app = Flask(__name__)
load_dotenv(verbose=True)

mongodb_host = os.environ.get('MONGO_HOST', 'localhost')
mongodb_port = int(os.environ.get('MONGO_PORT', '27017'))
username = os.getenv('MONGO_INITDB_ROOT_USERNAME')
password = os.getenv('MONGO_INITDB_ROOT_PASSWORD')

client = MongoClient(mongodb_host, mongodb_port)
client.admin.authenticate(username, password, mechanism='SCRAM-SHA-1', source='source_database')
db = client.exporterhub

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/addRepo', methods=['POST'])
def write_repo():
    exporterGithubUrl_receive = request.form['exporterGithubUrl']
    exporterComment_receive = request.form['exporterComment']

    exporterContent = parsecontent.getContent(exporterGithubUrl_receive)
    exporterReadme = parsecontent.getReadme(exporterGithubUrl_receive)
    # exporterReadmeHtml = convertmd.convert_markdown(exporterGithubUrl_receive)

    repo = {
        'exporterContent': exporterContent,
        'exporterReadme': exporterReadme,
        'exporterComment': exporterComment_receive,
        # 'exporterReadmeHtml': exporterReadmeHtml
    }

    db.repos.insert_one(repo)

    return jsonify({'result': 'success', 'msg': '추가완료'})
    # add repository default information (url, user comment)


@app.route('/getRepo', methods=['GET'])
def read_repo():
    repos = list(db.repos.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'repos': repos})


@app.route('/getExporter', methods=['POST'])
def read_exporter():
    exporterGithubUrl_receive = request.form['exporterGithubUrl']
    res = convertmd.convert_markdown(exporterGithubUrl_receive)
    return jsonify({'result': 'success', 'msg': '추가완료'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
