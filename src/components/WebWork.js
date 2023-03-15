import React from 'react'
import devWork from '../Data/devWork.json'
import WorkCard from './WorkCard'

//Component
const WebWork = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-stone-100'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 pt-[105px] flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-red-500 '>Web Work</p>
          <p className='py-6'>These are some of the many apps I have built</p>
        </div>

        {/* Dynamic cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {devWork.map((devWork) => {
            return (
              <WorkCard
                key={devWork.id}
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
