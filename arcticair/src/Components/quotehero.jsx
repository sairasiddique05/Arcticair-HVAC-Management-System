import React from 'react'
import { Link } from 'react-router-dom'

const QuoteHero = () => {
  return (
      <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
    //   style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-5xl font-bold">
          Request a Free Quote
        </h1>

        <p className="mt-5 max-w-3xl mx-auto text-lg">
          Get a personalized estimate for your HVAC installation,
          repair, or maintenance needs. Our experts will review your
          request and provide a transparent quote.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          Contact Us
        </Link>

      </div>
    </section>
  )
}

export default QuoteHero