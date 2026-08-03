import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/servicehero.png'
const ServiceHero = () => {
  return (
 <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-5xl font-bold">
          Our HVAC Services
        </h1>

        <p className="mt-5 text-lg max-w-3xl mx-auto">
          From installations and repairs to preventive maintenance,
          ArcticAir delivers reliable HVAC solutions for homes and businesses.
        </p>

        <Link
          to="/requests"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          Request Service
        </Link>

      </div>
    </section>
  )
}

export default ServiceHero