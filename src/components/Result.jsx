import { React, useState, useEffect } from "react";
import ReactPlayer from 'react-player';

function Video() {

  const uuid = window.localStorage.getItem("uuid");
  console.log(uuid);

  const [videoData, setVideoData] = useState('');
    // call the api to get the video source
    const apiRoute = "/video/" + uuid;
    useEffect(() => {
      fetch(apiRoute)
      .then(response => response.blob())
          .then(video => {
              // Create a local URL of that image
              const localUrl = URL.createObjectURL(video);
              setVideoData(localUrl);
          });
    },[])
  return (
      <div>
        <ReactPlayer url={videoData} playing={true} controls={true} autoPlay={true} width='100%'/>
        <p style={{color: 'white', textAlign: 'center'}}>
        Please refresh the page in a while until you see the video result!
        </p> 
      </div>
    );
  }
  
  export default Video
