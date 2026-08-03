import React from 'react'
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaTools,
  FaSyncAlt,
} from "react-icons/fa";

const plan = {
  name: "Premium Maintenance Plan",
  status: "Active",
  renewalDate: "15 August 2027",
  price: "$299 / Year",
  services: [
    "Annual HVAC Inspection",
    "Priority Emergency Support",
    "Two Free Maintenance Visits",
    "10% Discount on Repairs",
    "Filter Replacement",
    "System Performance Check",
  ],
};

const MaintenancePlan = () => {
  return (
   <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#0F4C81]">
          Maintenance Plan
        </h1>

        <p className="text-gray-600 mt-2">
          View your maintenance membership details and renewal information.
        </p>

      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#0F4C81] text-white p-8 flex flex-col md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              {plan.name}
            </h2>

            <p className="mt-2 text-blue-100">
              Keep your HVAC system running efficiently all year.
            </p>

          </div>

          <span className="mt-5 md:mt-0 bg-green-500 px-6 py-3 rounded-full font-semibold">
            {plan.status}
          </span>

        </div>

        {/* Body */}
        <div className="p-8 grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <div>

            <div className="flex items-center gap-4 mb-6">

              <FaCalendarAlt className="text-orange-500 text-3xl" />

              <div>

                <h3 className="font-semibold text-[#0F4C81]">
                  Renewal Date
                </h3>

                <p className="text-gray-600">
                  {plan.renewalDate}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <FaTools className="text-orange-500 text-3xl" />

              <div>

                <h3 className="font-semibold text-[#0F4C81]">
                  Plan Price
                </h3>

                <p className="text-gray-600">
                  {plan.price}
                </p>

              </div>

            </div>

          </div>

          {/* Right */}
          <div>

            <h3 className="text-2xl font-bold text-[#0F4C81] mb-6">
              Included Services
            </h3>

            <div className="space-y-4">

              {plan.services.map((service, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-green-500" />

                  <span>{service}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-8 flex flex-col sm:flex-row gap-4 justify-end">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2">

            <FaSyncAlt />

            Renew Plan

          </button>

          <button className="bg-[#0F4C81] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition">

            Upgrade Plan

          </button>

        </div>

      </div>

    </section>
  )
}

export default MaintenancePlan