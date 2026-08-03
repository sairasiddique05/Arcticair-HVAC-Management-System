import React from 'react'
import {
  FaSearch,
  FaEye,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

const invoices = [
  {
    id: "INV-1001",
    customer: "John Smith",
    amount: "$2,500",
    dueDate: "05 Aug 2026",
    status: "Paid",
  },
  {
    id: "INV-1002",
    customer: "Sarah Johnson",
    amount: "$450",
    dueDate: "08 Aug 2026",
    status: "Pending",
  },
  {
    id: "INV-1003",
    customer: "Michael Brown",
    amount: "$180",
    dueDate: "10 Aug 2026",
    status: "Paid",
  },
  {
    id: "INV-1004",
    customer: "Emily Davis",
    amount: "$300",
    dueDate: "12 Aug 2026",
    status: "Pending",
  },
];

const ManageInvoice = () => {
    const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
   <section className="p-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#0F4C81]">
            Manage Invoices
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage all customer invoices.
          </p>
        </div>

        <button className="bg-[#0F4C81] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition">
          + Create Invoice
        </button>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search invoice..."
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
                <th className="px-6 py-4 text-left">Invoice ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Due Date</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {invoices.map((invoice) => (

                <tr
                  key={invoice.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-5 font-semibold">
                    {invoice.id}
                  </td>

                  <td className="px-6 py-5">
                    {invoice.customer}
                  </td>

                  <td className="px-6 py-5 font-semibold text-green-600">
                    {invoice.amount}
                  </td>

                  <td className="px-6 py-5">
                    {invoice.dueDate}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {invoice.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      {/* View */}
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                        <FaEye />
                      </button>

                      {/* Download */}
                      <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg">
                        <FaDownload />
                      </button>

                      {/* Mark Paid */}
                      <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg">
                        <FaCheckCircle />
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

export default ManageInvoice