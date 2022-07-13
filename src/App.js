import React from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import { Route, Routes, Router } from 'react-router-dom'
import Home from './pages/Home'
import AllRecipes from './pages/AllRecipes'
import Searched from './pages/Searched'
import RecipeDetail from './pages/RecipeDetail'
import CategoriesPage from './pages/CategoriesPage'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<AllRecipes />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<RecipeDetail />} />
        <Route path='/cuisine/:type' element={<CategoriesPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App