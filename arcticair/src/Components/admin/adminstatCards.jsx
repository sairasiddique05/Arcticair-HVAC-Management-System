import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  FaUsers,
  FaUserCog,
  FaClipboardList,
  FaDollarSign,
} from "react-icons/fa";

const AdminstatCards = () => {
  const [statsData, setStatsData] = useState({
    totalCustomers: 0,
    activeTechnicians: 0,
    serviceRequests: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");

      console.log("ADMIN STATS:", res.data);

      setStatsData(res.data);
    } catch (error) {
      console.log("Failed to fetch admin stats:", error);
    }
  };

  const stats = [
    {
      title: "Total Customers",
      value: statsData.totalCustomers,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Active Technicians",
      value: statsData.activeTechnicians,
      icon: <FaUserCog />,
      color: "bg-green-500",
    },
    {
      title: "Service Requests",
      value: statsData.serviceRequests,
      icon: <FaClipboardList />,
      color: "bg-orange-500",
    },
    {
      title: "Total Revenue",
      value: `$${statsData.totalRevenue.toLocaleString()}`,
      icon: <FaDollarSign />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold text-[#0F4C81] mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl`}
            >
              {item.icon}
            </div>

          </div>
        </div>
      ))}

    </div>
  );
};

export default AdminstatCards;