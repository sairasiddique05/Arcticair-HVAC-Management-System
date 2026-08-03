import React from 'react'
import AboutHero from '../Components/abouthero'
import CompanyIntro from '../Components/companyintro'
import NavBar from '../Components/navbar'
import MissionVision from '../Components/missionvision'
import WhyWe from '../Components/whywe'
import Cta from '../Components/cta'

const AboutUs = () => {
  return (
  <>
  <NavBar/>
  <AboutHero/>
  <CompanyIntro/>
  <MissionVision/>
  <WhyWe/>
  <Cta/>
  </>
  )
}

export default AboutUs