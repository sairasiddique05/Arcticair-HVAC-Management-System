import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserCog,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    name: "Dashboard",
    path: "/admindashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Customers",
    path: "/admindashboard/customers",
    icon: <FaUsers />,
  },
  {
    name: "Technicians",
    path: "/admindashboard/technicians",
    icon: <FaUserCog />,
  },
  {
    name: "Service Requests",
    path: "/admindashboard/requests",
    icon: <FaClipboardList />,
  },
  {
    name: "Quotes",
    path: "/admindashboard/quotes",
    icon: <FaMoneyCheckAlt />,
  },
  {
    name: "Invoices",
    path: "/admindashboard/invoices",
    icon: <FaFileInvoiceDollar />,
  },
  {
    name: "Reports",
    path: "/admindashboard/reports",
    icon: <FaChartBar />,
  },
  {
    name: "Settings",
    path: "/admindashboard/settings",
    icon: <FaCog />,
  },
];

const AdminSidebar = () => {
    const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login", { replace: true });
};
  return (
    <aside className="w-72 h-screen bg-[#0F4C81] text-white sticky top-0 flex flex-col">

      {/* Logo */}
      <div className="py-8 text-center border-b border-blue-700">

        <h1 className="text-3xl font-bold tracking-wide">
          ArcticAir
        </h1>

        <p className="text-blue-200 text-sm mt-2">
          Admin Dashboard
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-3">

          {menuItems.map((item) => (
            <li key={item.name}>

              <NavLink
                to={item.path}
                end={item.path === "/admin-dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg"
                      : "hover:bg-blue-700 text-blue-100"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>

            </li>
          ))}

        </ul>

      </nav>

      {/* Logout */}
      <div className="p-5 border-t border-blue-700">

        <button  onClick={handleLogout} className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  )
}

export default AdminSidebar