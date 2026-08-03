import React from 'react'
import MaintinanceHero from '../Components/maintenancehero'
import NavBar from '../Components/navbar'
import PlanBenefit from '../Components/planbenefit'
import PricingPlan from '../Components/pricingplan'
import PlanCompare from '../Components/plancompare'
import FaQ from '../Components/faq'

const Maintenace = () => {
  
  return (
    <>
    <NavBar/>
    <MaintinanceHero/>
    <PlanBenefit/>
    <PricingPlan/>
    <PlanCompare/>
    <FaQ/>
    </>
   
  )
}

export default Maintenace