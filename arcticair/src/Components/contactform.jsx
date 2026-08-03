import React, { useState } from 'react'
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

const ContactForm = () => {
    const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);

    alert("Message Sent Successfully!");
  };

  return (
     <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-orange-500 uppercase font-semibold tracking-wider">
            Contact Form
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Send Us a Message
          </h2>

          <p className="text-gray-600 mt-4">
            Fill out the form below and one of our HVAC experts will
            contact you shortly.
          </p>

        </div>

        {/* Form Card */}
        <div className="bg-slate-100 rounded-2xl shadow-xl p-8">

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            {/* Name */}
            <div className="flex items-center bg-white border rounded-xl px-4">
              <FaUser className="text-[#0F4C81]" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={contact.name}
                onChange={handleChange}
                className="w-full p-4 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-white border rounded-xl px-4">
              <FaEnvelope className="text-[#0F4C81]" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={contact.email}
                onChange={handleChange}
                className="w-full p-4 outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center bg-white border rounded-xl px-4">
              <FaPhoneAlt className="text-[#0F4C81]" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={contact.phone}
                onChange={handleChange}
                className="w-full p-4 outline-none"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center bg-white border rounded-xl px-4">
              <FaTag className="text-[#0F4C81]" />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={contact.subject}
                onChange={handleChange}
                className="w-full p-4 outline-none"
                required
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">

              <div className="flex items-start bg-white border rounded-xl px-4">

                <FaCommentDots className="text-[#0F4C81] mt-5" />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={contact.message}
                  onChange={handleChange}
                  className="w-full p-4 outline-none resize-none"
                  required
                ></textarea>

              </div>

            </div>

            {/* Button */}
            <div className="md:col-span-2">

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-4 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  )
}

export default ContactForm