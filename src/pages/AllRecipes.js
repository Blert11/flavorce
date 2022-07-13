import React from 'react'
import Search from '../components/Search'
import RecipesGrid from '../components/RecipesGrid'
import Category from '../components/Categories'

const AllRecipes = () => {

  return (
    <div>
      <Search />
      <Category />
      <RecipesGrid />
    </div>
  )
}

export default AllRecipes