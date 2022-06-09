import React from 'react'
import WorkImg from '../assets/run-buddy.PNG'
import Project from '../assets/group-project2.PNG'
import TimeTracker from '../assets/work-day-scheduler.PNG'
import RandomPassword from '../assets/random-password-generator.PNG'
import Project3 from '../assets/Ouid.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-700'>Work</p>
                <p className='py-6'>Some recent work or mine</p>
            </div>

            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                <div>
                <a href="https://asafran92.github.io/run-buddy/">
                    <img src={WorkImg} alt="RunBuddy" />
                </a>

                </div>
                <div>
                <a href="https://cb-travel-project.herokuapp.com/">
                    <img src={Project} alt="Project2" />
                </a>

                </div>
                <div>
                <a href="https://asafran92.github.io/my-moments/">
                    <img src={TimeTracker} alt="TimeTracker" />
                </a>

                </div>
                <div>
                <img src={RandomPassword} alt="RandomPassword" />

                </div>

                <div>
                <a href="https://fathomless-peak-27221.herokuapp.com/">
                    <img src={Project3} alt="Oui'd Cavern" />
                </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Work