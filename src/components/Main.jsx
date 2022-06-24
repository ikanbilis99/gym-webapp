import {React, useState} from 'react';
import axios from 'axios';

export const Main = () => {
  const [exercise, setExercise] = useState('');
  const [side, setSide] = useState('');

const handleSubmit1 = (event) => {
  event.preventDefault();
  const process = { exercise, side };
  console.log(process);
}


  return (
    <form onSubmit={handleSubmit1}>
      <h2 className='text-2xl text-[#00df9a] font-bold mt-[60px] text-center'>Choose Exericse</h2>
      <div style={{display: 'flex' , justifyContent: 'center'}}>
        <select
          className='mt-[20px]'
          value={exercise}
          onChange={(event) => setExercise(event.target.value)}
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
          onChange={(event) => setSide(event.target.value)}
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
