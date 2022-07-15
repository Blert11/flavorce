import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../styles/RecipesGrid.css"
import ReactPaginate from 'react-paginate';

const RecipesGrid = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=51d0e725a5f9407891c4892e29d1c70a&number=12`)
        const data = await api.json()

        console.log(data)

        setPopular(data.recipes)

        console.log(data.recipes)
    }

    return (
        <div className='all-recipes-div'>
            <div className='Wrapper'>

                {
                    popular.map((recipe) => {
                        return (
                            <div key={recipe.id} className="Card">
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default RecipesGrid