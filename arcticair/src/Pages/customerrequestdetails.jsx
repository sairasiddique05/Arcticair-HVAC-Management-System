
import React, { useEffect, useState } from "react";
import API from "../api/axios";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTools,
  FaCalendarAlt,
  FaClock,
  FaUserCog,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const CustomerRequestDetails = () => {
     const { id } = useParams();

  const [request, setRequest] = useState(null);

  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    try {
      const res = await API.get(`/requests/${id}`);
      setRequest(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!request) {
    return (
      <div className="p-10 text-center text-xl">
        Loading...
      </div>
    );
  }

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
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
  <section className="p-8 bg-slate-100 min-h-screen">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Request Details
        </h1>

        <p className="text-gray-600 mt-2">
          Track your HVAC service request.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-6 mb-8">

          <div>
            <h2 className="text-2xl font-bold text-[#0F4C81]">
              {request._id.slice(-6).toUpperCase()}
            </h2>

            <p className="text-gray-500">
              HVAC Service Request
            </p>
          </div>

          <span
            className={`px-5 py-2 rounded-full font-semibold ${getStatusColor(
              request.status
            )}`}
          >
            {request.status}
          </span>

        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaUser className="text-[#0F4C81]" />
              {request.customer?.name}
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" />
              {request.customer?.phone}
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              {request.address}
            </div>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaTools className="text-orange-500" />
              {request.serviceType}
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-blue-600" />
              {new Date(request.preferredDate).toLocaleDateString()}
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-purple-600" />
              {request.preferredTime}
            </div>

          </div>

        </div>

        {/* Description */}
        <div className="mt-10">

          <h3 className="text-xl font-bold text-[#0F4C81] mb-3">
            Problem Description
          </h3>

          <div className="bg-slate-100 rounded-xl p-5">
            {request.description}
          </div>

        </div>

        {/* Technician */}
        <div className="mt-10">

          <h3 className="text-xl font-bold text-[#0F4C81] mb-3">
            Assigned Technician
          </h3>

          <div className="bg-slate-100 rounded-xl p-5">

            {request.assignedTechnician ? (

              <>
                <div className="flex items-center gap-3 mb-3">
                  <FaUserCog />
                  {request.assignedTechnician.name}
                </div>

                <div>{request.assignedTechnician.email}</div>

              </>

            ) : (

              <span className="text-gray-500">
                Technician not assigned yet.
              </span>

            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default CustomerRequestDetails