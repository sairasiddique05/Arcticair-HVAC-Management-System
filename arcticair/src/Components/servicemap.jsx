import React from 'react'

const ServiceMap = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Our Service Coverage
          </h2>

          <p className="text-gray-600 mt-4">
            We proudly provide HVAC services across multiple cities and surrounding communities.
          </p>

        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">

          <iframe
            title="Service Area Map"
            src="https://maps.google.com/maps?q=United%20States&t=&z=4&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  )
}

export default ServiceMap