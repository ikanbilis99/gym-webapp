import React from "react";
import andrew from '../assets/andrew.jpeg';
import zihao from '../assets/zihao.jpeg';
import dylan from '../assets/dylan.jpeg';
import mush from '../assets/mush.jpeg';
import deric from '../assets/deric.jpeg';

function Cards() {
  return (
    <div className='Card'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

      <img src={zihao} alt='/' className='w-[250px] h-[250px] mx-auto mt-[30px]'style={{borderRadius:'50%'}}/>
          <div className='flex flex-col justify-center mt-[60px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Zi Hao - Likes to build</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Economics</p>
          </div>

        <img src={andrew} alt='/' className='w-[250px] h-[250px] mx-auto mt-[60px]' style={{borderRadius:'50%'}}/>
          <div className='flex flex-col justify-center mt-[60px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Andrew - Gym Expert</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Information Systems</p>
          </div>

        <img src={dylan} alt='/' className='w-[250px] h-[250px] mx-auto mt-[60px]'style={{borderRadius:'50%'}}/>
          <div className='flex flex-col justify-center mt-[60px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Dylan - Has a nice voice</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Information Systems</p>
          </div>

        <img src={mush} alt='/' className='w-[250px] h-[250px] mx-auto mt-[60px] mb-[30px]'style={{borderRadius:'50%'}}/>
          <div className='flex flex-col justify-center mt-[60px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Mush - Insanely quick understanding</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Computing and Technology</p>
          </div>

        <img src={deric} alt='/' className='w-[250px] h-[250px] mx-auto mt-[60px] mb-[30px]'style={{borderRadius:'50%'}}/>
          <div className='flex flex-col justify-center mt-[60px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Deric - Can do everything</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Computing and Technology</p>
          </div>

      </div>
    </div>
  );
}

export default Cards