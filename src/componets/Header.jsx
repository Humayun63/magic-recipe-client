import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex items-center justify-between mb-16'>
            {/* Brand Name */}
            <div>
                <Link to='/'>
                    <h2 className='text-3xl font-bold border-2 p-2 rounded-md border-orange-400'>Magic <span className='text-orange-400'>Recipe</span></h2>
                </Link>
            </div>

            {/* Menu */}
            <div>
                <ul className='flex items-center gap-4'>
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
            <div>
                <Link to='/login'>
                    <button className='magic-btn '>Login</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;