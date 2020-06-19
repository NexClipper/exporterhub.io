from pymongo import MongoClient

from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db = client.exporterhub


# HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/list', methods=['GET'])
def exporter_list():
	return jsonify({'result': 'success', 'msg': 'get 연결되었습니다!'})

@app.route('/api/like', methods=['POST'])
def exporter_list():
	return jsonify({'result': 'success', 'msg': 'post 연결되었습니다!'})


@app.route('/api/delete', methods=['POST'])
def exporter_list():
	return jsonify({'result': 'success', 'msg': 'delete 연결되었습니다!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
