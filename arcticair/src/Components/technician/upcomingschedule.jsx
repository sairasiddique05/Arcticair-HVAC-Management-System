import React from 'react'
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTools,
} from "react-icons/fa";

const schedules = [
  {
    id: "#SCH001",
    customer: "Emily Davis",
    service: "AC Maintenance",
    date: "03 Aug 2026",
    time: "09:00 AM",
  },
  {
    id: "#SCH002",
    customer: "David Wilson",
    service: "Heating Inspection",
    date: "03 Aug 2026",
    time: "01:30 PM",
  },
  {
    id: "#SCH003",
    customer: "Sophia Brown",
    service: "HVAC Installation",
    date: "04 Aug 2026",
    time: "11:00 AM",
  },
];


const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Upcoming Schedule
        </h2>

        <button className="text-orange-500 hover:text-orange-600 font-semibold">
          View Calendar
        </button>

      </div>

      <div className="space-y-5">

        {schedules.map((schedule) => (

          <div
            key={schedule.id}
            className="border rounded-xl p-5 hover:shadow-md transition"
          >

            <div className="flex items-center gap-3 mb-3">

              <FaTools className="text-orange-500 text-xl" />

              <h3 className="font-semibold text-[#0F4C81]">
                {schedule.service}
              </h3>

            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-2">

              <FaUser className="text-[#0F4C81]" />

              <span>{schedule.customer}</span>

            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-2">

              <FaCalendarAlt className="text-green-500" />

              <span>{schedule.date}</span>

            </div>

            <div className="flex items-center gap-2 text-gray-600">

              <FaClock className="text-orange-500" />

              <span>{schedule.time}</span>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default UpcomingSchedule