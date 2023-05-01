import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto md:w-2/5 rounded-md bg-orange-300 px-4 py-8 shadow-2xl'>
            <form>
                <div className="form-controls">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required placeholder='Your Email Address' />
                </div>
                <div className="form-controls">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder='Your Password'/>
                </div>
                <p>Don't have an account? <Link to='/register' className='text-lg font-semibold'>Register</Link></p>
                <input type="submit" value="Login" className='magic-btn cursor-pointer mt-2' />
            </form>
            <hr className='my-4' />
            <div className='text-center'>
                <button className='magic-btn inline-flex items-center gap-2 mx-auto my-4'><FaGoogle ></FaGoogle> Login With Google</button>
                <button className='magic-btn inline-flex items-center gap-2 mx-auto '><FaGithub></FaGithub> Login With GitHub</button>
            </div>
        </div>
    );
};

export default Login;