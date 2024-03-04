# services/student_service.py
from models.job import Job
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def view_internships():
    internships = [job.serialize() for job in Job.query.filter_by(job_type='internship').all()]
    return internships

def apply_for_job(job_id, data):
    # Check if job_id exists
    job_ref = db.collection(u'job_postings').document(job_id).get()
    if not job_ref.exists:
        return {'error': 'Job not found'}, 404
    
    # Validate input data (e.g., resume, cover letter)
    if 'resume' not in data:
        return {'error': 'Resume required'}, 400
    
    # Store application data in Firebase
    application_data = {
        'job_id': job_id,
        'student_name': data.get('student_name'),
        'resume': data.get('resume'),
        # Add other application details as needed
    }
    db.collection(u'job_applications').add(application_data)
    
    return {'message': 'Application submitted successfully'}, 200

