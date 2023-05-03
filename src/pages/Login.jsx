import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { googleSignIn, githubSignIn, emailSignIn, resetPassword, isReset, setIsReset } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success(<span className='text-green-600'>Welcome {result.user.displayName || 'User'}</span>)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                toast.success(<span className='text-green-600'>Welcome {result.user.displayName || 'User'}</span>)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value


        emailSignIn(email, password)
            .then(result => {
                toast.success(<span className='text-green-600'>Welcome {result.user.displayName || 'User'}</span>)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => (
                toast.error(<span className='text-red-600'>{error.message}</span>)
            ))
    }

    const handleResetPassword = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value

        resetPassword(email)
            .then(() => {
                form.reset()
                toast.success('An Email is sent to your email address!')
                navigate(from, {replace: true})
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error)
            })
    }

    return (
        <>
            {
                isReset ?
                    <>
                        <div className='mx-auto md:w-2/5 rounded-md bg-orange-300 px-4 py-8 shadow-2xl'>
                            {/* LOGIN BY EMAIL AND PASSWORD */}
                            <form onSubmit={handleResetPassword}>
                                <div className="form-controls">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" required placeholder='Your Email Address' />
                                </div>
                                <input type="submit" value="Send Email" className='magic-btn cursor-pointer my-2' />
                            </form>
                        </div>
                    </> :
                    <>
                        <div className='mx-auto md:w-2/5 rounded-md bg-orange-300 px-4 py-8 shadow-2xl'>
                            {/* LOGIN BY EMAIL AND PASSWORD */}
                            <form onSubmit={handleSignIn}>
                                <div className="form-controls">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" name="email" id="email" required placeholder='Your Email Address' />
                                </div>
                                <div className="form-controls">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password" placeholder='Your Password' />
                                </div>
                                <p>Forgot password? <button onClick={() => setIsReset(true)} className='text-lg font-semibold hover:text-slate-800'>Reset Password</button></p>
                                <input type="submit" value="Login" className='magic-btn cursor-pointer my-2' />
                                <p>Don't have an account? <Link to='/register' className='text-lg font-semibold'>Register</Link></p>
                            </form>

                            <hr className='my-4' />

                            {/* LOGIN BY GOOGLE OR GITHUB */}
                            <div className='text-center'>
                                <button className='magic-btn inline-flex items-center gap-2 mx-auto my-4' onClick={handleGoogleSignIn}><FaGoogle ></FaGoogle> Login With Google</button>
                                <button className='magic-btn inline-flex items-center gap-2 mx-auto ' onClick={handleGithubSignIn}><FaGithub></FaGithub> Login With GitHub</button>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};

export default Login;