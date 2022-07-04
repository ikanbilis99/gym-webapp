import time
from flask import Flask, send_file
from flask import send_file

app = Flask(__name__)

# https://www.npmjs.com/package/react-player
@app.route('/video')
def get_video():
    # reading the video file output
    return send_file("../src/assets/duck.mp4")