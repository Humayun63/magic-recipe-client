import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../componets/Card';
import { removeFromDB } from '../utilities/fakeDB';


const FavoriteRecipe = () => {
    const data = useLoaderData() || []
    const [recipes, setRecipes] = useState(data)

    const handleRemove = (chef_id, id) => {
        const remainingRecipes = recipes.filter(
            recipe => recipe.chef_id !== chef_id || recipe.id !== id
        )
        setRecipes(remainingRecipes)
        removeFromDB(chef_id, id)
    }
    
    return (
        <main>
            {
                (recipes.length == 0) ?
                    <h2 className='my-44 text-4xl text-orange-500 font-semibold border border-orange-500 py-4 rounded-md shadow-xl text-center'>You Haven't Added Anything Favorite Yet!</h2> :
                    <section>
                        <h2 className='magic-title text-orange-500'>Favorite Recipes</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {
                                recipes.map((recipe, index) => (
                                    <Card
                                        key={index}
                                        recipe={recipe}
                                        handleRemove={handleRemove}
                                    ></Card>
                                ))
                            }
                        </div>
                    </section>
            }
        </main>
    );
};

export default FavoriteRecipe;