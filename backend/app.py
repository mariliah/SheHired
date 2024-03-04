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

from controllers.student_controller import view_internships_controller, apply_for_job_controller as apply_for_student_job_controller
from controllers.professional_controller import view_jobs_controller, upload_resume_controller, apply_for_job_controller as apply_for_professional_job_controller


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

@app.route('/')
def index():
    return "hello world"

# ROUTES FOR RECRUTIERS
@app.route('/recruiters/create_job', methods=['POST'])
def create_job():
    data = request.json()

    #required fields for job posting
    required_fields = ['job_title', 'salary', 'location', 'description', 'visa_sponsorship', 'job_type', 'skills', 'years_of_exp']

    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing {field} field'}), 400
    job_postings.append(data)
    return jsonify({'message': 'Job posted successfully!'}), 201

@app.route('/recruiters/update_job/<int:job_id>', methods=['PUT'])
def update_job(job_id):
    data = request.json()
    # assume data contains updated details
    # check if the job exists
    if job_id >= len(job_postings) or job_id < 0:
        return jsonify({'error': 'Job not found'}), 404
    
    # assume deactivation logic
    job_postings[job_id]['active'] = False
    return jsonify({'message': 'Job updated successfully!'}), 200

# ROUTES FOR STUDENTS
@app.route('/students/apply_internship', methods=['POST'])
def apply_internship():
    data = request.json()

    # assume data contains internship application details
    internship_applications.append(data)
    return jsonify({'message': 'Internship application submitted successfully!'}), 201

@app.route('/students/upload_resume', methods=['POST'])
def upload_resume():
    resume_file = request.files['resume']

    # assume storage logic for resumes
    resume_storage.append(resume_file.filename)
    return jsonify({'message': 'Resume uploaded successfully!'}), 201

@app.route('/students/view_internships', methods=['GET'])
def view_internships():
    internships = [job for job in job_postings if job['job_type'] == 'internship']
    return jsonify(internships), 200

# ROUTES FOR PROFESSIONALS
@app.route('/professionals/view_jobs', methods=['GET'])
def view_jobs():
    jobs = [job for job in job_postings if job['job_type'] == 'full-time' | job['job_type'] == 'part-time' | job['job_type'] == 'contract' | job['job_type'] == 'freelance']
    return jsonify(jobs), 200

@app.route('/professionals/upload_resume', methods=['POST'])
def upload_professional_resume():
    resume_file = request.files['resume']

    # assume storage logic for professional resumes
    resume_storage.append(resume_file.filename)
    return jsonify({'message': 'Resume uploaded successfully!'}), 201


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)





