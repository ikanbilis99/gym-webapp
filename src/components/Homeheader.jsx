import React from 'react';
import Typed from 'react-typed';
import {Link} from "react-router-dom";

const One = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Grow with data
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Redefining Workouts
        </h1>
        <div className='flex justify-center items-center'>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Review', 'Adjust', 'Track']}
            typeSpeed={130}
            backSpeed={140}
            loop
          />
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            &nbsp;Your Workouts
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Take your workouts to a whole new level.</p>
        <Link to="/getstarted">
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default One;

