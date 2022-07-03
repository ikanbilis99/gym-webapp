import React from "react";
import duck from '../assets/duck.mp4';

function Video() {
    return (
      <div>
        <video width="320" height="240" autoplay>
            <source src={duck} type="video/mp4"/>
        </video>
        
      </div>
    );
  }
  
  export default Video