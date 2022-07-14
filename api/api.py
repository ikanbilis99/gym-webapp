from flask import Flask, send_file, jsonify, request, session
import json
from io import BytesIO
import flask_cors
from squat_counter import *

app = Flask(__name__)

# https://www.npmjs.com/package/react-player
# @app.route('/video')
# def get_video():
#     # reading the video file output
#     return send_file("../src/assets/duck.mp4")

cors = flask_cors.CORS()
cors.init_app(app)

@app.route('/url_route', methods=['GET', 'POST'])
def receive_data():
    if request.method == 'GET':
        with open("temp_gym_data.json", "r") as read_file:
            data = json.load(read_file)
        return data
    elif request.method == 'POST':
        # upload the form data
        exerciseData = request.form.get('exercise')
        sideData = request.form.get('side')
        data = {"exercise": exerciseData, "side": sideData}
        with open("temp_gym_data.json", "w") as write_file:
            json.dump(data, write_file, indent=4)
        # upload the video
        videoFile = request.files['file_from_react']
        filename = videoFile.filename
        print(f"Uploading file {filename}")
        file_bytes = videoFile.read()
        file_content = BytesIO(file_bytes).readlines()
        with open(filename, "wb") as out_file:
            out_file.write(file_bytes)
        #trigger squat_counter
        squat_counter("api/squat.mp4",data["side"]
        return data
