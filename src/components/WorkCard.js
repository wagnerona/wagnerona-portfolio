import React from 'react'

// Function for skillCards
function WorkCard(props) {
  return (

    <div style={{ backgroundImage: `url(${props.image})` }} className='shadow-lg shadow-[#333333] group container rounded-md 
    flex justify-center text-center items-center mx-auto content-div'>

      {/* Hover effect */}
      <div className='opacity-0 group-hover:opacity-100'>
        <span className='px-1 text-2xl font bold text-white tracking-wider'>
        {props.name}
        </span>
        <div className='pt-8 text-center'>
          {/* eslint-disable-next-line */}
          <a href={props.code} target="_blank">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Code
            </button>
          </a>
          {/* eslint-disable-next-line */}
          <a href={props.deploy} target="_blank">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Live Site
            </button>
          </a>
        </div>
      </div>

    </div>

  );
}
 

export default WorkCard;