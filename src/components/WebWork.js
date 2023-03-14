import React from 'react'
import devWork from '../Data/devWork.json'
import WorkCard from './WorkCard'

//Component
const WebWork = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#4A5B61]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-800 '>Work</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        
        {/* Dynamic cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {devWork.map((devWork) => {
          return (
            <WorkCard
              image={devWork.image}
              name={devWork.name}
              deploy={devWork.deploy}
              code={devWork.code}
            />
          )
        })
        }
        </div>
      </div>
    </div>
  )
}


export default WebWork;
