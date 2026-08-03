import React from 'react'
import {
  FaUsers,
  FaUserCog,
  FaClipboardList,
  FaDollarSign,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Customers",
    value: "248",
    icon: <FaUsers />,
    color: "bg-blue-500",
  },
  {
    title: "Active Technicians",
    value: "18",
    icon: <FaUserCog />,
    color: "bg-green-500",
  },
  {
    title: "Service Requests",
    value: "64",
    icon: <FaClipboardList />,
    color: "bg-orange-500",
  },
  {
    title: "Total Revenue",
    value: "$126K",
    icon: <FaDollarSign />,
    color: "bg-purple-500",
  },
];

const AdminstatCards = () => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >

          <div className="flex justify-between items-center">

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

export default AdminstatCards