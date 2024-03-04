# services/professional_service.py
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def view_jobs():
    jobs = []
    # Query job postings from Firebase and filter regular jobs and apprenticeships
    job_ref = db.collection(u'job_postings').where(u'job_type', u'in', [u'job', u'apprenticeship']).stream()
    for doc in job_ref:
        job = doc.to_dict()
        job['id'] = doc.id
        jobs.append(job)
    return jobs

def upload_resume(resume_file):
    # Upload resume file to Firebase Storage
    # Implementation details depend on Firebase Storage setup
    # For example:
    # storage = firebase_admin.storage.bucket()
    # blob = storage.blob("path/to/resumes/" + resume_file.filename)
    # blob.upload_from_file(resume_file)
    return {'message': 'Resume uploaded successfully'}, 200

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
        'professional_name': data.get('professional_name'),
        'resume': data.get('resume'),
        # Add other application details as needed
    }
    db.collection(u'job_applications').add(application_data)
    
    return {'message': 'Application submitted successfully'}, 200
