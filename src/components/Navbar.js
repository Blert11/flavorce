import React from 'react'
import Logo from "../images/Logo.png"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={Logo} alt="" />
            </Link>

            <Link to="/recipes" className='nav-link'>Search recipes</Link>
        </div>
    )
}

export default Navbar