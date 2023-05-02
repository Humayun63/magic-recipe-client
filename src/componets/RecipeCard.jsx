import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegBookmark } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
    const { id, name, ingredients, method, rating } = recipe
    return (
        <div className='bg-orange-300 px-4 py-6 rounded-md shadow-xl w-1/3 flex flex-col'>
            <div className='mb-4'>
                <h4 className='text-2xl font-bold my-4'>{name}</h4>
                <div className='text-base my-4 text-justify'><span className='font-medium'>Ingredients: </span>
                    {
                        ingredients.map((item, index) => (
                            <li key={index} className='ps-3 my-2'>{item}</li>
                        ))
                    }
                </div>
                <p className='text-base my-4 text-justify'><span className='font-medium'>Method: </span>{method}</p>
            </div>
            <div className='w-full border my-4 mt-auto border-orange-600'></div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Rating value={rating} style={{ maxWidth: 100 }} readOnly></Rating>
                    {rating}
                </div>
                <button onClick={() => toast.success(<span className='text-green-400'>The recipe is your favorite</span>)}>
                    <FaRegBookmark className='cursor-pointer text-xl'></FaRegBookmark>
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;