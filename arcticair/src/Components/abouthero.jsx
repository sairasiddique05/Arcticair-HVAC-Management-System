import React from 'react'
import aboutHero from '../assets/abouthero.png'
import { Link } from 'react-router-dom';


const AboutHero = () => {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center  bg-no-repeat bg-cover bg-[center_44%]"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          About ArcticAir HVAC Solutions
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          Delivering reliable heating, cooling, and indoor comfort solutions
          for residential and commercial customers across multiple cities.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Request Service
          </Link>

          <Link
            to="/contact"
            className="border-2 border-white hover:bg-white hover:text-[#0F4C81] px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  )
}

export default AboutHero