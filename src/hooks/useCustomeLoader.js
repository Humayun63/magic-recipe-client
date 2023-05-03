import { getFromDB } from "../utilities/fakeDB";

const useCustomeLoader = async () => {
    const loadRecipes = await fetch('https://magic-recipe-server-humayun63.vercel.app/recipes')
    const recipes = await loadRecipes.json()

    const favoriteRecipes = []
    const localData = getFromDB() || {}

    for (let key in localData) {
        const localRecipeId = localData[key]
        const chefRecipes = recipes.find(recipe => recipe.chef_id === key).recipes

        for (let recipeId of localRecipeId) {
            const favRecipe = chefRecipes.find(recipe => recipe.id === recipeId)
            favoriteRecipes.push(favRecipe)
        }
    }
    return favoriteRecipes
}
export default useCustomeLoader;
