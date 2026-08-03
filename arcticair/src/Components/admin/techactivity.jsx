import React from 'react'
import {
  FaUserCog,
  FaCircle,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const technicians = [
  {
    id: "TECH-001",
    name: "Michael Johnson",
    status: "On Job",
    location: "123 Main Street",
  },
  {
    id: "TECH-002",
    name: "David Wilson",
    status: "Available",
    location: "Office",
  },
  {
    id: "TECH-003",
    name: "Chris Evans",
    status: "Offline",
    location: "—",
  },
];

const TechActivity = () => {
    const statusColor = (status) => {
    switch (status) {
      case "Available":
        return "text-green-500";

      case "On Job":
        return "text-orange-500";

      case "Offline":
        return "text-gray-400";

      default:
        return "text-gray-400";
    }
  };
  return (
   <div className="bg-white rounded-2xl shadow-lg p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Technician Activity
        </h2>

        <Link
          to="/admin-dashboard/technicians"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
        >
          View All
          <FaArrowRight />
        </Link>

      </div>

      <div className="space-y-5">

        {technicians.map((tech) => (

          <div
            key={tech.id}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-[#0F4C81] flex items-center justify-center text-white">
                  <FaUserCog />
                </div>

                <div>

                  <h3 className="font-semibold text-[#0F4C81]">
                    {tech.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {tech.id}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <FaCircle className={`text-xs ${statusColor(tech.status)}`} />

                <span className="font-medium">
                  {tech.status}
                </span>

              </div>

            </div>

            <div className="flex items-center gap-2 mt-4 text-gray-600">

              <FaMapMarkerAlt className="text-red-500" />

              <span>{tech.location}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default TechActivity