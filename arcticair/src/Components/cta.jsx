import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
 <section className="bg-[#0F4C81] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Need Immediate HVAC Assistance?
        </h2>

        <p className="text-blue-100 mt-5 text-lg max-w-2xl mx-auto">
          Whether it's an emergency repair, a new installation, or routine
          maintenance, our certified HVAC technicians are ready to help.
        </p>

        <Link
          to="/request-service"
          className="inline-flex items-center gap-3 mt-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition duration-300"
        >
          Request Service
          <FaArrowRight />
        </Link>

      </div>
    </section>
  )
}

export default Cta