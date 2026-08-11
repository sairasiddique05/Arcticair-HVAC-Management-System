import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  FaDollarSign,
  FaClipboardCheck,
  FaUsers,
  FaUserCog,
} from "react-icons/fa";

const Reports = () => {
  const [summary, setSummary] = useState({
    totalRevenue: 0,
    completedJobs: 0,
    customers: 0,
    technicians: 0,
  });

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await API.get("/reports/monthly");

      setSummary(res.data.summary);
      setReports(res.data.monthlyReports);

    } catch (error) {
      console.log("Failed to fetch reports:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="p-8 bg-slate-100 min-h-screen">
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-lg">
            Loading reports...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Business Reports
        </h1>

        <p className="text-gray-600 mt-2">
          Overview of business performance and monthly statistics.
        </p>

      </div>


      {/* Summary Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {/* Revenue */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Total Revenue
              </p>

              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                ${summary.totalRevenue.toLocaleString()}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-xl bg-green-500 text-white flex items-center justify-center text-3xl">
              <FaDollarSign />
            </div>

          </div>

        </div>


        {/* Completed Jobs */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Completed Jobs
              </p>

              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                {summary.completedJobs}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-xl bg-blue-500 text-white flex items-center justify-center text-3xl">
              <FaClipboardCheck />
            </div>

          </div>

        </div>


        {/* Customers */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Customers
              </p>

              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                {summary.customers}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-xl bg-orange-500 text-white flex items-center justify-center text-3xl">
              <FaUsers />
            </div>

          </div>

        </div>


        {/* Technicians */}

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                Technicians
              </p>

              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                {summary.technicians}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-xl bg-purple-500 text-white flex items-center justify-center text-3xl">
              <FaUserCog />
            </div>

          </div>

        </div>

      </div>


      {/* Monthly Performance */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold text-[#0F4C81]">
            Monthly Performance
          </h2>

          <p className="text-gray-500 mt-1">
            Revenue, completed jobs and new customers by month.
          </p>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Month
                </th>

                <th className="px-6 py-4 text-left">
                  Revenue
                </th>

                <th className="px-6 py-4 text-left">
                  Completed Jobs
                </th>

                <th className="px-6 py-4 text-left">
                  New Customers
                </th>

              </tr>

            </thead>


            <tbody>

              {reports.length === 0 ? (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center py-10 text-gray-500"
                  >
                    No monthly data available.
                  </td>

                </tr>

              ) : (

                reports.map((report) => (

                  <tr
                    key={report._id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="px-6 py-5 font-semibold text-[#0F4C81]">
                      {report.month}
                    </td>

                    <td className="px-6 py-5 font-semibold text-green-600">
                      ${report.revenue.toLocaleString()}
                    </td>

                    <td className="px-6 py-5">
                      {report.completedJobs}
                    </td>

                    <td className="px-6 py-5">
                      {report.newCustomers}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
};

export default Reports;