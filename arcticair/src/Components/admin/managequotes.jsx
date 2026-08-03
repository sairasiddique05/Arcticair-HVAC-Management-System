import React from 'react'
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const quotes = [
  {
    id: "QT-1001",
    customer: "John Smith",
    service: "AC Installation",
    amount: "$2,500",
    date: "02 Aug 2026",
    status: "Pending",
  },
  {
    id: "QT-1002",
    customer: "Sarah Johnson",
    service: "Heating Repair",
    amount: "$450",
    date: "03 Aug 2026",
    status: "Approved",
  },
  {
    id: "QT-1003",
    customer: "Michael Brown",
    service: "HVAC Maintenance",
    amount: "$180",
    date: "03 Aug 2026",
    status: "Rejected",
  },
  {
    id: "QT-1004",
    customer: "Emily Davis",
    service: "Duct Cleaning",
    amount: "$300",
    date: "04 Aug 2026",
    status: "Pending",
  },
];

const ManageQuotes = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Approved":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <section className="p-8">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Manage Quotes
        </h1>

        <p className="text-gray-600 mt-2">
          Review, approve, reject, or edit customer quotes.
        </p>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search quote..."
            className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Quote ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {quotes.map((quote) => (

                <tr
                  key={quote.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="px-6 py-5 font-semibold">
                    {quote.id}
                  </td>

                  <td className="px-6 py-5">
                    {quote.customer}
                  </td>

                  <td className="px-6 py-5">
                    {quote.service}
                  </td>

                  <td className="px-6 py-5 font-semibold text-green-600">
                    {quote.amount}
                  </td>

                  <td className="px-6 py-5">
                    {quote.date}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                        quote.status
                      )}`}
                    >
                      {quote.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      {/* View */}
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                        <FaEye />
                      </button>

                      {/* Edit */}
                      <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg">
                        <FaEdit />
                      </button>

                      {/* Approve */}
                      <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg">
                        <FaCheck />
                      </button>

                      {/* Reject */}
                      <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
                        <FaTimes />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  )
}

export default ManageQuotes