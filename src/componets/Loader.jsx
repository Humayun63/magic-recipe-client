import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
    return (
        <div className='flex justify-center h-40 items-center'>
            <h2 className='text-8xl font-bold tracking-widest inline-flex items-center gap-1'>L <span className='text-orange-500 text-6xl animate-spin'><FaSpinner></FaSpinner></span> ding</h2>
        </div>
    );
};

export default Loader;