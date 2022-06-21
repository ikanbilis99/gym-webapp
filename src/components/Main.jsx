import {React, useState} from 'react';
import axios from 'axios';

export const Main = () => {
  const [exercise, setExercise] = useState('');
  const [side, setSide] = useState('');
  const [file, setFile] = useState();

const handleSubmit1 = (event1) => {
  event1.preventDefault();
  const process = { exercise, side };
  console.log(process);
}

function handleChange(event2) {
  setFile(event2.target.files[0])
}

function handleSubmit(event2) {
  event2.preventDefault()
  const url = 'Upload a video file';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  axios.post(url, formData, config).then((response) => {
    console.log(response.data);
  });

}

  return (
    <form onSubmit={handleSubmit1}>
      <h2 className='text-2xl text-[#00df9a] font-bold mt-[60px] text-center'>Choose Exericse</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={exercise}
          onChange={(event1) => setExercise(event1.target.value)}
        >
          <option value="norma_squat">Normal Squat</option>
          <option value="wide_squat">Wide Squat</option>
          <option value="narrow_squat">Narrow Squat</option>
        </select>
      </div>

      <h2 className='text-2xl text-[#00df9a] font-bold mt-[20px] text-center'>Select Direction</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={side}
          onChange={(event1) => setSide(event1.target.value)}
        >
          <option value="Right">Right</option>
          <option value="Left">Left</option>
        </select>
      </div>

      <h2 className='text-2xl text-[#00df9a] font-bold mt-[20px] text-center'>Upload File</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={side}
          onChange={(event1) => setSide(event1.target.value)}
        >
          <option value="Right">Right</option>
          <option value="Left">Left</option>
        </select>
      </div>

      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black mt-[20px]'>Submit</button>
      </div>
    </form>
  );
}

export default Main

//feature for user to select file from computer
