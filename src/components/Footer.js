import React from 'react'
import CV from '../assets/Wagner-Ona-Web-Design-CV.pdf'
import { MdFileDownload } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-gray-400 py-4">
            <div className="h-[30px] container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href={CV} target="_blank" rel="noreferrer" className='flex items-center px-5'>Download CV<MdFileDownload className='ml-3' /></a>
                </div>
                <p className='px-5'>© 2023 Wagner Ona. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer 