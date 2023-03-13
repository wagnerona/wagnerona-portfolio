import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#4A5B61] text-[#212529]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-2xl font-bold inline border-b-4 border-red-500'>
                            A bit about me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
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
                            <p className='text-2xl sm-text-7xl py-4 max-w-[700px] font-bold text-'>Product design
                            </p>
                            <p className='text-xl sm:text-base py-2 max-w-[700px] text-gray-300'>The main focus relies on user experience and a passion for innovation</p>
                            <a href='/'>
                                Tell me more
                            </a>
                        </div>
                        <hr className='my-10 border-gray-500'/>
                        <div>
                            <p className='text-2xl sm-text-7xl py-4 max-w-[700px] font-bold text-'>Web Development
                            </p>
                            <p className='text- py-2 max-w-[700px] text-gray-300'>The main focus relies on user experience and a passion for innovation</p>
                            <a href='/'>
                                Tell me more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About