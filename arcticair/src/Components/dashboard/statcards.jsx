import React from 'react'
import {
  FaTools,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaCogs,
} from "react-icons/fa";

const StatCards = () => {
    const stats = [
    {
      title: "Active Requests",
      value: "2",
      icon: <FaTools />,
      color: "bg-blue-500",
    },
    {
      title: "Pending Quotes",
      value: "1",
      icon: <FaFileInvoiceDollar />,
      color: "bg-orange-500",
    },
    {
      title: "Paid Invoices",
      value: "5",
      icon: <FaFileInvoice />,
      color: "bg-green-500",
    },
    {
      title: "Maintenance Plan",
      value: "Active",
      icon: <FaCogs />,
      color: "bg-purple-500",
    },
  ];
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl`}
            >
              {item.icon}
            </div>

          </div>
        </div>
      ))}

    </div>
 
  )
}

export default StatCards