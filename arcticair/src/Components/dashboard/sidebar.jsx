import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaCogs,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
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
      path: "/customerdashboard",
    },
    {
      name: "Request Service",
      icon: <FaTools />,
      path: "/requests",
    },
    {
      name: "My Requests",
      icon: <FaClipboardList />,
      path: "/customerdashboard/dashrequests",
    },
    {
      name: "My Quotes",
      icon: <FaFileInvoiceDollar />,
      path: "/customerdashboard/dashquotes",
    },
    {
      name: "My Invoices",
      icon: <FaFileInvoice />,
      path: "/customerdashboard/invoices",
    },
    {
      name: "Maintenance Plans",
      icon: <FaCogs />,
      path: "/customerdashboard/dashmaintenance",
    },
    {
      name: "My Profile",
      icon: <FaUserCircle />,
      path: "/customerdashboard/profile",
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
          Customer Dashboard
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6 px-4">

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-xl mb-3 transition duration-300
              ${
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

        <button   onClick={handleLogout} className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  )
}

export default SideBar