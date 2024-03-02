from flask import Flask, render_template, request
from flask_cors import CORS, cors_origin
import logging
import os, json
import jsonify
from datetime import datetime, timedelta, timezone
import firebase_admin
from firebase_admin import credentials, firestore
import uuid

app = Flask(__name__, static_url_path='/static', static_folder='static')
CORS(app)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

# configuration of firebase
# config = {
#     "apiKey": "apiKey",
#     "authDomain": "projectId.firebaseapp.com",
#     "databaseURL": "https://databaseName.firebaseio.com",
#     "storageBucket": "projectId.appspot.com",
#     "serviceAccount": "path/to/serviceAccountCredentials.json"
# }

#firebase = firebase.FirebaseApplication('YOUR_FIREBASEIO_URL', None)

# use realtime database
#db = firebase.database()

#write data
# data = {"name": "John Doe", "email": "johndoe@example.com"}
# db.child("users").push(data)

#read data
# users = db.child("users").get()
# for user in users.each():
#     print(user.val())

cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

@app.route('/')
def index():
    return "hello world"

@app.route('/student', methods=['GET', 'POST'])
def student():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return "success"
    return "student"

app.route('/recruiter/job_posting', methods=['POST'])
def post_job():
    job_title = request.json.get['job_title']
    salary = request.json.get['salary']
    location = request.json.get['location']
    description = request.json.get['description']
    job_type = request.json.get['job_type']
    visa_sponsorship = request.json.get['visa_sponsorship']
    skills = request.json.get['skills']
    yoe = request.json.get['yoe']

    return jsonify({'Message': 'Job posted successfully!'}), 201

#If student assigns to the student class

#if Professional assigns to the professional class

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)





