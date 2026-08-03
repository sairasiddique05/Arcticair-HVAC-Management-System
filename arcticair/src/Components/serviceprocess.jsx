import React from 'react'
import {
  FaClipboardList,
  FaCalendarCheck,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const ServiceProcess = () => {
     const steps = [
    {
      icon: <FaClipboardList />,
      title: "Request Service",
      description:
        "Submit your HVAC service request online with your preferred date and details.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Schedule Appointment",
      description:
        "Our dispatcher reviews your request and assigns the best available technician.",
    },
    {
      icon: <FaTools />,
      title: "Service Execution",
      description:
        "Our certified technician arrives on time to inspect, repair, or install your HVAC system.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Job Completed",
      description:
        "The work is completed professionally, and you receive your service report and invoice.",
    },
  ];
  return (
  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Process
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            How Our HVAC Service Works
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We make it easy to request, schedule, and complete HVAC services
            with a simple four-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-sky-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Number */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-sky-100">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-[#0F4C81] text-white flex items-center justify-center text-3xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0F4C81]">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.description}
              </p>

              {/* Arrow (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-3xl text-orange-500">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default ServiceProcess