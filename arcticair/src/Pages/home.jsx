import React from 'react'
import NavBar from '../Components/navbar'
import Footer from '../Components/footer'
import Hero from '../Components/hero'
import Services from '../Components/services'
import WhyWe from '../Components/whywe'
import TestiMonials from '../Components/testimonials'
import Cta from '../Components/cta'
import ServiceS from '../Components/services'

const Home = () => {
  return (
   <>
    <NavBar/>
    
    <Hero/>
    <ServiceS/>
     <WhyWe/> 
     <TestiMonials/>
     <Cta/>
      <Footer/>
    </>
  )
}

export default Home