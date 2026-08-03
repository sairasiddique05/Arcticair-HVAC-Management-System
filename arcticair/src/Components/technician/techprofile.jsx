import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
} from "react-icons/fa";

const TechProfile = () => {
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
        <h1 className="text-3xl font-bold text-[#0F4C81]">
          My Profile
        </h1>

        <p className="text-gray-600 mt-2">
          Update your personal information and password.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-10">

          <div className="w-28 h-28 rounded-full bg-[#0F4C81] flex items-center justify-center text-white text-5xl">
            <FaUser />
          </div>

         <h2 className="text-2xl font-bold mt-4 text-[#0F4C81]">
  {profile.fullName}
</h2>

<p className="text-gray-500">
  {user?.role}
</p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaUser className="text-[#0F4C81]" />

              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />

            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaEnvelope className="text-[#0F4C81]" />

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />

            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaPhoneAlt className="text-[#0F4C81]" />

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />

            </div>
          </div>

          <hr className="my-8" />

          <h3 className="text-xl font-bold text-[#0F4C81]">
            Change Password
          </h3>

          {/* Current Password */}
          <div>
            <label className="block font-semibold mb-2">
              Current Password
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaLock className="text-[#0F4C81]" />

              <input
                type="password"
                name="currentPassword"
                value={profile.currentPassword}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />

            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block font-semibold mb-2">
              New Password
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaLock className="text-[#0F4C81]" />

              <input
                type="password"
                name="newPassword"
                value={profile.newPassword}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />

            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-semibold mb-2">
              Confirm New Password
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaLock className="text-[#0F4C81]" />

              <input
                type="password"
                name="confirmPassword"
                value={profile.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-3 outline-none"
              />

            </div>
          </div>

          {/* Button */}
          <div className="pt-4">

            <button
              type="submit"
              className="bg-[#0F4C81] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </section>
  )
}

export default TechProfile