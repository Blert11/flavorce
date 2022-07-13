import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import "../styles/Recipes.css"

const Recipes = () => {

    const [recipe, setRecipe] = useState([])

    const getRecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
        const data = await api.json()
        console.log(data)
        setRecipe(data.recipes)
        console.log(data.recipes)
    }

    useEffect(() => {
        getRecipe()
    }, [])

    return (
        <div className='recipes-section'>

            <h1 className='latest-recipes'>Latest Recipes</h1>


            <div className='recipes-div'>
                {
                    recipe.map((recipe) => {
                        return (
                            <Link to={'/recipe/' + recipe.id} className='home-recipe-link'>
                                <div className='recipe-card'>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <p className='home-recipe-title'>{recipe.title}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <Link className='search-more' to={'/recipes'}>Search more...</Link>
        </div>
    )
}

export default Recipes