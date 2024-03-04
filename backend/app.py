from flask import Flask, render_template, request
from flask_cors import CORS, cors_origin
import logging
import os, json
import jsonify
from datetime import datetime, timedelta, timezone
from functools import wraps
import firebase_admin
from firebase_admin import credentials, firestore, auth
import uuid

app = Flask(__name__, static_url_path='/static', static_folder='static')
CORS(app)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

from controllers.student_controller import view_internships_controller, apply_for_internship_controller as apply_for_student_internship_controller
from controllers.professional_controller import view_jobs_controller, upload_resume_controller, apply_for_job_controller as apply_for_professional_job_controller
from controllers.recruiter_controller import *


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

# dummy data storage
job_postings = []
internship_applications = []
resume_storage = []

def check_auth(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if not 'Authorization' in request.headers:
            return jsonify({'message': 'No token provided'}), 403
        id_token = request.headers['Authorization'].split(' ').pop()
        try:
            decoded_token = auth.verify_id_token(id_token)
            request.uid = decoded_token['uid']
        except:
            return jsonify({'message': 'Invalid token'}), 403
        return f(*args, **kwargs)
    return wrap

@app.route('/')
def index():
    return "hello world"

# ROUTES FOR RECRUTIERS
@app.route('/recruiters/create_job', methods=['POST'])
@check_auth
def create_job_route():
    return create_job_controller()

@app.route('/recruiters/update_job/<job_id>', methods=['PUT'])
@check_auth
def update_job_route(job_id):
    return update_job_controller(job_id)

@app.route('/recruiters/deactivate_job/<job_id>', methods=['PUT'])
@check_auth
def deactivate_job_route(job_id):
    return deactivate_job_controller(job_id)

# ROUTES FOR STUDENTS
@app.route('/students/view_internships', methods=['GET'])
@check_auth
def view_internships_route():
    return view_internships_controller()

@app.route('/students/apply_for_job/<job_id>', methods=['POST'])
@check_auth
def apply_for_student_job_route(job_id):
    return apply_for_student_internship_controller(job_id)

# ROUTES FOR PROFESSIONALS
@app.route('/professionals/view_jobs', methods=['GET'])
@check_auth
def view_jobs_route():
    return view_jobs_controller()

@app.route('/professionals/upload_resume', methods=['POST'])
@check_auth
def upload_resume_route():
    return upload_resume_controller()

@app.route('/professionals/apply_for_job/<job_id>', methods=['POST'])
@check_auth
def apply_for_professional_job_route(job_id):
    return apply_for_professional_job_controller(job_id)


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)





