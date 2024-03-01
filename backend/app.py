from flask import Flask, render_template, request
from flask_cors import CORS
import logging
import os, json
from datetime import datetime, timedelta, timezone
from firebase import firebase
from collections.abc import MutableMapping

app = Flask(__name__, static_url_path='/static', static_folder='static')
CORS(app)

logger = logging.getLogger()
logger.setLevel(logging.INFO)

# configuration of firebase
config = {
    "apiKey": "apiKey",
    "authDomain": "projectId.firebaseapp.com",
    "databaseURL": "https://databaseName.firebaseio.com",
    "storageBucket": "projectId.appspot.com",
    "serviceAccount": "path/to/serviceAccountCredentials.json"
}

firebase = firebase.FirebaseApplication('YOUR_FIREBASEIO_URL', None)

# use realtime database
db = firebase.database()

#write data
data = {"name": "John Doe", "email": "johndoe@example.com"}
db.child("users").push(data)

#read data
users = db.child("users").get()
for user in users.each():
    print(user.val())

@app.route('/')
def index():
    return "hello world"

@app.route('/student', methods=['GET', 'POST'])
def student():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return "success"
    return "student"

#If student assigns to the student class

#if Professional assigns to the professional class

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)





