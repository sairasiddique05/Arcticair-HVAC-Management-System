import React from 'react'
import { FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const jobs = [
  {
    id: "#JOB001",
    customer: "John Doe",
    service: "AC Repair",
    time: "09:00 AM",
    address: "123 Main Street",
    status: "Pending",
  },
  {
    id: "#JOB002",
    customer: "Sarah Johnson",
    service: "Heating Repair",
    time: "11:30 AM",
    address: "456 Oak Avenue",
    status: "In Progress",
  },
  {
    id: "#JOB003",
    customer: "Michael Brown",
    service: "HVAC Installation",
    time: "03:00 PM",
    address: "789 Pine Road",
    status: "Assigned",
  },
];


const TodayJobs = () => {
     const badgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "In Progress":
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
          Today's Jobs
        </h2>

        <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-2">
          View All
          <FaArrowRight />
        </button>

      </div>

      <div className="space-y-5">

        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-bold text-[#0F4C81]">
                  {job.service}
                </h3>

                <p className="text-sm text-gray-600">
                  {job.customer}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                  job.status
                )}`}
              >
                {job.status}
              </span>

            </div>

            <div className="mt-4 flex items-center gap-2 text-gray-600">

              <FaClock className="text-orange-500" />

              <span>{job.time}</span>

            </div>

            <div className="mt-2 flex items-center gap-2 text-gray-600">

              <FaMapMarkerAlt className="text-red-500" />

              <span>{job.address}</span>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default TodayJobs