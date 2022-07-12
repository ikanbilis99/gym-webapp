from flask import Flask, send_file, jsonify, request, session
import json

app = Flask(__name__)

# https://www.npmjs.com/package/react-player
@app.route('/video')
def get_video():
    # reading the video file output
    return send_file("../src/assets/duck.mp4")

@app.route('/url_route', methods=['GET', 'POST'])
def receive_data():
    if request.method == 'GET':
        with open("temp_gym_data.json", "r") as read_file:
            data = json.load(read_file)
        return data
    elif request.method == 'POST':
        data = request.json
        print(data)
        with open("temp_gym_data.json", "w") as write_file:
            json.dump(data, write_file, indent=4)
        return data 