import React from 'react'
import { FaTools, FaCheckCircle, FaClock } from "react-icons/fa";

const RecentRequest = () => {
    const requests = [
  {
    service: "AC Repair",
    date: "28 Jul 2026",
    status: "Pending",
  },
  {
    service: "Heating Repair",
    date: "20 Jul 2026",
    status: "Completed",
  },
  {
    service: "HVAC Installation",
    date: "10 Jul 2026",
    status: "In Progress",
  },
];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Recent Requests
      </h2>

      <div className="space-y-5">

        {requests.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>

              <div className="flex items-center gap-3">

                <FaTools className="text-orange-500" />

                <h3 className="font-semibold">
                  {item.service}
                </h3>

              </div>

              <p className="text-sm text-gray-500 mt-1">
                {item.date}
              </p>

            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-medium
              ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : item.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {item.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  )
}

export default RecentRequest