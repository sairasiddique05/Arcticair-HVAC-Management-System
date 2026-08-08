import React from 'react'
import {
  FaSnowflake,
  FaTools,
  FaFire,
  FaWind,
  FaTemperatureHigh,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import installation from '../assets/installation.png'
import acRepair from '../assets/acrepair.png'
import heating from '../assets/heat.png'
import duct from '../assets/duct.png'
import thermostat from '../assets/thormas.png'
import maintenance from '../assets/plan.png'
const ServiceGrid = () => {
     const services = [
    {
      title: "HVAC Installation",
      image: installation,
      icon: <FaSnowflake />,
      description:
        "Professional installation of energy-efficient heating and cooling systems.",
      features: [
        "Residential & Commercial",
        "Energy Efficient Systems",
        "Certified Installation",
      ],
    },
    {
      title: "AC Repair",
      image: acRepair,
      icon: <FaTools />,
      description:
        "Fast and reliable air conditioning repair to restore comfort.",
      features: [
        "Same-Day Service",
        "24/7 Emergency Repair",
        "Affordable Pricing",
      ],
    },
    {
      title: "Heating Repair",
      image: heating,
      icon: <FaFire />,
      description:
        "Keep your heating system running safely and efficiently all winter.",
      features: [
        "Furnace Repair",
        "Boiler Service",
        "Heat Pump Repair",
      ],
    },
    {
      title: "Duct Cleaning",
      image: duct,
      icon: <FaWind />,
      description:
        "Improve indoor air quality with professional duct cleaning services.",
      features: [
        "Remove Dust & Allergens",
        "Better Airflow",
        "Cleaner Home",
      ],
    },
    {
      title: "Thermostat Installation",
      image: thermostat,
      icon: <FaTemperatureHigh />,
      description:
        "Upgrade to smart thermostats for greater comfort and energy savings.",
      features: [
        "Smart Thermostats",
        "Wi-Fi Setup",
        "Energy Saving",
      ],
    },
    {
      title: "Maintenance Plans",
      image: maintenance,
      icon: <FaClipboardCheck />,
      description:
        "Annual maintenance plans to keep your HVAC system in peak condition.",
      features: [
        "Routine Inspections",
        "Priority Scheduling",
        "Lower Repair Costs",
      ],
    },
  ];
  return (
      <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Our HVAC Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide complete heating, cooling, repair, installation,
            and maintenance solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-[#0F4C81] text-xl">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F4C81]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-7 mb-5">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">

                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">

                      <FaCheckCircle className="text-green-500" />

                      <span className="text-gray-700">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                <Link
                  to="/login"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
                >
                  Request Service
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default ServiceGrid