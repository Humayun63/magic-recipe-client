import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegBookmark } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { getFromDB, saveToDB } from '../utilities/fakeDB';

const RecipeCard = ({ recipe, chefId }) => {
    const { id, name, ingredients, method, rating } = recipe

    // Disable button which already added to favourite
    const favoriteRecipes = getFromDB()[chefId] || []


    const handleFavourite = event =>{
        // DISABLE BUTTON
        event.target.disabled = true;
        event.target.classList.remove('magic-btn')
        event.target.classList.add('magic-btn-disabled')

        // SHOW TOAST
        toast.success(<span className='text-green-400'>The recipe is your favorite</span>)

        // SAVE TO LOCAL
        saveToDB(chefId,id)
    }

    return (
        <div className='bg-orange-300 px-4 py-6 rounded-md shadow-xl md:w-1/3 flex flex-col my-4'>
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
            <div className='md:flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Rating value={rating} style={{ maxWidth: 100 }} readOnly></Rating>
                    {rating}
                </div>
                <button disabled={favoriteRecipes.includes(id) ? true : false} className={`my-4 ${ favoriteRecipes.includes(id) ? 'magic-btn-disabled' : 'magic-btn'}`} onClick={handleFavourite}>
                    Add To Favorite 
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;