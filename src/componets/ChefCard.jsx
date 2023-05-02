import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, picture, experience, numRecipes, likes } = chef;
    return (
        <div className='p-8 rounded-lg bg-orange-300'>
            
            <div className='w-full h-56 mb-12'>
                <LazyLoad height={250} offset={100}>
                    <img src={picture} alt="" className='w-full h-full object-fill' />
                </LazyLoad>
            </div>
            <h4 className='text-2xl my-4 font-bold'>{name}</h4>
            <p className='text-lg my-2'><span className='font-bold'>Experience:</span> {experience} Years</p>
            <p className='text-lg my-2'><span className='font-bold'>Number of Recipes:</span> {numRecipes}</p>
            <p className='text-lg my-2'><span className='font-bold'>Likes:</span> {likes}</p>
            <Link to={`/chef/${id}`}><button className='magic-btn block mt-6 w-full'>View Recipes</button></Link>
        </div>
    );
};

export default ChefCard;