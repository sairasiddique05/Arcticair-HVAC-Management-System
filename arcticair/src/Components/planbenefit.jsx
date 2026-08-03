import React from 'react'
import {
  FaClock,
  FaTools,
  FaDollarSign,
  FaLeaf,
} from "react-icons/fa";

const PlanBenefit = () => {
     const benefits = [
    {
      icon: <FaClock />,
      title: "Priority Service",
      text: "Maintenance members receive priority scheduling for repairs and inspections.",
    },
    {
      icon: <FaTools />,
      title: "Annual Inspection",
      text: "Comprehensive HVAC inspections to keep your system operating efficiently.",
    },
    {
      icon: <FaDollarSign />,
      title: "Repair Discounts",
      text: "Enjoy exclusive discounts on labor, repairs, and replacement parts.",
    },
    {
      icon: <FaLeaf />,
      title: "Energy Savings",
      text: "Well-maintained systems consume less energy and reduce utility costs.",
    },
  ];
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Why Choose a Maintenance Plan?
          </h2>

          <p className="text-gray-600 mt-4">
            Save money, improve efficiency, and extend the life of your HVAC system.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {benefits.map((item, index) => (

            <div
              key={index}
              className="bg-sky-50 p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition"
            >

              <div className="text-4xl text-[#0F4C81] mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default PlanBenefit