import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLock,
} from "react-icons/fa";

import rightImage from '../assets/tright.png'
import leftImage from '../assets/tleft.png'
import { Link } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await API.post("/auth/register", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: "customer",
    });

    alert("Registration Successful!");

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    navigate("/customer/dashboard");

  } catch (error) {
    alert(error.response?.data?.message || "Registration Failed");
  }
};
  return (
     <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-700 relative overflow-hidden flex items-center justify-center px-6 py-10">

     

      {/* Register Card */}
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden z-10">

        {/* Header */}
        <div className="bg-[#0F4C81] py-4">
          <h1 className="text-2xl  text-center text-white">
            Create Your Account
          </h1>
        </div>

        {/* Form */}
      <div className="p-4">

  <form className="space-y-3" onSubmit={handleSubmit}>

    {/* Full Name */}
    <div className="flex items-center border rounded-lg px-3">
      <FaUser className="text-[#0F4C81] text-lg" />
      <input
        type="text"
         name="name"
  value={formData.name}
  onChange={handleChange}
        placeholder="Full Name"
        className="w-full py-3 px-3 outline-none text-base"
      />
    </div>

    {/* Email */}
    <div className="flex items-center border rounded-lg px-3">
      <FaEnvelope className="text-[#0F4C81] text-lg" />
      <input
        type="email"
         name="email"
  value={formData.email}
  onChange={handleChange}
        placeholder="Email Address"
        className="w-full py-3 px-3 outline-none text-base"
      />
    </div>

    {/* Phone */}
    <div className="flex items-center border rounded-lg px-3">
      <FaPhoneAlt className="text-[#0F4C81] text-lg" />
      <input
        type="text"
         name="phone"
  value={formData.phone}
  onChange={handleChange}
        placeholder="Phone Number"
        className="w-full py-3 px-3 outline-none text-base"
      />
    </div>

    {/* Address */}
    <div className="flex items-center border rounded-lg px-3">
      <FaMapMarkerAlt className="text-[#0F4C81] text-lg" />
      <input
        type="text"
         name="address"
  value={formData.address}
  onChange={handleChange}
        placeholder="Address"
        className="w-full py-3 px-3 outline-none text-base"
      />
    </div>

    {/* Password */}
    <div className="flex items-center border rounded-lg px-3">
      <FaLock className="text-[#0F4C81] text-lg" />
      <input
        type="password"
        name="password"
  value={formData.password}
  onChange={handleChange}
        placeholder="Password"
        className="w-full py-3 px-3 outline-none text-base"
      />
    </div>

    {/* Confirm Password */}
    <div className="flex items-center border rounded-lg px-3">
      <FaLock className="text-[#0F4C81] text-lg" />
      <input
        type="password"
         name="confirmPassword"
  value={formData.confirmPassword}
  onChange={handleChange}
        placeholder="Confirm Password"
        className="w-full py-3 px-3 outline-none text-base"
      />
    </div>

    {/* Terms */}
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        className="w-4 h-4 accent-[#0F4C81]"
      />
      I agree to the Terms & Conditions
    </label>

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 rounded-xl transition duration-300"
    >
      REGISTER
    </button>

  </form>

</div>

          {/* Login Link */}
          <p className="text-center mt-6 text-lg">
            Already have an account?{"/login "}
            <Link
              to="/login"
              className="text-[#0F4C81] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
 {/* Left Technician */}
      <div className="absolute left-80 bottom-10 z-10">
      <img
        src={leftImage}
        alt="HVAC Technician"
        className="w-48"
      />
      
       </div>

      {/* Right Technician */}
      <div className="absolute right-80 top-10 z-10">
      <img
        src={rightImage}
        alt="HVAC Technician"
        className="w-48"
      />
      </div>


      </div>

    
  )
}

export default Register