import React from 'react'
import ContactInfo from '../Components/contactinfo'
import ContactForm from '../Components/contactform'
import BusinessHours from '../Components/businesshours'
import ServiceMap from '../Components/servicemap'
import Cta from '../Components/cta'

const Contact = () => {
  return (
   <>
   <ContactForm/>
   <ContactInfo/>
   <BusinessHours/>
   <ServiceMap/>
   <Cta/>
   </>
  )
}

export default Contact