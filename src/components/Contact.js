import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-stone-100 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-500 '>Contact</p>
                    <p className=' py-6
                    '> If you would like to get in touch you can submit the following form, alternatively you can check any of my socials on the top right or email me at: <br />
                     wagnerolarco@gmail.com 
                     </p>
                </div>
                <input className='bg-neutral-200 p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-neutral-200' type="email" placeholder='Email' name='email' />
                <textarea className='bg-neutral-200 p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className=' border-2  border-black duration-500 hover:bg-red-500 hover:border-red-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's get workin'</button>
            </form>
        </div>
    )
}

export default Contact