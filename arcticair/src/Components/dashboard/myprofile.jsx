import React from 'react'
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLock,
  FaCamera,
} from "react-icons/fa";

const MyProfile = () => {
   const user = JSON.parse(localStorage.getItem("user"));

const [profile, setProfile] = useState({
  fullName: user?.name || "",
  email: user?.email || "",
  phone: user?.phone || "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile Updated Successfully!");
  };

  return (
     <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#0F4C81]">
          My Profile
        </h1>

        <p className="text-gray-600 mt-2">
          Manage your personal information and account settings.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Profile Header */}

        <div className="bg-[#0F4C81] py-10 flex flex-col items-center text-white">

          <div className="relative">

            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">

              <FaUser className="text-6xl text-[#0F4C81]" />

            </div>

            <button className="absolute bottom-0 right-0 bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition">

              <FaCamera />

            </button>

          </div>

          <h2 className="text-3xl font-bold mt-5">
            {profile.fullName}
          </h2>

          <p className="text-blue-100">
            Customer
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-10 grid md:grid-cols-2 gap-6"
        >

          {/* Full Name */}

          <div className="flex items-center border rounded-xl px-4">

            <FaUser className="text-[#0F4C81]" />

            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Email */}

          <div className="flex items-center border rounded-xl px-4">

            <FaEnvelope className="text-[#0F4C81]" />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Phone */}

          <div className="flex items-center border rounded-xl px-4">

            <FaPhoneAlt className="text-[#0F4C81]" />

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Address */}

          <div className="flex items-center border rounded-xl px-4">

            <FaMapMarkerAlt className="text-[#0F4C81]" />

            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Password */}

          <div className="flex items-center border rounded-xl px-4">

            <FaLock className="text-[#0F4C81]" />

            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={profile.password}
              onChange={handleChange}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Confirm Password */}

          <div className="flex items-center border rounded-xl px-4">

            <FaLock className="text-[#0F4C81]" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={profile.confirmPassword}
              onChange={handleChange}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Button */}

          <div className="md:col-span-2">

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-4 rounded-xl transition"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </section>
  )
}

export default MyProfile