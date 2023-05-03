import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const Card = ({ recipe, handleRemove }) => {
    const { id, chef_id, picture, chefName, name, rating } = recipe
    

    return (
        <div className='bg-orange-300 my-4 flex flex-col p-4 rounded-md'>
            <div className='my-4'>
                <img src={picture} alt="Recipe Image" className='w-full rounded-xl h-44' />
            </div>
            <div className='flex flex-col mb-4'>
                <h4 className='text-lg font-semibold my-2'>{name}</h4>
                <p className="text-lg mt-auto"><span className='font-medium'>Chef Name: </span>{chefName}</p>
            </div>
            <div className='w-full border my-4 mt-auto border-orange-600'></div>
            <div className='md:flex justify-between items-center'>
                <div className='flex gap-2'>
                    <Rating value={rating} style={{ maxWidth: 100 }} readOnly></Rating>
                    {rating}
                </div>
                <button  className="magic-btn" onClick={ ()=> handleRemove(chef_id, id)}>
                    <FaTrashAlt></FaTrashAlt>
                </button>
            </div>
        </div>
    );
};

export default Card;