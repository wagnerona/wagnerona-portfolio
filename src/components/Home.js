import React from 'react'
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Link } from 'react-router-dom'
import MyImage from '../assets/Avatar.png'

const Home = () => {
  return (
    <div name=' Home' className='w-full h-screen bg-stone-100'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex items-center justify-start'>
          
          <div>
            <p className='text-red-800'>Hi, my name is</p>
            <h1 className='text-5xl sm:text-7xl font-bold text-'>Wagner</h1>
            <h2 className='text-4xl py-4 max-w-[700px] font-bold text-gray-'>I am a product designer & Full Stack Web Developer.</h2>
            <p className='text- py-2 max-w-[700px]'>The main focus of my work relies on user experience and a passion for innovation</p>
            <div>
              <button className='border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:scale-110 duration-500'>
                <Link to='/wagnerona-portfolio/webWork'>View Work</Link>
                <MdOutlineArrowCircleRight className='ml-3' />
              </button>
            </div>
          </div>
          <img src={MyImage} alt='My Profile' className='w-60 h-60 mr-4 ml-10 rounded transform -scale-x-100 hidden md:flex' />
        </div>
      </div>
    </div>

  )
}

export default Home