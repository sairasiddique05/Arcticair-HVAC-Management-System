import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEye,
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const AssignJobs = () => {
  const [jobs, setJobs] = useState([]);

const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
  fetchJobs();
}, []);

const fetchJobs = async () => {
  try {
    const res = await API.get(`/requests/technician/${user._id}`);
    setJobs(res.data);
  } catch (error) {
    console.log(error);
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

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
   <section className="p-8">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Assigned Jobs
        </h1>

        <p className="text-gray-600 mt-2">
          View and manage all jobs assigned to you.
        </p>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Job ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Address</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Time</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>

            </thead>

            <tbody>
               {jobs.length === 0 ? (
    <tr>
      <td colSpan="8" className="text-center py-10 text-gray-500">
        No assigned jobs found.
      </td>
    </tr>
  ) : (

              jobs.map((job) => (

                <tr
                  key={job.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-5 font-semibold">
                    {job._id.slice(-6).toUpperCase()}
                  </td>

                  <td className="px-6 py-5">
                   {job.customer?.name}
                  </td>

                  <td className="px-6 py-5">
                   {job.serviceType}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaMapMarkerAlt className="text-red-500" />

                      <span>{job.address}</span>

                    </div>

                  </td>

                  <td className="px-6 py-5">
                    {new Date(job.preferredDate).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <FaClock className="text-orange-500" />

                      <span>{job.preferredTime}</span>

                    </div>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <Link
                      to={`/techdashboard/jobs/${job._id}`}
                      className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition"
                    >
                      <FaEye />
                      View
                    </Link>

                  </td>

                </tr>

              ))
  )}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  )
}

export default AssignJobs