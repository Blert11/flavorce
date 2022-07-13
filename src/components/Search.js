import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Search.css"

const Search = () => {
    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        navigate('/searched/' + input)
        e.preventDefault()
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className='search-div'>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Search recipes..." />
            </div>
        </form>
    )
}

export default Search