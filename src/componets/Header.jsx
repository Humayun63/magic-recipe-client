import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
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
                            <NavLink to='/favorite' className={({ isActive }) => (isActive ? 'active' : 'default')}>Favorite</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')}>About Us</NavLink>
                        </li>
                    </ul>
                </div>

                {/* User Login or User  info */}
                <div className='hidden lg:block'>
                    {
                        user ?
                            <div className='flex items-center gap-3'>
                                {
                                    (!loading && user?.photoURL) ?
                                        <Link to='/profile'>
                                            <img src={`${user?.photoURL}`} alt="User Photo" className='w-12 mx-2 rounded-full cursor-pointer' title={user?.displayName} />
                                        </Link> :
                                        <Link to='/profile'>
                                            <FaUserAlt className='text-2xl cursor-pointer' title={user?.displayName}></FaUserAlt>
                                        </Link>
                                }
                                <button className="magic-btn" onClick={handleLogOut}>Log Out</button>
                            </div> :
                            <Link to='/login'>
                                <button className='magic-btn '>Login</button>
                            </Link>
                    }
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
                        {/* user photo */}
                        <div className='flex justify-center items-center'>
                            {
                                user && <>
                                    {
                                        (!loading && user?.photoURL) ?
                                            <Link to='/profile'>
                                                <img src={`${user?.photoURL}`} alt="User Photo" className='w-12 mx-2 rounded-full cursor-pointer' title={user?.displayName} />
                                            </Link> :
                                            <Link to='/profile'>
                                                <FaUserAlt className='text-2xl cursor-pointer' title={user?.displayName}></FaUserAlt>
                                            </Link>
                                    }
                                </>

                            }
                        </div>
                        <ul className=''>
                            <li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/favorite' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >Favorite</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)} >About Us</NavLink>
                            </li>
                        </ul>
                        {
                            user ?
                                <button className="magic-mobile-btn" onClick={handleLogOut}>Log Out</button> :
                                <Link to='/login'>
                                    <button className='magic-mobile-btn '>Login</button>
                                </Link>
                        }
                    </div>
                </div>

            }
        </nav>
    );
};

export default Header;