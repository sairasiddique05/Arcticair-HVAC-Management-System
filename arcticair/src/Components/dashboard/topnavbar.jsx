import React from 'react'

import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";


const TopNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
   <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

      {/* Left */}
      <div>
        <h2 className="text-2xl font-bold text-[#0F4C81]">
         Welcome, {user?.name} 👋
        </h2>

        <p className="text-gray-500 text-sm">
          Manage your HVAC services from one place.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-2 w-72 border rounded-xl outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>

        {/* Notification */}
        <button className="relative p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition">
          <FaBell className="text-xl text-[#0F4C81]" />

          <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-4xl text-[#0F4C81]" />

          <div className="hidden md:block">
          <h3 className="font-semibold text-[#0F4C81]">
  {user?.name}
</h3>

<p className="text-sm text-gray-500">
  Customer
</p>
          </div>

        </div>

      </div>

    </header>
  )
}

export default TopNavbar