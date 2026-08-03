import React from 'react'
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Anderson",
    location: "Dallas, TX",
    review:
      "Excellent service! The technician arrived on time, fixed our AC quickly, and explained everything clearly.",
  },
  {
    name: "Emily Carter",
    location: "Houston, TX",
    review:
      "Very professional team. Booking was simple, and the installation was completed perfectly. Highly recommended!",
  },
  {
    name: "Michael Brown",
    location: "Austin, TX",
    review:
      "Great experience from start to finish. Fast response, fair pricing, and outstanding customer support.",
  },
];

const TestiMonials = () => {
  return (
   <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-3">
            Trusted by homeowners and businesses across multiple cities.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />

              {/* Review */}
              <p className="text-gray-600 mb-6">
                "{item.review}"
              </p>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Customer */}
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestiMonials