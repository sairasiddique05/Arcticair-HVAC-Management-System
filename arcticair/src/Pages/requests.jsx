import React, { useState } from "react";
import API from "../api/axios";
import {
  FaSnowflake,
  FaTools,
  FaFire,
  FaWind,
  FaThermometerHalf,
  FaClipboardCheck,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaCalendar, FaClock, FaUpload } from 'react-icons/fa6';

const RequestS = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    propertyType: "",
    address: "",
    description: "",
    isEmergency: false,
    images: [],
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/requests", {
        customer: user._id,
        ...formData,
      });

      alert("Service Request Submitted Successfully!");

      // Reset Form
      setFormData({
        serviceType: "",
        preferredDate: "",
        preferredTime: "",
        propertyType: "",
        address: "",
        description: "",
        isEmergency: false,
        images: [],
      });

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 py-12 px-6">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-3">

      {/* Left Side Form */}
      <div className="lg:col-span-2 p-8">

        <h1 className="text-4xl font-bold text-[#0F4C81]">
          Request HVAC Service
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Fill out the form below and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Service Type */}
          <div>
            <label className="font-semibold text-gray-700">
              Service Type
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FaTools className="text-[#0F4C81]" />

              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full p-3 outline-none"
              >
                <option value="">Select Service</option>
                <option>HVAC Installation</option>
                <option>AC Repair</option>
                <option>Heating Repair</option>
                <option>Duct Cleaning</option>
                <option>Thermostat Installation</option>
                <option>Maintenance Plan</option>
                <option>Emergency Service</option>
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="font-semibold text-gray-700">
                Preferred Date
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">
                <FaCalendar className="text-[#0F4C81]" />

                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                Preferred Time
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">
                <FaClock className="text-[#0F4C81]" />

                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

          </div>

          {/* Property Type */}
          <div>
            <label className="font-semibold text-gray-700">
              Property Type
            </label>

            <div className="flex gap-8 mt-3">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Residential"
                  checked={formData.propertyType === "Residential"}
                  onChange={handleChange}
                />
                Residential
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value="Commercial"
                  checked={formData.propertyType === "Commercial"}
                  onChange={handleChange}
                />
                Commercial
              </label>

            </div>
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold text-gray-700">
              Service Address
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FaMapMarkerAlt className="text-[#0F4C81]" />

              <input
                type="text"
                name="address"
                placeholder="Enter Service Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold text-gray-700">
              Describe Your Problem
            </label>

            <textarea
              rows="5"
              name="description"
              placeholder="Describe your HVAC issue..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg mt-2 p-4 outline-none resize-none"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="font-semibold text-gray-700">
              Upload Images
            </label>

            <div className="border-2 border-dashed rounded-xl mt-2 p-6 text-center">

              <FaUpload className="mx-auto text-3xl text-[#0F4C81]" />

              <p className="mt-3 text-gray-500">
                Click to upload images
              </p>

              <input
                type="file"
                multiple
                className="mt-4"
              />
            </div>
          </div>

          {/* Emergency */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isEmergency"
              checked={formData.isEmergency}
              onChange={handleChange}
              className="w-5 h-5 accent-red-600"
            />

            <span className="font-medium text-red-600">
              This is an Emergency Service
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-xl transition"
          >
            Submit Request
          </button>

        </form>

      </div>

      {/* Right Side */}
      <div className="bg-[#0F4C81] text-white p-8 flex flex-col justify-center">

        <h2 className="text-3xl font-bold text-center">
          Need Emergency Help?
        </h2>

        <p className="text-center mt-4 text-blue-100">
          Our certified HVAC technicians are available 24/7 to handle emergency heating and cooling issues.
        </p>

        <div className="mt-8 space-y-4">
          <div className="bg-white/10 rounded-lg p-4">
            ✔ Licensed Technicians
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            ✔ Same-Day Service
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            ✔ Fast Response Time
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            ✔ Customer Satisfaction
          </div>
        </div>

      </div>

    </div>
  </div>

  )
}

export default RequestS