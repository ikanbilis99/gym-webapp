import React from 'react'
import laptop from '../assets/laptop.jpeg';
import sampleVideo from '../assets/demo_video.mp4'

const DemoPage = () => {
  return (
    <div>
        <div className='grid md:grid-cols-2 justify-center ml-10'>
            <div className='flex flex-col justify-center'>
            <video loop autoPlay width={480} height={272}>
                    <source src={sampleVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
            </div>
            <div>
                <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold text-left'>
                    Review
                </h1>
            </div>
        </div>

        <div className='grid md:grid-cols-2 justify-center ml-10 mt-10 mb-10'>
            <div className='flex flex-col justify-center'>
                <img src={laptop} width={480} height={272} alt='/' />
            </div>

            <div>
                <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold text-left'>
                    Analyze &#38; Track
                </h1>
            </div>
        </div>
    </div>

  )
}

export default DemoPage
