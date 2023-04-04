import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { MdDensityMedium, MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleLinkClick = () => setNav(false)

    return (
        <header className='fixed w-full h-[80px] flex justify-between items-center px-5 sm:px-20 bg-neutral-800 text-gray-300'>

            <Link to='/'>
                <div>
                    <img src={Logo} alt='WagnerOna logo' style={{ width: '80px' }} />
                </div>
            </Link>

            {/* full navbar */}


            <ul className='hidden md:flex '>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/webWork'>Work</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>

            <div id='social' className='flex space-x-4' >
                <a href='https://www.linkedin.com/in/wagnerona/' target='_blank' rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href='https://github.com/wagnerona' target='_blank' rel="noreferrer">
                    <FaGithub />
                </a>
                <a href='/' target='_blank' rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href='https://wa.me/+447751862182' target='_blank' rel="noreferrer">
                    <FaWhatsapp />
                </a>
            </div>


            {/* hamburger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <MdDensityMedium /> : <MdClose />}
            </div>


            {/* small screens */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center'}>
                <li className='py-6 text-5xl'>
                    <Link to='/' onClick={handleLinkClick}>Home</Link>
                </li>
                <li className='py-6 text-5xl'>
                    <Link to='/about' onClick={handleLinkClick}>About</Link>
                </li>
                <li className='py-6 text-5xl'>
                    <Link to='/webWork' onClick={handleLinkClick}>Work</Link>
                </li>
                <li className='py-6 text-5xl'>
                    <Link to='/contact' onClick={handleLinkClick}>Contact</Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden'></div>
        </header>
    )
}

export default Navbar
