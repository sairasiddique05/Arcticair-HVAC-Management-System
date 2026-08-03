import React from 'react'
import {
  FaClock,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const BusinessHours = () => {
     const schedule = [
    {
      day: "Monday - Friday",
      time: "8:00 AM - 6:00 PM",
    },
    {
      day: "Saturday",
      time: "9:00 AM - 4:00 PM",
    },
    {
      day: "Sunday",
      time: "Closed",
    },
  ];

  return (
   <section className="py-20 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-orange-500 uppercase font-semibold tracking-wider">
            Working Hours
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Business Hours
          </h2>

          <p className="text-gray-600 mt-4">
            Visit us during our working hours or contact us anytime for
            emergency HVAC services.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Header */}
          <div className="bg-[#0F4C81] text-white p-6 flex items-center gap-4">

            <FaClock className="text-3xl" />

            <div>
              <h3 className="text-2xl font-bold">
                Office Schedule
              </h3>

              <p className="text-sm text-gray-200">
                Our regular business hours
              </p>
            </div>

          </div>

          {/* Schedule */}
          <div className="p-8 space-y-5">

            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >

                <div className="flex items-center gap-3">

                  <FaCalendarAlt className="text-orange-500 text-xl" />

                  <span className="font-semibold text-[#0F4C81]">
                    {item.day}
                  </span>

                </div>

                <span className="text-gray-600 font-medium">
                  {item.time}
                </span>

              </div>
            ))}

          </div>

          {/* Emergency */}
          <div className="bg-orange-500 text-white p-6 flex items-center justify-between">

            <div className="flex items-center gap-4">

              <FaPhoneAlt className="text-3xl" />

              <div>

                <h3 className="text-xl font-bold">
                  24/7 Emergency Support
                </h3>

                <p className="text-sm">
                  We're available anytime for urgent HVAC emergencies.
                </p>

              </div>

            </div>

            <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Call Now
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BusinessHours