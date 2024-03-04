from flask import jsonify, request
from services.recruiter_servoce import create_job, update_job, deactivate_job

def create_job_controller():
    data = request.json()
    results, status_code = create_job(data)
    return jsonify(results), status_code

def update_job_controller(job_id):
    data = request.json()
    result, status_code = update_job(job_id, data)
    return jsonify(result), status_code

def deactivate_job_controller(job_id):
    result, status_code = deactivate_job(job_id)
    return jsonify(result), status_code


