import { React, useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom";

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
      <div>
          <ReactPlayer url={videoData} playing={true} controls={true} autoPlay={true} className="mt-[30px]" width='100%'/>
          {/* <p className="mt-[30px] mb-[30px]" style={{color: 'white', textAlign: 'center'}}>
           Please refresh the page in a while until you see the video result!
           </p>  */}
        <div style={{display: 'flex',  justifyContent:'center'}}>
          <Link to="/getstarted">
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-[20px]'>Back</button>
          </Link>  
        </div>
      </div>
    </div>

    );
  }
  
  export default Video
