
import React from 'react';
import {FaGithubSquare} from 'react-icons/fa';

const Three = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
          <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>RAT.</h1> 
            <div className='flex justify-between md:w-[75%] my-6'>
                <a href='https://github.com/andrew-nks/Pose-Detection'>
                    <FaGithubSquare size={30} />
                </a>
            </div>
          </div>
          <div className='lg:col-span-1 flex justify-center mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Others</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        <a>
                            Disclaimer
                        </a>
                    </li>
                    <li className='py-2 text-sm'>
                        <a href='https://github.com/andrew-nks/Pose-Detection'>
                            Guide
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      );
    };
export default Three