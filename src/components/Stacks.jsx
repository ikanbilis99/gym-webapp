import React from 'react'

const Stacks = () => {
  return (
    <div className='text-white'>
        <div className='mt-[100px] w-full h-screen mx-auto text-center grid md:grid-cols-3 justify-center'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-4xl justify-center text-[#00df9a]'>Google Pose Detection</h1>
                    <ul className='text-medium justify-center mt-[60px]' style={{padding: '0px 15px 0px 30px'}}>
                        <li className='mt-[7px]'>
                            The ML Kit Pose Detection API is a lightweight versatile solution for app developers to detect the pose 
                            of a subject's body in real time from a continuous video or static image. 
                        </li>
                        <li className='mt-[7px]'>
                            A pose describes the body's position at one moment in time with a set of skeletal landmark points.
                        </li>
                        <li className='mt-[7px]'>
                            The landmarks correspond to different body parts such as the shoulders and hips. The relative positions of 
                            landmarks can be used to distinguish one pose from another.
                        </li>
                    </ul>
                <a href='https://developers.google.com/ml-kit/vision/pose-detection'>
                    <button className='text-medium justify-center' style={{padding: '20px 0px 0px 0px'}}>&raquo; Find Out More</button>
                </a>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold text-4xl justify-center text-[#00df9a]'>Mediapipe</h1>
                    <ul className='text-medium justify-center mt-[60px]' style={{padding: '0px 15px 0px 15px'}}>
                        <li className='mt-[7px]'>
                            MediaPipe offers cross-platform, customizable ML solutions for live and streaming media
                        </li>
                        <li className='mt-[7px]'>
                            1. End-to-End acceleration: Built-in fast ML inference and processing accelerated even on common hardware
                        </li>
                        <li className='mt-[7px]'>
                            2. Build once, deploy anywhere: Unified solution works across Android, iOS, desktop/cloud, web and IoT
                        </li>
                        <li className='mt-[7px]'>
                            3. Ready-to-use solutions: Cutting-edge ML solutions demonstrating full power of the framework
                        </li>
                        <li className='mt-[7px]'>
                            4. Free and open source: Framework and solutions both under Apache 2.0, fully extensible and customizable 
                        </li>
                    </ul>
                <a href='https://google.github.io/mediapipe/'>
                    <button className='text-medium justify-center' style={{padding: '20px 0px 0px 0px'}}>&raquo; Find Out More</button>
                </a>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold text-4xl justify-center text-[#00df9a]'>OpenCV</h1>
                    <ul className='text-medium justify-center mt-[60px]' style={{padding: '0px 30px 0px 15px'}}>
                        <li className='mt-[7px]'>
                        OpenCV &#40;Open Source Computer Vision Library&#41; is a library of programming functions mainly aimed at real-time computer vision
                        </li>
                        <li className='mt-[7px]'>
                        Originally developed by Intel, it was later supported by Willow Garage then Itseez &#40;which was later acquired by Intel&#41;
                        </li>
                        <li className='mt-[7px]'>
                        The library is cross-platform and free for use under the open-source Apache 2 License
                        </li>
                    </ul>
                <a href='https://opencv.org/'>
                    <button className='text-medium justify-center' style={{padding: '20px 0px 0px 0px'}}>&raquo; Find Out More</button>
                </a>
            </div>      
        </div>
    </div>
  )
}

export default Stacks
