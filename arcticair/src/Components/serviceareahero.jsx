import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/area.png'

const ServiceAreahero = () => {
  return (
     <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-5xl font-bold">
          Service Areas
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-lg">
          Providing trusted HVAC installation, repair, and maintenance
          services across multiple cities.
        </p>

        <Link
          to="/login"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold"
        >
          Request Service
        </Link>

      </div>
    </section>
  )
}

export default ServiceAreahero