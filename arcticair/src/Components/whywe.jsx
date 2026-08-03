import React from 'react'
import {
  FaUserCheck,
  FaClock,
  FaBolt,
  FaDollarSign,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck size={40} />,
    title: "Licensed Technicians",
    description:
      "Our certified HVAC professionals deliver reliable and high-quality service.",
  },
  {
    icon: <FaClock size={40} />,
    title: "24/7 Emergency Support",
    description:
      "We're available around the clock to handle urgent HVAC emergencies.",
  },
  {
    icon: <FaBolt size={40} />,
    title: "Fast Response",
    description:
      "Quick scheduling and rapid response to get your HVAC system back on track.",
  },
  {
    icon: <FaDollarSign size={40} />,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden costs and competitive service rates.",
  },
];


const WhyWe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We are committed to delivering dependable HVAC solutions with
            exceptional customer service and experienced professionals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-orange-500 flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyWe