import React from 'react'
import { FaDownload, FaCreditCard } from "react-icons/fa";

const invoices = [
  {
    id: "#INV001",
    service: "AC Repair",
    amount: "$250",
    date: "05 Aug 2026",
    status: "Paid",
  },
  {
    id: "#INV002",
    service: "HVAC Installation",
    amount: "$4,800",
    date: "28 Jul 2026",
    status: "Unpaid",
  },
  {
    id: "#INV003",
    service: "Heating Repair",
    amount: "$650",
    date: "20 Jul 2026",
    status: "Paid",
  },
];

const MyInvoice = () => {
     const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Unpaid":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0F4C81]">
          My Invoices
        </h1>

        <p className="text-gray-600 mt-2">
          View, download, and manage your service invoices.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Invoice ID</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Date</th>
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
                    {invoice.service}
                  </td>

                  <td className="px-6 py-5 font-semibold text-[#0F4C81]">
                    {invoice.amount}
                  </td>

                  <td className="px-6 py-5">
                    {invoice.date}
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

                      <button className="bg-[#0F4C81] hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
                        <FaDownload />
                        PDF
                      </button>

                      {invoice.status === "Unpaid" && (
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
                          <FaCreditCard />
                          Pay Now
                        </button>
                      )}

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

export default MyInvoice