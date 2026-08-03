import React from 'react'
import ServiceHero from '../Components/servicehero'
import NavBar from '../Components/navbar'
import ServiceIntro from '../Components/serviceintro'
import ServiceGrid from '../Components/Servicegrid'
import ServiceProcess from '../Components/serviceprocess'
import WhyWe from '../Components/whywe'
import Cta from '../Components/cta'

const Services = () => {
  return (
    <>
    <NavBar/>
  <ServiceHero/>
  <ServiceIntro/>
  <ServiceGrid/>
  <ServiceProcess/>
  <WhyWe/>
  <Cta/>
  </>
  )
}

export default Services