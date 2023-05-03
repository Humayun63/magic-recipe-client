// Recipe added to local
const saveToDB = (chefId, recipeId) => {
    const allIds = localStorage.getItem('saved-recipes') ? JSON.parse(localStorage.getItem('saved-recipes')) : {};

    if(allIds[chefId]){
        allIds[chefId].push(recipeId)
    }else{
        allIds[chefId] = [recipeId]
    }

    localStorage.setItem('saved-recipes', JSON.stringify(allIds))
    
}

// Get Recipe from local
const getFromDB = () =>{
    if(localStorage.getItem('saved-recipes')){
        return JSON.parse(localStorage.getItem('saved-recipes'))
    }else{
        return {}
    }
}

// Remove Recipe From Local
const removeFromDB = (chef_id, id) =>{
    const allIds = JSON.parse(localStorage.getItem('saved-recipes')) || {}
    for(let key in allIds){
        if(key === chef_id){
           allIds[key] = allIds[key].filter(item => item !== id)
        }
    }
    localStorage.setItem('saved-recipes', JSON.stringify(allIds))
}



export{
    saveToDB,
    getFromDB,
    removeFromDB
}


