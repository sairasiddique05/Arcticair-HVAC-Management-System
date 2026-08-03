import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Footer = () => {
  return (
     <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Arctic<span className="text-cyan-500">Air</span>
          </h2>
          <p className="mt-4 text-sm leading-6">
            Professional HVAC installation, repair, and maintenance services.
            Keeping homes and businesses comfortable all year round.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-cyan-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-cyan-500 transition">
                Services
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-cyan-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-cyan-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="/login" className="hover:text-cyan-500 transition">
                Login
              </a>
            </li>

            <li>
              <a href="/register" className="hover:text-cyan-500 transition">
                Register
              </a>
            </li>

            <li>
              <a href="/quote" className="hover:text-cyan-500 transition">
                Request Quote
              </a>
            </li>

            <li>
              <a href="/booking" className="hover:text-cyan-500 transition">
                Book Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaPhone className="text-cyan-500" />
              +1 (555) 123-4567
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-500" />
              support@arcticair.com
            </p>

            <p className="flex items-start gap-3">
              <FaLocationDot className="text-cyan-500 mt-1" />
              123 Main Street, New York, USA
            </p>

            <div className="flex gap-4 mt-5 text-lg">
              <a href="#" className="hover:text-cyan-500">
                <FaFacebook />
              </a>

              <a href="#" className="hover:text-cyan-500">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-cyan-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © {new Date().getFullYear()} ArcticAir HVAC Solutions. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-cyan-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-cyan-500">
              Terms & Conditionss
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer