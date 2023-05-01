import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='mx-2 relative'>
            <div className='flex items-center justify-between mb-16'>
                {/* Brand Name */}
                <div>
                    <Link to='/'>
                        <h2 className='text-3xl font-bold border-2 p-2 rounded-md border-orange-400'>Magic <span className='text-orange-400'>Recipe</span></h2>
                    </Link>
                </div>

                {/* Menu */}
                <div>
                    <ul className='hidden lg:flex items-center gap-4'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>About Us</NavLink>
                        </li>
                    </ul>
                </div>

                {/* User Login or User  info */}
                <div className='hidden lg:block'>
                    <Link to='/login'>
                        <button className='magic-btn '>Login</button>
                    </Link>
                </div>

                {/* Menu bar for mobile */}
                <FaBars className='lg:hidden text-4xl ' onClick={() => setIsOpen(true)}></FaBars>
            </div>


            {/* Mobile Menu */}
            {
                isOpen &&
                <div className='-mx-2'>
                    <div className='mx-2 text-center pb-4 pe-2 pt-2 absolute top-0  bg-orange-400 rounded-md w-full z-10'>
                        <FaTimes className='text-2xl ms-auto' onClick={() => setIsOpen(false)}></FaTimes>
                        <ul className=''>
                            <li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >About Us</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>

            }
        </nav>
    );
};

export default Header;