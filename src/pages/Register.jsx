import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-auto md:w-2/5 rounded-md bg-orange-300 px-4 py-8 shadow-2xl'>
            <form>
                <div className="form-controls">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" required placeholder='Your Name' />
                </div>
                <div className="form-controls">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required placeholder='Your Email Address' />
                </div>
                <div className="form-controls">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder='Your Password'/>
                </div>
                <div className="form-controls">
                    <label htmlFor="photo">Photo URL:</label>
                    <input type="photo" name="photo" id="photo" placeholder='Your photo URL'/>
                </div>
                <p>Already have an account? <Link to='/login' className='text-lg font-semibold'>Login</Link></p>
                <input type="submit" value="Register" className='magic-btn cursor-pointer mt-2' />
            </form>
        </div>
    );
};

export default Register;