from flask import Flask, render_template, request
from flask_cors import CORS, cors_origin
import logging
import os, json
import jsonify
from datetime import datetime, timedelta, timezone
import firebase_admin
from firebase_admin import credentials, firestore
import uuid
from users import User, Student, Professional, Company

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

#Assign class from radio button selection
#After assigning them to either class, how will we implement the email verification?
#They would have to receive the email specifically for that class and then when they click the link
#it will verify their email and then they will be able to login, but they will then need to be assigned
#to the correct form based on their class.

#User registration
@app.route('/register', methods=['GET', 'POST'])
def register():

    if request.method == 'POST':
        selected_class = request.form.get('class')

# Class selected and applied to give user their intended version of the form
    if selected_class in ['Student', 'Professional']:
        return render_template(f'{selected_class.lower()}_registration_form.html')

    else:
        return "Invalid selection"

    return render_template('registration_form.html')

#Process registration data and apply to user profile
#Saves information to dictionary on Firebase

#Student registration
@app.route('/register/student', methods=['POST'])
def submit_student_form():
    data = request.form

    clubs = data.get('clubs')
    year = data.get('year')

    user_data = {
        'idnum': data.get('idnum'),
        'fname': data.get('fname'),
        'lname': data.get('lname'),
        'dob': data.get('dob'),
        'country': data.get('country'),
        'metro': data.get('metro'),
        'email': data.get('email'),
        'password': data.get('password'),
        'work': data.get('work'),
        'school': data.get('school'),
        'skills': data.get('skills'),
        'portfolio': data.get('portfolio'),
        'roles': data.get('roles'),
    }

student_profile = Student(clubs=clubs, year=year, **user_data)

db.collection('user_profile').add(student_profile.__dict__)

return redirect(url_for('user_profile', selected_class='Student'))

#Professional registration
@app.route('/register/professional', methods=['POST'])
def submit_professional_form():
    data = request.form

    prof_org = data.get('prof_org')
    title = data.get('title')

    user_data = {
        'idnum': data.get('idnum'),
        'fname': data.get('fname'),
        'lname': data.get('lname'),
        'dob': data.get('dob'),
        'country': data.get('country'),
        'metro': data.get('metro'),
        'email': data.get('email'),
        'password': data.get('password'),
        'work': data.get('work'),
        'school': data.get('school'),
        'skills': data.get('skills'),
        'portfolio': data.get('portfolio'),
        'roles': data.get('roles'),
    }

professional_profile = Professional(prof_org=prof_org, title=title, **user_data)

db.collection('user_profile').add(professional_profile.__dict__)

return redirect(url_for('user_profile', selected_class='Professional'))

#User profile accessed by pulling profile from Firestone DB
@app.route('/user_profile/<selected_class>')
def user_profile(selected_class):
    user_profiles = db.collection('user_profiles').where('class', '==', selected_class).get()
    user_profiles_data = [user.to_dict() for user in user_profiles]

    return render_template('user_profile.html', selected_class=selected_class, user_profiles=user_profiles_data)


#Company Registration
#They have a separate registration screen from job seekers
@app.route('/register/company', methods=['POST'])
def submit_company_form():
    data = request.form

    user_data = {
        'email': data.get('email'),
        'password': data.get('password'),
        'idnum': data.get('idnum'),
        'compname': data.get('compname'),
        'owner': data.get('owner'),
        'address': data.get('address'),
        'city': data.get('city'),
        'state': data.get('state'),
        'zip': data.get('zip'),
        'phone': data.get('phone'),
        'size': data.get('size'),
        'website': data.get('website'),
        'industry': data.get('industry'),
        'references': data.get('references'),
        'license': data.get('license'),
        'positions': data.get('positions'),
        'history': data.get('history'),
        'dei': data.get('dei'),
        'hr': data.get('hr'),
    }

company_profile = Company(**user_data)
db.collection('user_profile').add(company_profile.__dict__)

return redirect(url_for('user_profile', selected_class='Company'))



@app.route('/login', methods=['GET', 'POST'])
#User Login








#Job posting
@app.route('/recruiter/job_posting', methods=['POST'])
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

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)





