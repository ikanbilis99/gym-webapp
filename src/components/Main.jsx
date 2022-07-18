import {React, useState, useEffect} from 'react';

export const Main = () => {
  const [exercise, setExercise] = useState('narrow_squat');
  const [side, setSide] = useState('Left');
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
      const data = new FormData();
      data.append('file_from_react', file);
      data.append('exercise', exercise);
      data.append('side', side);
  
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
      <h2 className='text-2xl text-[#00df9a] font-bold mt-[60px] text-center'>Choose Exericse</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        >
          <option value="normal_squat">Normal Squat</option>
          <option value="wide_squat">Wide Squat</option>
          <option value="narrow_squat">Narrow Squat</option>
        </select>
      </div>

      <h2 className='text-2xl text-[#00df9a] font-bold mt-[20px] text-center'>Select Direction</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={side}
          onChange={(e) => setSide(e.target.value)}
        >
          <option value="Right">Right</option>
          <option value="Left">Left</option>
        </select>
      </div>

      <h2 className='text-2xl text-[#00df9a] font-bold mt-[20px] text-center'>Upload Video</h2>
      <div style={{display: 'flex' , justifyContent: 'center', alignItems:'center'}}>
        <input type="file" id="myFile" name="filename" className='mt-[20px] bg-[#ffffff]' onChange={(e) => setFile(e.target.files[0])}/>
      </div>

      <div style={{display: 'flex',  justifyContent:'center'}}>
        <button onClick={handleSubmit} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-[20px]'>Submit</button>
      </div>
    </div>
  );

  }

export default Main

