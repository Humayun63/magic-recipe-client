import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../componets/RecipeCard';

const ChefRecipes = () => {
    const chef = useLoaderData()
    const [recipes, setRecipes] = useState([])
    const { id, name, bio, experience, likes, picture, numRecipes } = chef

    useEffect(() => {
        fetch(`https://magic-recipe-server-humayun63.vercel.app/recipe/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.log(error))
    }, [])

    return (
        <main>
            {/* Banner */}
            <section className='md:flex items-center justify-center gap-2 bg-orange-300 py-8 rounded-md'>
                <div className='md:w-1/3'>
                    <img src={picture} alt="Chef Picture" className='w-full h-64 object-contain p-2' />
                </div>
                <div className='md:w-1/2 px-8'>
                    <h2 className='text-4xl my-4 font-bold'>{name}</h2>
                    <p className='my-3 text-xl text-justify'><span className='font-semibold'>Biography: </span>{bio}</p>
                    <p className='my-3 text-xl text-justify'><span className='font-semibold'>Experience: </span> {experience} years</p>
                    <p className='my-3 text-xl text-justify'><span className='font-semibold'>Number Of Recipes: </span>{numRecipes}</p>
                    <p className='my-3 text-xl text-justify'><span className='font-semibold'>Likes: </span>{likes}</p>
                </div>
            </section>
            {/* Recipes Cards */}
            <section className='my-12'>
                <h3 className='magic-title text-orange-500'>{name}'s Recipes</h3>
                <div className='md:flex  gap-4 my-6'>
                    {
                        recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                            ></RecipeCard>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};

export default ChefRecipes;