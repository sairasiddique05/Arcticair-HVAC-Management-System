import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";

const PlanCompare = () => {
    const features = [
    {
      feature: "Annual HVAC Inspection",
      basic: "1 Visit",
      standard: "2 Visits",
      premium: "4 Visits",
    },
    {
      feature: "Priority Scheduling",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      feature: "Emergency Service",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Repair Discount",
      basic: "5%",
      standard: "15%",
      premium: "25%",
    },
    {
      feature: "Filter Replacement",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Thermostat Calibration",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Complete System Cleaning",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      feature: "Maintenance Report",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Dedicated Account Manager",
      basic: false,
      standard: false,
      premium: true,
    },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return <FaCheck className="mx-auto text-green-600 text-lg" />;
    }

    if (value === false) {
      return <FaTimes className="mx-auto text-red-500 text-lg" />;
    }

    return value;
  };

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Compare Plans
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Find the Right Plan for You
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Compare our maintenance plans and choose the one that best fits
            your heating and cooling needs.
          </p>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-2xl shadow-lg">

          <table className="w-full min-w-[900px]">

            <thead className="bg-[#0F4C81] text-white">

              <tr>

                <th className="text-left px-6 py-5 text-lg">
                  Features
                </th>

                <th className="px-6 py-5 text-lg">
                  Basic
                </th>

                <th className="px-6 py-5 bg-orange-500 text-lg">
                  Standard
                </th>

                <th className="px-6 py-5 text-lg">
                  Premium
                </th>

              </tr>

            </thead>

            <tbody>

              {features.map((item, index) => (

                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-sky-50" : "bg-white"
                  }`}
                >

                  <td className="text-left px-6 py-5 font-medium">
                    {item.feature}
                  </td>

                  <td className="py-5">
                    {renderValue(item.basic)}
                  </td>

                  <td className="py-5 bg-orange-50 font-semibold">
                    {renderValue(item.standard)}
                  </td>

                  <td className="py-5">
                    {renderValue(item.premium)}
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

export default PlanCompare