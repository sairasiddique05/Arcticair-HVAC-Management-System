import React from 'react'
import {
  FaSnowflake,
  FaFire,
  FaTools,
  FaBolt,
  FaFan,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    id: "repair",
    title: "AC Repair",
    description: "Fast diagnosis and repair for your AC system.",
    icon: <FaTools size={35} />,
  },
  {
    id: "installation",
    title: "Installation",
    description: "Install a brand-new HVAC system.",
    icon: <FaSnowflake size={35} />,
  },
  {
    id: "heating",
    title: "Heating Repair",
    description: "Professional furnace and heating repairs.",
    icon: <FaFire size={35} />,
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description: "Keep your HVAC system running efficiently.",
    icon: <FaFan size={35} />,
  },
  {
    id: "emergency",
    title: "Emergency Service",
    description: "24/7 emergency HVAC support.",
    icon: <FaBolt size={35} />,
  },
];

const selectService = ({ bookingData, setBookingData, nextStep }) => {
  return (
    <div className="mt-8">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-800">
          Select Your Service
        </h2>

        <p className="text-gray-500 mt-3 text-lg">
          Choose the service you need to continue your booking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service) => {

          const selected = bookingData.service === service.id;

          return (

            <div
              key={service.id}
              onClick={() =>
                setBookingData({
                  ...bookingData,
                  service: service.id,
                })
              }
              className={`relative cursor-pointer rounded-2xl border-2 p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl

              ${
                selected
                  ? "border-sky-600 bg-sky-50 shadow-xl"
                  : "border-gray-200 bg-white hover:border-sky-500"
              }
              `}
            >

              {/* Check Icon */}
              {selected && (
                <FaCheckCircle
                  className="absolute top-5 right-5 text-sky-600"
                  size={24}
                />
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition

                ${
                  selected
                    ? "bg-sky-600 text-white"
                    : "bg-sky-100 text-sky-600"
                }
                `}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                {service.description}
              </p>

            </div>

          );
        })}

      </div>

      {/* Buttons */}

      <div className="flex justify-end mt-12">

        <button
          onClick={nextStep}
          disabled={!bookingData.service}
          className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300

          ${
            bookingData.service
              ? "bg-sky-600 hover:bg-sky-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }

          `}
        >
          Continue →
        </button>

      </div>

    </div>
  )
}

export default selectService