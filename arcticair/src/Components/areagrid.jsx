import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

const AreaGrid = () => {
    const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Dallas",
    "San Diego",
    "San Antonio",
    "Austin",
    "Philadelphia",
    "Jacksonville",
    "Columbus",
  ];
  return (
   <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="text-orange-500 uppercase font-semibold">
            Coverage Areas
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Cities We Serve
          </h2>

          <p className="text-gray-600 mt-4">
            Our certified HVAC technicians proudly serve residential and commercial customers.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {cities.map((city, index) => (

            <div
              key={index}
              className="bg-sky-50 rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition text-center"
            >

              <FaMapMarkerAlt className="mx-auto text-4xl text-orange-500 mb-4"/>

              <h3 className="text-xl font-semibold text-[#0F4C81]">
                {city}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default AreaGrid