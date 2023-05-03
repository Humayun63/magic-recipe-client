import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../assets/magic-recipe.ico'

const Footer = () => {
    return (
        <footer className='px-2 mt-8 bg-orange-300  py-3 rounded-md flex items-center justify-between gap-4 flex-col md:flex-row'>
            <h2 className='text-lg font-bold bg-white border-2 p-2 rounded-md border-orange-400'>Magic <span className='text-orange-400'>Recipe</span></h2>
            <p className='hidden md:block text-slate-600'><small> 2023 &copy; <span className='font-bold'>Magic Recipe</span>. All Rights Reserved </small></p>
            <div className='flex items-center gap-3'>
                <FaFacebook className='text-2xl text-blue-600 hover:text-blue-900 cursor-pointer' ></FaFacebook>
                <FaTwitter className='text-2xl text-blue-500 hover:text-blue-900 cursor-pointer' ></FaTwitter>
                <FaInstagram className='text-2xl text-pink-500 hover:text-pink-900 cursor-pointer' ></FaInstagram>
                <FaLinkedin className='text-2xl text-blue-500 hover:text-blue-900 cursor-pointer' ></FaLinkedin>
            </div>
            <p className='md:hidden text-slate-600'><small> 2023 &copy; <span className='font-bold'>Magic Recipe</span>. All Rights Reserved </small></p>
        </footer>
    );
};

export default Footer;