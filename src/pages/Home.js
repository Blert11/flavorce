import React from 'react'
import Hero from '../components/Hero'
import PhoneInstall from '../components/PhoneInstall'
import Newsletter from '../components/Newsletter'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <div>
        <Hero />
        <Recipes />
        <PhoneInstall />
        <Newsletter />
    </div>
  )
}

export default Home