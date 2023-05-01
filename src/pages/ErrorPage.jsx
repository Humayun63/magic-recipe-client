import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import image from '../assets/404-error-page.jpg'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    console.log(error);
    return (
        <div className='relative'>
            <img src={image} className='h-screen w-screen md:object-cover' />
            <div className='absolute top-0 md:top-1/4 left-[20%] md:left-2/4'>
                <p className='error-text md:-rotate-[50deg] text-6xl'>{status || 404}</p>
                <p className='error-text md:-rotate-6 text-xl md:text-3xl'>{error?.message || 'Something went wrong!'}</p>
            </div>
            <button className='error-btn  absolute top-1/3 md:top-3/4 left-[45%]  md:left-3/4'>
                <Link to='/'>Go Back To Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;