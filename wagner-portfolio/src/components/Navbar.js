import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { MdDensityMedium, MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <header className='fixed w-full h-[80px] flex justify-between items-center px-20 bg-black text-gray-300'>

            <div>
                <img src={Logo} alt='WagnerOna logo' style={{ width: '80px' }} />
            </div>

            {/* full navbar */}

            <ul className='hidden md:flex '>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <div id='social' className='flex space-x-4' >
                <a href='/'>
                    <FaLinkedin />
                </a>
                <a href='/'>
                    <FaGithub />
                </a>
                <a href='/'>
                    <FaInstagram />
                </a>
                <a href='/'>
                    <FaWhatsapp />
                </a>
            </div>


            {/* hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <MdDensityMedium /> : <MdClose />}
            </div>


            {/* small screens */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black/75 flex flex-col justify-center items-center'}>
                <li className='py-6 text-5xl'>Home</li>
                <li className='py-6 text-5xl'>About</li>
                <li className='py-6 text-5xl'>Projects</li>
                <li className='py-6 text-5xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden'></div>
        </header>
    )
}

export default Navbar