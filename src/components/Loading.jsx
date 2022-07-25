import React from "react";
import ReactLoading from "react-loading";
  
export default function Loading() {
  return (
    <div>
      {/* <h2>Loading in ReactJs - GeeksforGeeks</h2>
      <ReactLoading type="balls" color="#0000FF" 
        height={100} width={50} />
      <ReactLoading type="bars" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="bubbles" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="cubes" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="cylon" color="#0000FF" 
        height={100} width={50} />
      <ReactLoading type="spin" color="#0000FF"
        height={100} width={50} />
      <ReactLoading type="spokes" color="#0000FF"
        height={100} width={50} /> */}
      <ReactLoading
        type="spinningBubbles"
        color="#00df9a"
        height={100}
        width={50}
      />
      {/* <p className="mt-[30px] mb-[30px]" style={{color: 'white'}}>
           Loading...
           </p>  */}
    </div>
  );
}