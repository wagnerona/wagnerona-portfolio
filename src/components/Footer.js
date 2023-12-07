import React from 'react'
// import CV from '../assets/WagnerOna_CV.pdf'
import { MdFileDownload } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className=" bg-stone-300 text-gray-600 py-4 sticky-footer text-xs sm:text-base">
            <div className="h-[2px] container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    // <a href={CV} target="_blank" rel="noreferrer" className='flex items-center px-5'>Download CV<MdFileDownload className='ml-3' /></a>
                </div>
                <p className='px-5'>© 2023 Wagner Ona. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer 
