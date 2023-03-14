import React from 'react'

// Function for skillCards
function SkillCard(props) {
    return (
      
        <div className='pt-4 rounded-lg shadow-md shadow-[#8a8a8a] hover:scale-110 duration-500 bg-gray-400'>
          <img className='w-20 mx-auto' src={props.image} alt={props.name} />
          <p className='my-4'>{props.name}</p>
        </div>
  
    );
  }


  export default SkillCard;