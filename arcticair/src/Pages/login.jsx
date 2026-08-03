import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

import { FaTools, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom'
import loginImage from '../assets/login.png'
import { FaEnvelope, FaLock } from 'react-icons/fa6';
const Login = () => {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/login", formData);

    // Save Token
    localStorage.setItem("token", res.data.token);

    // Save User
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login Successful!");

    // Redirect according to role
    if (res.data.user.role === "customer") {
      navigate("/customerdashboard");
    } else if (res.data.user.role === "technician") {
      navigate("/techdashboard");
    } else if (res.data.user.role === "admin") {
      navigate("/admindashboard");
    }

  } catch (error) {
    alert(error.response?.data?.message || "Login Failed");
  }
};
  return (
  <div className="min-h-screen flex bg-gray-100">

   
      <div className="relative min-h-screen m-0 p-0 overflow-hidden">
        <img
          src={loginImage}
          alt="HVAC Technician"
          className="w-dvh h-3/4  m-12 mt-40"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-2/5 bg-gray-100 flex items-center justify-center px-6">

        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-[#0F4C81]">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to access your ArcticAir dashboard.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <div className="flex items-center border rounded-lg px-3 bg-white">
                <FaEnvelope className="text-gray-400" />

                <input
                  type="email"
                   name="email"
  value={formData.email}
  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="flex items-center border rounded-lg px-3 bg-white">
                <FaLock className="text-gray-400" />

                <input
                  type="password"
                   name="password"
  value={formData.password}
  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex justify-between text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-[#0F4C81] hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}
           <button
  type="submit"
  className="w-full bg-[#0F4C81] text-white py-3 rounded-lg hover:bg-blue-900 transition"
>
  Login
</button>

          </form>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login