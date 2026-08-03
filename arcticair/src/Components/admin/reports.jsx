import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { FaEye } from "react-icons/fa";
import {
  FaDollarSign,
  FaClipboardCheck,
  FaUsers,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";



const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
  fetchReports();
}, []);

const fetchReports = async () => {
  try {
   const res = await API.get("/requests/reports");
    setReports(res.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
   <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Business Reports
        </h1>

        <p className="text-gray-600 mt-2">
          Overview of business performance and statistics.
        </p>

      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                $126K
              </h2>
            </div>

            <div className="w-16 h-16 rounded-xl bg-green-500 text-white flex items-center justify-center text-3xl">
              <FaDollarSign />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Completed Jobs</p>
              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                486
              </h2>
            </div>

            <div className="w-16 h-16 rounded-xl bg-blue-500 text-white flex items-center justify-center text-3xl">
              <FaClipboardCheck />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Customers</p>
              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                248
              </h2>
            </div>

            <div className="w-16 h-16 rounded-xl bg-orange-500 text-white flex items-center justify-center text-3xl">
              <FaUsers />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Technicians</p>
              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                18
              </h2>
            </div>

            <div className="w-16 h-16 rounded-xl bg-purple-500 text-white flex items-center justify-center text-3xl">
              <FaUserCog />
            </div>
          </div>
        </div>

      </div>

      {/* Monthly Report Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-[#0F4C81]">
            Monthly Performance
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Month</th>
                <th className="px-6 py-4 text-left">Revenue</th>
                <th className="px-6 py-4 text-left">Completed Jobs</th>
                <th className="px-6 py-4 text-left">New Customers</th>
              </tr>

            </thead>

            <tbody>
  {reports.length === 0 ? (
    <tr>
      <td colSpan="7" className="text-center py-10 text-gray-500">
        No reports submitted.
      </td>
    </tr>
  ) : (
    reports.map((report) => (
      <tr
        key={report._id}
        className="border-b hover:bg-slate-50"
      >
        <td className="px-6 py-5">
          {report._id.slice(-6).toUpperCase()}
        </td>

        <td className="px-6 py-5">
          {report.request?.customer?.name}
        </td>

        <td className="px-6 py-5">
          {report.technician?.name}
        </td>

        <td className="px-6 py-5">
          {report.request?.serviceType}
        </td>

        <td className="px-6 py-5">
          {report.jobStatus}
        </td>

        <td className="px-6 py-5">
          {new Date(report.createdAt).toLocaleDateString()}
        </td>

        <td className="px-6 py-5 text-center">
          <Link
  to={`/admindashboard/reports/${report._id}`}
  className="bg-[#0F4C81] hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2"
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

export default Reports