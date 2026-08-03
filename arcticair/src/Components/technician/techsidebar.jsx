import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaCamera,
  FaFileAlt,
  FaUser,
  FaSignOutAlt,
  FaSnowflake,
  FaHome,
  FaUserCircle,
} from "react-icons/fa";


const TechSideBar = () => {
    const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  
    navigate("/login", { replace: true });
  };
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/techdashboard",
    },
    {
      name: "Assigned Jobs",
      icon: <FaClipboardList />,
      path: "/techdashboard/jobs",
    },
    {
      name: "Upload Photos",
      icon: <FaCamera />,
      path: "/techdashboard/photos",
    },
    {
      name: "Service Report",
      icon: <FaFileAlt />,
      path: "/techdashboard/report",
    },
    {
      name: "My Profile",
      icon: <FaUserCircle/>,
      path: "/techdashboard/profile",
    },
  ];
  return (
 <aside className="w-72 h-screen bg-[#0F4C81] text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="py-8 text-center border-b border-blue-700">
        <h1 className="text-3xl font-bold tracking-wide">
          ArcticAir
        </h1>

        <p className="text-blue-200 text-sm mt-1">
          Technician Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 px-4">

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition duration-300 ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "hover:bg-blue-700"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-blue-700">

        <button onClick={handleLogout} className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  )
}

export default TechSideBar