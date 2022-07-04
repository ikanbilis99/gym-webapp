import { React, useState, useEffect } from "react";
import ReactPlayer from 'react-player';

function Video() {
  const [videoData, setVideoData] = useState('');
    // call the api to get the video source
    useEffect(() => {
      fetch("/video")
      .then(response => response.blob())
          .then(video => {
              // Create a local URL of that image
              const localUrl = URL.createObjectURL(video);
              setVideoData(localUrl);
          });
    },[])
  return (
      <div>
        <ReactPlayer url={videoData} playing="true" controls="true"/>
      </div>
    );
  }
  
  export default Video