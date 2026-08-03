import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const PricingPlan = () => {
    const plans = [
    {
      name: "Basic Plan",
      price: "$149",
      duration: "/year",
      popular: false,
      features: [
        "1 Annual HVAC Inspection",
        "Priority Scheduling",
        "Filter Replacement",
        "System Performance Check",
        "Email Support",
      ],
    },
    {
      name: "Standard Plan",
      price: "$249",
      duration: "/year",
      popular: true,
      features: [
        "2 Annual HVAC Inspections",
        "Priority Scheduling",
        "15% Repair Discount",
        "Thermostat Calibration",
        "Emergency Support",
        "Maintenance Reports",
      ],
    },
    {
      name: "Premium Plan",
      price: "$399",
      duration: "/year",
      popular: false,
      features: [
        "4 Annual HVAC Inspections",
        "24/7 Priority Service",
        "25% Repair Discount",
        "Free Filter Replacement",
        "Complete System Cleaning",
        "Dedicated Account Manager",
      ],
    },
  ];
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Pricing Plans
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Choose the Perfect Maintenance Plan
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Select a maintenance plan that fits your home or business and
            enjoy year-round comfort with priority support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl shadow-xl overflow-hidden transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                plan.popular
                  ? "bg-[#0F4C81] text-white scale-105"
                  : "bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">

                <h3
                  className={`text-3xl font-bold ${
                    plan.popular ? "text-white" : "text-[#0F4C81]"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-6">

                  <span className="text-5xl font-bold">
                    {plan.price}
                  </span>

                  <span
                    className={`text-lg ${
                      plan.popular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.duration}
                  </span>

                </div>

                <hr
                  className={`my-8 ${
                    plan.popular
                      ? "border-gray-500"
                      : "border-gray-200"
                  }`}
                />

                <div className="space-y-4">

                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-green-400 text-lg" />

                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                <button
                  className={`w-full mt-10 py-4 rounded-xl font-semibold text-lg transition ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-[#0F4C81] hover:bg-[#08365d] text-white"
                  }`}
                >
                  Choose Plan
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default PricingPlan