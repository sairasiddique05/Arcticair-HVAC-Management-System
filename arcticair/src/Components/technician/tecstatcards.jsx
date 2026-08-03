import React from 'react'
import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaStar,
} from "react-icons/fa";

const TechstatCards = () => {
     const stats = [
    {
      title: "Today's Jobs",
      value: "5",
      icon: <FaClipboardList />,
      color: "bg-blue-500",
    },
    {
      title: "Completed Jobs",
      value: "42",
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      title: "Pending Jobs",
      value: "3",
      icon: <FaClock />,
      color: "bg-orange-500",
    },
    {
      title: "Average Rating",
      value: "4.9 ★",
      icon: <FaStar />,
      color: "bg-purple-500",
    },
  ];

  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
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

export default TechstatCards