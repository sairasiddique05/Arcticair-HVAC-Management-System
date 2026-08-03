import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";

const ServiceReport = () => {
  const [report, setReport] = useState({
    workPerformed: "",
    partsUsed: "",
    recommendations: "",
    jobStatus: "Completed",
  });
const { jobId } = useParams();
const navigate = useNavigate();
  const handleChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await API.put(`/requests/${jobId}/report`, report);

    alert("Service Report Submitted Successfully!");

    navigate("/techdashboard/jobs");
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Something went wrong");
  }
};

  return (
 <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Service Report
        </h1>

        <p className="text-gray-600 mt-2">
          Complete the service report after finishing the HVAC job.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Work Performed */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Work Performed
            </label>

            <textarea
              name="workPerformed"
              rows="5"
              value={report.workPerformed}
              onChange={handleChange}
              placeholder="Describe the work completed..."
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Parts Used */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Parts / Materials Used
            </label>

            <textarea
              name="partsUsed"
              rows="4"
              value={report.partsUsed}
              onChange={handleChange}
              placeholder="List any parts or materials used..."
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Recommendations */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Recommendations
            </label>

            <textarea
              name="recommendations"
              rows="4"
              value={report.recommendations}
              onChange={handleChange}
              placeholder="Provide maintenance recommendations..."
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Job Status */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Job Status
            </label>

            <select
              name="jobStatus"
              value={report.jobStatus}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            >
              <option>Completed</option>
              <option>Pending</option>
              <option>In Progress</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#0F4C81] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Submit Report
            </button>
          </div>

        </form>

      </div>

    </section>
  )
}

export default ServiceReport