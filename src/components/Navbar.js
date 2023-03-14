import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { MdDensityMedium, MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <header className='fixed w-full h-[80px] flex justify-between items-center px-20 bg-neutral-800 text-gray-300'>

            <div>
                <img src={Logo} alt='WagnerOna logo' style={{ width: '80px' }} />
            </div>

            {/* full navbar */}
            

            <ul className='hidden md:flex '>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                <a href='/about'>About</a>
                </li>
                <li>
                <a href='/webWork'>Work</a>
                </li>
                <li>
                <a href='/contact'>Contact</a>
                </li>
            </ul>

            <div id='social' className='flex space-x-4' >
                <a href='https://www.linkedin.com/in/wagnerona/' target = '_blank' rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href='https://github.com/wagnerona' target = '_blank' rel="noreferrer">
                    <FaGithub />
                </a>
                <a href='/' target = '_blank' rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href='https://wa.me/+447751862182' target = '_blank' rel="noreferrer">
                    <FaWhatsapp />
                </a>
            </div>


            {/* hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <MdDensityMedium /> : <MdClose />}
            </div>


            {/* small screens */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black/75 flex flex-col justify-center items-center'}>
                <li className='py-6 text-5xl'>
                <a href='/'>Home</a>
                </li>
                <li className='py-6 text-5xl'>
                <a href='/about'>About</a>
                </li>
                <li className='py-6 text-5xl'>
                <a href='/webWork'>Work</a>
                </li>
                <li className='py-6 text-5xl'>
                <a href='/contact'>Contact</a>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden'></div>
        </header>
    )
}


export default Navbar