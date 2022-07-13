import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { NavLink } from 'react-router-dom'
import '../styles/Categories.css'

const Category = () => {
    return (
        <div className='List'>
            <NavLink className='SLink' to={'/cuisine/Italian'}>
                <FaPizzaSlice /> &nbsp;
                <h4>Italian</h4>
            </NavLink>
 
            <NavLink className='SLink' to={'/cuisine/American'}>
                <FaHamburger /> &nbsp;
                <h4>American</h4>
            </NavLink>

            <NavLink className='SLink' to={'/cuisine/Thai'}>
                <GiNoodles /> &nbsp;
                <h4>Thai</h4>
            </NavLink>

            <NavLink className='SLink' to={'/cuisine/Japanese'}>
                <GiChopsticks /> &nbsp;
                <h4>Japanese</h4>
            </NavLink>
        </div>
    )
}


export default Category