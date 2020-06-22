from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.exporterhub

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/addRepo', methods=['POST'])
def write_repo():
    exporterGithubUrl_receive = request.form['exporterGithubUrl']
    exporterComment_receive = request.form['exporterComment']

    repo = {
        'exporterGithubUrl': exporterGithubUrl_receive,
        'exporterComment': exporterComment_receive
    }

    db.repos.insert_one(repo)

    return jsonify({'result': 'success', 'msg': '추가완료'})
    # add repository default information (url, user comment)


@app.route('/getRepo', methods=['GET'])
def read_repo():
    repos = list(db.repos.find({}, {'_id': 0}))
    return jsonify({'result': 'success', 'repos': repos})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
