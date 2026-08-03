import React from 'react'
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Mission & Vision
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We are committed to providing reliable HVAC solutions while building
            long-term relationships through quality service, innovation, and
            customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <FaBullseye className="text-3xl text-orange-500" />
            </div>

            <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              To provide dependable, affordable, and energy-efficient HVAC
              services while delivering exceptional customer experiences.
              Through skilled technicians, advanced technology, and continuous
              innovation, we ensure every customer enjoys year-round indoor
              comfort and peace of mind.
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaEye className="text-3xl text-[#0F4C81]" />
            </div>

            <h3 className="text-2xl font-bold text-[#0F4C81] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become the most trusted HVAC service provider by delivering
              innovative, sustainable, and customer-focused solutions. We strive
              to lead the industry through professionalism, reliability, and
              continuous improvement while embracing future technologies.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default MissionVision