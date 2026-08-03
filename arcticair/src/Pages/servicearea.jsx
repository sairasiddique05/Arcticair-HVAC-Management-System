import React from 'react'
import ServiceAreahero from '../Components/serviceareahero'
import NavBar from '../Components/navbar'
import AreaGrid from '../Components/areagrid'
import WhyLocalService from '../Components/whylocalservice'
import ServiceMap from '../Components/servicemap'
import Cta from '../Components/cta'

const ServiceArea = () => {
  return (
   <>
   <NavBar/>
   <ServiceAreahero/>
   <AreaGrid/>
   <WhyLocalService/>
   <ServiceMap/>
   <Cta/>
   </>
  )
}

export default ServiceArea