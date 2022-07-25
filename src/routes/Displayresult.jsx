import React, { useState, useEffect } from 'react'
import Result from '../components/Result';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/Loading'
import './Displayresult'

function Displayresult() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 15000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
    <Navbar />
    <Result />
  </div>
      ) : (
        <div style={{position: 'absolute',
          top: '50%',
          left: '50%',
          margintop: '-50px',
          marginleft: '-50px',
          width: '100px',
          height: '100px'}}>
        <LoadingScreen />
        </div>
      )}
      </>
  );
};
export default Displayresult
