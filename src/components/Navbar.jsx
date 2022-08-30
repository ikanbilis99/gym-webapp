import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[2500px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>RAT.</h1>
        <ul className='hidden md:flex'>

            <li className='p-4'>
                <Link to="/">Home</Link>
            </li>
{/* change technology to score card*/}
            <li className='p-4'>
                <Link to="/demo">Demo</Link>
            </li>

            <li className='p-4'>
                <Link to="/report">Report</Link>
            </li>

            <li className='p-4 font-bold text-[#00df9a]'>
                <Link to="/getstarted">Start</Link>
            </li>

        </ul>
        <div onClick={handleNav} className='block nd:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>RAT.</h1>
            <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to ="/">Home</Link>
                    </li>
{/* change technology to score card*/}
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/demo">Demo</Link>
                    </li>
{/* change contact to commmunity card*/}
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/report">Report</Link>
                    </li>       
                    <li className='p-4 font-bold text-[#00df9a]'>
                        <Link to="/getstarted">Start</Link>
                    </li>  
            </ul>
        </div>
    </div>
  )
}

export default Navbar