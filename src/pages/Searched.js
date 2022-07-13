import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import "../styles/Searched.css"
import Search from '../components/Search'
import Category from '../components/Categories'

const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <div className='searched-div'>
            <Search />
            <Category />

            <div className='grid-searched'>
                {searchedRecipes.map((item) => {
                    return (
                        <div key={item.id} className='grid-card'>
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


export default Searched