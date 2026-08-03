import React from 'react'
import {
  FaSearch,
  FaBell,
  FaUserShield,
} from "react-icons/fa";

const AdmintopNavbar = () => {
  return (
  <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

      {/* Left */}
      <div>

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Welcome, Admin 👋
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Manage customers, technicians, requests, and business operations.
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative hidden lg:block">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-3 w-72 border rounded-xl outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />

        </div>

        {/* Notifications */}
        <button className="relative p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition">

          <FaBell className="text-xl text-[#0F4C81]" />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
            8
          </span>

        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-12 h-12 rounded-full bg-[#0F4C81] flex items-center justify-center text-white text-xl">

            <FaUserShield />

          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold text-[#0F4C81]">
              Admin
            </h3>

            <p className="text-sm text-gray-500">
              System Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  )
}

export default AdmintopNavbar