import React from 'react'
import "../styles/Newsletter.css"

const Newsletter = () => {
    return (
        <div className='newsletter-section'>
            <h1>Subscribe to our newsletter!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi accusamus odio, quia eveniet ut incidunt quos voluptatem itaque autem?</p>

            <form action="" className='email-form'>
                <input type="text" placeholder='Enter your email...' />
                <input type="button" value="Send" />
            </form>
        </div>
    )
}

export default Newsletter