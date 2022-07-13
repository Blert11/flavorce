import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/RecipeDetails.css'

const Recipe = () => {

    const navigate = useNavigate()

    let params = useParams()

    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState("instructions")

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

        const detailData = await data.json()

        setDetails(detailData)
        console.log(detailData)
    }

    useEffect(() => {
        fetchDetails()
    }, [params.name])

    return (
        <div className='detail-wrapper'>

            <div className='detail-photo'>
                <h1>{details.title}</h1>
                <img src={details.image} alt="" />
            </div>

            <div className='detail-info'>
                <button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</button>
                <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</button>

                {activeTab === 'instructions' && (

                    <div>
                        {/* renders html text from api to normal text */}
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>

                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>

                )}

                {activeTab === 'ingredients' && (

                    <ul>
                        {
                            details.extendedIngredients.map((ingredient) =>
                                <li key={ingredient.id}>
                                    {ingredient.original}
                                </li>
                            )
                        }
                    </ul>

                )}

                <button style={{ marginTop: '25px'}} onClick={() => navigate(-1)}>Go back to recipes</button>
            </div>
        </div>
    )
}

export default Recipe