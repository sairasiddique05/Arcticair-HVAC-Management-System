import React from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
} from "react-icons/fa";

const ContactInfo = () => {
     const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Office",
      info: "123 Arctic Avenue, New York, NY 10001",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      info: "+1 (800) 123-4567",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      info: "support@arcticair.com",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Emergency",
      info: "Emergency HVAC Support Available",
    },
  ];
  return (
   <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase font-semibold tracking-wider">
            Get In Touch
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Contact Information
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We're here to answer your questions and provide fast,
            reliable HVAC support whenever you need it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#0F4C81] text-white flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0F4C81] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.info}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ContactInfo