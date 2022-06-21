import React from "react";
import andrew from '../assets/andrew.jpeg';
import zihao from '../assets/zihao.jpeg';

function Cards() {
  return (
    <div className='Card'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={andrew} alt='/' className='w-[250px] mx-auto mt-[60px] '/>
          <div className='flex flex-col justify-center mt-[60px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Andrew - Founder</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Information Systems Major</p>
          </div>
        <img src={zihao} alt='/' className='w-[250px] mx-auto mt-[40px] '/>
          <div className='flex flex-col justify-center mt-[40px] '>
            <h1 className='text-3xl font-bold text-[#00df9a]'>Zi Hao - Co-Founder</h1>
            <p className ='text-gray-400 font-medium' >Singapore Management University - Economics Major</p>
          </div>
      </div>
    </div>
  );
}

export default Cards