import request, jsonify
from models.job import Job

job_postings = []

def create_job(data):
    data = request.json()
    #required fields for job posting
    required_fields = ['job_title', 'salary', 'location', 'description', 'visa_sponsorship', 'job_type', 'skills', 'years_of_exp']

    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing {field} field'}), 400
    job_postings.append(data)
    return jsonify({'message': 'Job posted successfully!'}), 201

def update_job(job_id, data):
    data = request.json()

    # check if the job exists
    if job_id >= len(job_postings) or job_id < 0:
        return jsonify({'error': 'Job not found'}), 404
    
    # assume 
    
def deactivate_job(job_id):
    # assume deactivation logic
    job_postings[job_id]['active'] = False
    return jsonify({'message': 'Job updated successfully!'}), 200
