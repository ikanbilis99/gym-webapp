import React from 'react';
import laptop from '../assets/laptop.jpeg';
import {Link} from "react-router-dom";

const Two = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Your Workouts</h1>
          <p>
            Review, Adjust &#38; Track your workouts with the help of Artificial Intelligence &#40;A.I.&#41;.
            User friendly and interactive platform to help you visualize your workouts in a deeper dimension. 
            The right technique and posture, workouts can be safer and more effective.
          </p>
          <Link to="/getstarted">
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
              Get Started
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Two