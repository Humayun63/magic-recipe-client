import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        if (name === '' || email === '' || password === '' || photo === '') {
            return toast.error(<span className='text-red-600'>Field Cannot be empty!</span>)
        }
        if (password.length < 6) {
            return toast.error(<span className='text-red-600'>Password must contain at lease 6 character!</span>)
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, photo)
                    .then(() => {

                        toast.success(<span className='text-green-600'>Registration  Successful</span>)
                        logOut()
                            .then()
                            .catch(error => (
                                toast.error(<span className='text-red-600'>{error.message}</span>)
                            ))
                    })
                    .catch(error => (
                        toast.error(<span className='text-red-600'>{error.message}</span>)
                    ))
                form.reset()
                navigate('/login', { replace: true })
            })
            .catch(error => (
                toast.error(<span className='text-red-600'>{error.message}</span>)
            ))
    }
    return (
        <div className='mx-auto md:w-2/5 rounded-md bg-orange-300 px-4 py-8 shadow-2xl'>
            <form onSubmit={handleRegister}>
                <div className="form-controls">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder='Your Name' />
                </div>
                <div className="form-controls">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required placeholder='Your Email Address' />
                </div>
                <div className="form-controls">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" placeholder='Your Password' />
                </div>
                <div className="form-controls">
                    <label htmlFor="photo">Photo URL:</label>
                    <input type="photo" name="photo" id="photo" placeholder='Your photo URL' />
                </div>
                <p>Already have an account? <Link to='/login' className='text-lg font-semibold'>Login</Link></p>
                <input type="submit" value="Register" className='magic-btn cursor-pointer mt-2' />
            </form>
        </div>
    );
};

export default Register;