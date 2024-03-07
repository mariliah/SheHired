import uuid
from datetime import datetime, timedelta, timezone

class CreateJob:
    def run(self, job_title, salary, location, description, visa_sponsorship, job_type, skills, years_of_exp):
        job_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc)
        expired_at = created_at + timedelta(days=30)
        data = {
            "job_id": job_id,
            "job_title": job_title,
            "salary": salary,
            "location": location,
            "description": description,
            "created_at": created_at,
            "expired_at": expired_at,
            "visa_sponsorship": visa_sponsorship,
            "job_type": job_type,
            "skills": skills,
            "years_of_exp": years_of_exp
        }
        return data