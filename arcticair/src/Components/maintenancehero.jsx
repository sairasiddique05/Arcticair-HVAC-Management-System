import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/plan.png'

const MaintinanceHero = () => {
  return (
<section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-5xl font-bold">
          HVAC Maintenance Plans
        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-lg">
          Protect your heating and cooling system with our affordable annual maintenance plans.
        </p>

        <Link
          to="/login"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          Choose Your Plan
        </Link>

      </div>
    </section>
  )
}

export default MaintinanceHero