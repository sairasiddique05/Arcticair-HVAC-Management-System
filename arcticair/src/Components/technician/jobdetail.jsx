import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTools,
  FaCalendarAlt,
  FaClock,
  FaPlay,
  FaCamera,
  FaClipboardCheck,
} from "react-icons/fa";

import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
      const { jobId } = useParams();
const [job, setJob] = useState(null);
useEffect(() => {
  fetchJob();
}, []);

const fetchJob = async () => {
  try {
    const res = await API.get(`/requests/${jobId}`);
    setJob(res.data);
  } catch (error) {
    console.log(error);
  }
};
const handleStartJob = async () => {
  try {
    await API.put(`/requests/${job._id}/start`);

    alert("Job Started Successfully!");

    // Refresh Job Details
    fetchJob();

  } catch (error) {
    console.log(error);
    alert("Failed to start job");
  }
};

if (!job) {
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

// console.log(job);

  return (
  
    <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Job Details
        </h1>

        <p className="text-gray-600 mt-2">
          Review customer information before starting the job.
        </p>

      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8">

        {/* Job ID & Status */}
        <div className="flex justify-between items-center border-b pb-6 mb-8">

          <div>

            <h2 className="text-2xl font-bold text-[#0F4C81]">
            {job._id.slice(-6).toUpperCase()}
            </h2>

            <p className="text-gray-500">
              HVAC Service Request
            </p>

          </div>

         <span
  className={`px-5 py-2 rounded-full font-semibold ${getStatusColor(job.status)}`}
>
  {job.status}
</span>

        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaUser className="text-[#0F4C81]" />
              <span>{job.customer?.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" />
              <span>{job.customer?.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>{job.address}</span>
            </div>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <FaTools className="text-orange-500" />
              <span>{job.serviceType}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-blue-600" />
              <span>{new Date(job.preferredDate).toLocaleDateString()}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-purple-600" />
              <span>{job.preferredTime}</span>
            </div>

          </div>

        </div>

        {/* Description */}
        <div className="mt-10">

          <h3 className="text-xl font-bold text-[#0F4C81] mb-3">
            Problem Description
          </h3>

      <div className="bg-slate-100 rounded-xl p-5 text-gray-700 text-lg leading-7">
  {job.description || "No description provided."}
</div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

         <button
  onClick={handleStartJob}
  disabled={job.status === "In Progress"}
  className={`flex items-center gap-2 text-white px-6 py-3 rounded-xl transition ${
    job.status === "In Progress"
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-green-600 hover:bg-green-700"
  }`}
>
  <FaPlay />

  {job.status === "In Progress" ? "Job Started" : "Start Job"}
</button>

          <Link
            to="/techdashboard/photos"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl transition"
          >

            <FaCamera />

            Upload Photos

          </Link>

         <Link
  to={`/techdashboard/report/${job._id}`}
  className="flex items-center gap-2 bg-[#0F4C81] hover:bg-blue-900 text-white px-6 py-3 rounded-xl transition"
>
  <FaClipboardCheck />
  Service Report
</Link>

        </div>

      </div>

    </section>
  )
}

export default JobDetails