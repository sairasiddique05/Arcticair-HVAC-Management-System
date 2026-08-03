import React from 'react'
import {
  FaSnowflake,
  FaTools,
  FaFire,
  FaWind,
  FaThermometerHalf,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSnowflake size={40} />,
    title: "HVAC Installation",
    description: "Professional installation of heating and cooling systems.",
  },
  {
    icon: <FaTools size={40} />,
    title: "AC Repair",
    description: "Fast and reliable air conditioning repair services.",
  },
  {
    icon: <FaFire size={40} />,
    title: "Heating Repair",
    description: "Keep your home warm with expert heating repairs.",
  },
  {
    icon: <FaWind size={40} />,
    title: "Duct Cleaning",
    description: "Improve indoor air quality with clean air ducts.",
  },
  {
    icon: <FaThermometerHalf size={40} />,
    title: "Thermostat Installation",
    description: "Install smart and programmable thermostats easily.",
  },
  {
    icon: <FaClipboardCheck size={40} />,
    title: "Maintenance Plans",
    description: "Annual maintenance plans to keep your HVAC efficient.",
  },
];

const ServiceS = () => {
  return (
<section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Our Services
          </h2>

          <p className="text-gray-600 mt-3">
            We provide complete HVAC solutions for Residential and Commercial customers.
          </p>
        </div>

    
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-orange-500 flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

              <button className="mt-6 bg-[#0F4C81] text-white px-5 py-2 rounded-lg hover:bg-blue-900 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServiceS