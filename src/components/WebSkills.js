import React from 'react'
import devSkills from '../Data/devSkills.json'
import SkillCard from './SkillCard'

//Component
const WebSkills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-slate-300'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-500 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        {/* Dynamic cards */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {devSkills.map((devSkill) => {
            return (
              <SkillCard
                key={devSkill.id}
                image={devSkill.image}
                name={devSkill.name}
              />
            )
          })
          }
        </div>
      </div>
    </div>
  )
}


export default WebSkills;
