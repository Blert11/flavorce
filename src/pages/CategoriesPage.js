import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import '../styles/CategoriesPage.css'
import Search from '../components/Search'
import Category from '../components/Categories'

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])

    return (
        <div>

            <Search />
            <Category />

            <div className='categories-page-grid'>

                {cuisine.map((item) => {
                    return (
                        <div className='categories-page-card' key={item.id}>
                            <Link to={'/recipe/' + item.id}>
                                <img src={item.image} alt="" />
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cuisine