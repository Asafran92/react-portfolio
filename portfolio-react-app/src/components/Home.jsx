import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
       {/* container */}   
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-purple-700'>Hey, my name is</p>
         <h1 className='text-4xl sm:text-7xl font-bold text-white'>Avrumie Safranovitz</h1>
         <h2 className='text-4xl sm:text-7xl font-bold text-purple-700'>I am an upcoming Full Stack Web Developer</h2>  
         <p className='text-purple-700 py-4 max-w[700px]'>I am an upcoming full stack web developer in training! I am currently enrolled in the Rutgers full stack web development course.</p>
         <div>
             <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-700'>View my Work! <HiArrowNarrowRight className='ml-3' /></button>
         </div>
       </div>  
    </div>
  )
}

export default Home