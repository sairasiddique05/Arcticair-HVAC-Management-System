import React from 'react'
import companyImage from '../assets/companyintro.png'

const CompanyIntro = () => {
  return (
<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src={companyImage}
            alt="ArcticAir HVAC Team"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div>

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Trusted HVAC Experts Delivering Comfort Every Season
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            ArcticAir HVAC Solutions is a trusted provider of residential and
            commercial heating, ventilation, and air conditioning services.
            With years of industry experience and certified technicians, we
            specialize in HVAC installation, AC repair, heating repair, duct
            cleaning, thermostat installation, emergency services, and annual
            maintenance plans.
          </p>

          <p className="text-gray-600 mt-5 leading-8">
            Our goal is to provide reliable, energy-efficient, and affordable
            HVAC solutions while delivering exceptional customer service. We
            combine skilled professionals, modern equipment, and innovative
            technology to ensure every customer enjoys a comfortable and safe
            indoor environment.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#0F4C81]">10+</h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#0F4C81]">5000+</h3>
              <p className="text-gray-600 mt-2">
                Happy Customers
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#0F4C81]">35+</h3>
              <p className="text-gray-600 mt-2">
                Expert Technicians
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#0F4C81]">24/7</h3>
              <p className="text-gray-600 mt-2">
                Emergency Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CompanyIntro