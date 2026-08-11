import React, { useState } from "react";
import API from "../api/axios";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaCalendarAlt,
  FaRulerCombined,
  FaTools,
  FaUpload,
} from "react-icons/fa";


const QuoteForm = () => {
     const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    address: "",
    preferredDate: "",
    propertySize: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const quoteData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      propertyType: formData.propertyType,
      address: formData.address,
      preferredDate: formData.preferredDate,
      propertySize: formData.propertySize,
      description: formData.description,
    };

    await API.post("/quotes", quoteData);

    alert("Quote request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      propertyType: "",
      address: "",
      preferredDate: "",
      propertySize: "",
      description: "",
      image: null,
    });

  } catch (error) {
    console.log("Quote submission error:", error);
    console.log("Backend response:", error.response?.data);

    alert(
      error.response?.data?.message ||
      "Something went wrong!"
    );
  }
};

  return (
  <section className="py-20 bg-slate-100">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0F4C81]">
            Request Your Free Quote
          </h2>

          <p className="text-gray-600 mt-4">
            Complete the form below and we'll contact you with a customized HVAC quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Personal Information */}

          <div>

            <h3 className="text-2xl font-semibold text-[#0F4C81] mb-5">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-center border rounded-xl px-4">
                <FaUser className="text-[#0F4C81]" />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-4 outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4">
                <FaEnvelope className="text-[#0F4C81]" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4">
                <FaPhoneAlt className="text-[#0F4C81]" />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4">
                <FaTools className="text-[#0F4C81]" />

                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full p-4 outline-none bg-transparent"
                  required
                >
                  <option value="">Select Service</option>
                  <option>HVAC Installation</option>
                  <option>AC Repair</option>
                  <option>Heating Repair</option>
                  <option>Duct Cleaning</option>
                  <option>Thermostat Installation</option>
                  <option>Maintenance Plan</option>
                </select>
              </div>

            </div>

          </div>

          {/* Property Information */}

          <div>

            <h3 className="text-2xl font-semibold text-[#0F4C81] mb-5">
              Property Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex items-center border rounded-xl px-4">
                <FaHome className="text-[#0F4C81]" />

                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full p-4 outline-none bg-transparent"
                  required
                >
                  <option value="">Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>

              <div className="flex items-center border rounded-xl px-4">
                <FaCalendarAlt className="text-[#0F4C81]" />

                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full p-4 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-xl px-4 md:col-span-2">
                <FaMapMarkerAlt className="text-[#0F4C81]" />

                <input
                  type="text"
                  name="address"
                  placeholder="Property Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-4 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-xl px-4">
                <FaRulerCombined className="text-[#0F4C81]" />

                <input
                  type="text"
                  name="propertySize"
                  placeholder="Property Size (sq ft)"
                  value={formData.propertySize}
                  onChange={handleChange}
                  className="w-full p-4 outline-none"
                />
              </div>

            </div>

          </div>

          {/* Description */}

          <div>

            <h3 className="text-2xl font-semibold text-[#0F4C81] mb-5">
              Additional Details
            </h3>

            <textarea
              name="description"
              rows="5"
              placeholder="Describe your HVAC requirements..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none"
            ></textarea>

          </div>

          {/* Upload */}

          <div>

            <label className="font-semibold text-[#0F4C81] flex items-center gap-3 mb-3">
              <FaUpload />
              Upload Property Images
            </label>

            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold py-4 rounded-xl transition"
          >
            Submit Quote Request
          </button>

        </form>

      </div>
    </section>
  )
}

export default QuoteForm