import React, { useEffect, useState } from "react";
import {
  FaUserCog,
  FaCircle,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import API from "../../api/axios";

const TechActivity = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    fetchTechnicians();
  }, []);

  const fetchTechnicians = async () => {
    try {
      const res = await API.get("/users/technicians");

      setTechnicians(res.data.slice(0, 3));
    } catch (error) {
      console.log("Failed to fetch technicians:", error);
    }
  };

  const getStatus = (tech) => {
    // If your backend already has a status field
    if (tech.status) {
      return tech.status;
    }

    // Default status if status is not stored in User model
    return "Available";
  };

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
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Technician Activity
        </h2>

        <Link
          to="/admindashboard/technicians"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
        >
          View All
          <FaArrowRight />
        </Link>

      </div>

      {/* Technicians */}
      <div className="space-y-5">

        {technicians.length === 0 ? (

          <div className="text-center py-8 text-gray-500">
            No technicians found.
          </div>

        ) : (

          technicians.map((tech) => {

            const status = getStatus(tech);

            return (
              <div
                key={tech._id}
                className="border rounded-xl p-4 hover:shadow-md transition"
              >

                <div className="flex justify-between items-center">

                  {/* Technician Info */}
                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-[#0F4C81] flex items-center justify-center text-white">
                      <FaUserCog />
                    </div>

                    <div>

                      <h3 className="font-semibold text-[#0F4C81]">
                        {tech.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        TECH-{tech._id?.slice(-5).toUpperCase()}
                      </p>

                    </div>

                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">

                    <FaCircle
                      className={`text-xs ${statusColor(status)}`}
                    />

                    <span className="font-medium">
                      {status}
                    </span>

                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mt-4 text-gray-600">

                  <FaMapMarkerAlt className="text-red-500" />

                  <span>
                    {tech.address || tech.location || "Location not available"}
                  </span>

                </div>

              </div>
            );
          })

        )}

      </div>

    </div>
  );
};

export default TechActivity;