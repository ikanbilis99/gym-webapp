import React from 'react'
import Navbar from '../components/Navbar';
import One from '../components/Homeheader';
import Two from '../components/Homemiddle';
import Three from '../components/Homefooter';

const Home = () =>  {
  return (
    <div>
        <Navbar />
        <One />
        <Two />
        <Three />
    </div>
  )
}

export default Home