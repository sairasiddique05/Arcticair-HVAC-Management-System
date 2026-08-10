import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaTools,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import API from "../../api/axios";

const RecentRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRecentRequests();
  }, []);

  const fetchRecentRequests = async () => {
    try {
      const res = await API.get("/requests");

      // Latest 3 requests
      const latestRequests = res.data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);

      setRequests(latestRequests);
    } catch (error) {
      console.log("Failed to fetch recent requests:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "In Progress":
        return "bg-orange-100 text-orange-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatTime = (request) => {
    if (request.preferredTime) {
      return request.preferredTime;
    }

    if (request.preferredDate) {
      return new Date(request.preferredDate).toLocaleDateString();
    }

    return "Not specified";
  };

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Recent Requests
        </h2>

        <Link
          to="/admindashboard/requests"
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold"
        >
          View All
          <FaArrowRight />
        </Link>

      </div>

      {/* Requests */}
      <div className="space-y-5">

        {requests.length === 0 ? (

          <div className="text-center py-8 text-gray-500">
            No service requests found.
          </div>

        ) : (

          requests.map((request) => (

            <div
              key={request._id}
              className="border rounded-xl p-4 hover:shadow-md transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-bold text-[#0F4C81]">
                    {request.serviceType}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 mt-2">

                    <FaUser className="text-[#0F4C81]" />

                    <span>
                      {request.customer?.name || "Unknown Customer"}
                    </span>

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

                  <span>
                    {formatTime(request)}
                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <FaTools className="text-[#0F4C81]" />

                  <span>
                    REQ-{request._id?.slice(-6).toUpperCase()}
                  </span>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default RecentRequest;