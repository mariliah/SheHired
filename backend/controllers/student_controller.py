# controllers/student_controller.py
from flask import jsonify
import request
from services.student_service import view_internships, apply_for_job

def view_internships_controller():
    internships = view_internships()
    return jsonify(internships)

def apply_for_internship_controller(job_id):
    data = request.json
    result, status_code = apply_for_job(job_id, data)
    return jsonify(result), status_code
