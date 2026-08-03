import React from 'react'
import { Link } from "react-router-dom";
import {
  FaUser,
  FaTools,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const requests = [
  {
    id: "REQ-1001",
    customer: "John Smith",
    service: "AC Repair",
    time: "09:00 AM",
    status: "Pending",
  },
  {
    id: "REQ-1002",
    customer: "Sarah Johnson",
    service: "Heating Installation",
    time: "11:30 AM",
    status: "Assigned",
  },
  {
    id: "REQ-1003",
    customer: "Michael Brown",
    service: "HVAC Maintenance",
    time: "02:00 PM",
    status: "Completed",
  },
];

 

const RecentRequest = () => {
     const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
  <div className="bg-white rounded-2xl shadow-lg p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Recent Requests
        </h2>

        <Link
          to="/admin-dashboard/requests"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
        >
          View All
          <FaArrowRight />
        </Link>

      </div>

      <div className="space-y-5">

        {requests.map((request) => (

          <div
            key={request.id}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-bold text-[#0F4C81]">
                  {request.service}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mt-2">

                  <FaUser className="text-[#0F4C81]" />

                  <span>{request.customer}</span>

                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  request.status
                )}`}
              >
                {request.status}
              </span>

            </div>

            <div className="flex justify-between items-center mt-4 text-gray-600">

              <div className="flex items-center gap-2">

                <FaClock className="text-orange-500" />

                <span>{request.time}</span>

              </div>

              <div className="flex items-center gap-2">

                <FaTools className="text-[#0F4C81]" />

                <span>{request.id}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default RecentRequest