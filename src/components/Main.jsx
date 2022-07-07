import {React, useState, useEffect} from 'react';

export const Main = () => {
  const [exercise, setExercise] = useState('');
  const [side, setSide] = useState('');
  const [file, setFile] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  const process = { exercise, side, file };
  fetch('url_route', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify
  }).then(() => {
    console.log('data uploaded');
  }) 
};

  return (
    <form onSubmit={handleSubmit}>
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
        <input type="file" id="myFile" name="filename" className='mt-[20px]' value={file} onChange={(e) => setFile(e.target.value)}/>
      </div>

      <div style={{display: 'flex',  justifyContent:'center'}}>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-[20px]'>Submit</button>
      </div>
    </form>
  );

  }

export default Main

