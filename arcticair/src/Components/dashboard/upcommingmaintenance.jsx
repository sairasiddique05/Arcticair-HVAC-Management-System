import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const UpcommingMaintenance = () => {
    const plans = [
  {
    title: "Annual HVAC Inspection",
    date: "15 Aug 2026",
  },
  {
    title: "Filter Replacement",
    date: "22 Sep 2026",
  },
];
  return (
     <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Upcoming Maintenance
      </h2>

      <div className="space-y-5">

        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-4"
          >

            <div className="w-14 h-14 rounded-xl bg-orange-500 text-white flex items-center justify-center">

              <FaCalendarAlt className="text-xl" />

            </div>

            <div>

              <h3 className="font-semibold text-[#0F4C81]">
                {plan.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {plan.date}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default UpcommingMaintenance