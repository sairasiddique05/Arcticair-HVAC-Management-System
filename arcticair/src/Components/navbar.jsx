import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
 <nav className="bg-[#0F4C81] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-400">ArcticAir</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="hover:text-orange-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-orange-400">
              About
            </Link>
          </li>

          <li>
            <Link to="/servicep" className="hover:text-orange-400">
              Services
            </Link>
          </li>

          <li>
            <Link to="/maintenance" className="hover:text-orange-400">
              Maintenance Plan
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-orange-400">
              Contact
            </Link>
          </li>

           <li>
            <Link to="/area" className="hover:text-orange-400">
             Service Area
            </Link>
          </li>

           {/* <li>
            <Link to="/plan" className="hover:text-orange-400">
              Maintenance Plan
            </Link>
          </li> */}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to="/rquote"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#0F4C81] transition"
          >
            Quote
          </Link>

          <div className="flex gap-3">
          <Link
            to="/login"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#0F4C81] transition"
          >
            Login
          </Link>
        </div>

        </div>
      </div>
    </nav>
  
  )
}

export default NavBar