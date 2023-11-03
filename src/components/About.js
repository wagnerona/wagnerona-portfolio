import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-[#4A5B61] text-[#212529]'>

      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-[110px] pb-10'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-2xl font-bold inline border-b-4 border-red-500'>
                            A bit about me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-10'>
                    <div className='sm:text-right text-2xl'>
                        <p>
                            I am passionate about turning ideas and user requirements into
                            real and innovative products. <br /><br /> I love exploring various design areas
                            while expanding my knowledge to become a more dynamic, creative
                            designer.<br /><br />
                            Through various work fields, I’ve learned to strategize my
                            workflow to solve complex problems in a simple and practical manner.</p>
                    </div>
                    <div>
                        <div>
                            <p className='text-2xl  py-4 max-w-[700px] font-bold text-'>Product design
                            </p>
                            <p className='text-xl sm:text-base py-2 max-w-[700px] text-gray-300'>If you would like to request my Product Design Portfolio please get in contact, this page is currently under construction </p>
                            <Link to='/contact'>Contact Form</Link>
                        </div>
                        <hr className='my-10 border-gray-500' />
                        <div>
                            <p className='text-2xl  py-4 max-w-[700px] font-bold text-'>Web Development
                            </p>
                            <p className='text-xl sm:text-base py-2 max-w-[700px] text-gray-300'>As of April 23' I have completed edX bootcamp in Front End Web development and since May 23' I am
                             working fulltime work MMGY global as a FE Web Developer. </p>
                            <Link to='/webWork'>Tell me more</Link>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default About