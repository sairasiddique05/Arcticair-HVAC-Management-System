import React, { useState } from 'react'

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: "ArcticAir HVAC Solutions",
    email: "info@arcticair.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, USA",
    businessHours: "Mon - Sat | 8:00 AM - 6:00 PM",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Settings Updated Successfully!");
  };
  return (
   <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          System Settings
        </h1>

        <p className="text-gray-600 mt-2">
          Update company information and administrator credentials.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Company Name */}
          <div>
            <label className="block font-semibold mb-2">
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              value={settings.companyName}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2">
              Company Email
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-2">
              Company Address
            </label>

            <textarea
              rows="3"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Business Hours */}
          <div>
            <label className="block font-semibold mb-2">
              Business Hours
            </label>

            <input
              type="text"
              name="businessHours"
              value={settings.businessHours}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-bold text-[#0F4C81]">
            Change Admin Password
          </h2>

          {/* Current Password */}
          <div>
            <label className="block font-semibold mb-2">
              Current Password
            </label>

            <input
              type="password"
              name="currentPassword"
              value={settings.currentPassword}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block font-semibold mb-2">
              New Password
            </label>

            <input
              type="password"
              name="newPassword"
              value={settings.newPassword}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-semibold mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={settings.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
            />
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

export default Settings