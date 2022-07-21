import {React, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link} from "react-router-dom";

export const Main = () => {
  const [exercise, setExercise] = useState('A');
  const [side, setSide] = useState('Right');
  const [file, setFile] = useState();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const process = { exercise, side };
  //   fetch('url_route', {
  //     method: 'POST',
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify(process)
  //   }).then(() => {
  //     console.log('data uploaded');
  //   }) 
  // };


  const handleSubmit = async (e) => {
    // const file = e.target.files[0];
    if (file != null) {

      const generatedUUID = uuidv4();
      window.localStorage.setItem("uuid", generatedUUID);
      console.log(generatedUUID);

      const data = new FormData();
      data.append('file_from_react', file);
      data.append('exercise', exercise);
      data.append('side', side);
      data.append('uuid', generatedUUID);
  
      let response = await fetch('/url_route',
        {
          method: 'post',
          body: data,
        }
      );
      let res = await response.json();
      // if (res.status !== 1){
      //   alert('Error uploading file');
      // }
    }
  };

  return (
    // <form onSubmit={handleSubmit} method="POST">
    <div>
      <h2 className='text-2xl text-[#00df9a] font-bold mt-[60px] text-center'>Choose Exercise</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        >
          <option value="A">Below Parallel Squat</option>
          <option value="B">Deep Squat</option>
          <option value="C">Front Squat</option>
          <option value="D">Squat Hold</option>
        </select>
      </div>

      <h2 className='text-2xl text-[#00df9a] font-bold mt-[20px] text-center'>Select Direction</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={side}
          onChange={(e) => setSide(e.target.value)}
        >
          <option value="Left">Left</option>
          <option value="Right">Right</option>
        </select>
      </div>

      <h2 className='text-2xl text-[#00df9a] font-bold mt-[20px] text-center'>Upload Video</h2>
      <div style={{display: 'flex' , justifyContent: 'center', alignItems:'center'}}>
        <input type="file" id="myFile" name="filename" className='mt-[20px] bg-[#ffffff]' onChange={(e) => setFile(e.target.files[0])}/>
      </div>

      <div style={{display: 'flex',  justifyContent:'center'}}>
      <Link to="/displayresult">
        <button onClick={handleSubmit} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-[20px]'>Submit</button>
      </Link>      
      </div>
    </div>
  );

  }

export default Main

