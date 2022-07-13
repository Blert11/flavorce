import React from 'react'
import "../styles/Hero.css"
import HeroImage from "../images/HeroImage.png"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero-section'>

            <div className='text-div'>
                <h3>Flavorce</h3>
                <h1>Let's get you <br />
                    into <span>cooking</span>!</h1>
                <Link to={'/recipes'} className="search-recipes">Search recipes</Link>
            </div>

            <div className="photo-div">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero