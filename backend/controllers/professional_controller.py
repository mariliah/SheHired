# controllers/professional_controller.py
from flask import jsonify, request
from services.professional_service import view_jobs, upload_resume,apply_for_job


def view_jobs_controller():
    jobs = view_jobs()
    return jsonify(jobs)

def upload_resume_controller():
    resume_file = request.files['resume']
    result, status_code = upload_resume(resume_file)
    return jsonify(result), status_code

def apply_for_job_controller(job_id):
    data = request.json
    result, status_code = apply_for_job(job_id, data)
    return jsonify(result), status_code
