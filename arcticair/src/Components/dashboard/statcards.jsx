import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  FaTools,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaCogs,
} from "react-icons/fa";

const StatCards = () => {
  const [statsData, setStatsData] = useState({
    activeRequests: 0,
    pendingQuotes: 0,
    paidInvoices: 0,
    maintenancePlan: "Inactive",
  });

  useEffect(() => {
    fetchCustomerStats();
  }, []);

  const fetchCustomerStats = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const customerId = user?._id || user?.id;

      if (!customerId) {
        console.log("Customer ID not found");
        return;
      }

      // Customer requests
      const requestsRes = await API.get(
        `/requests/customer/${customerId}`
      );

      const requests = requestsRes.data || [];

      const activeRequests = requests.filter(
        (request) =>
          request.status !== "Completed" &&
          request.status !== "Cancelled"
      ).length;

      // Customer quotes
      const quotesRes = await API.get(
        `/quotes/customer/${customerId}`
      );

      const quotes = quotesRes.data || [];

      const pendingQuotes = quotes.filter(
        (quote) => quote.status === "Pending"
      ).length;

      // Customer invoices
      const invoicesRes = await API.get(
        `/invoices/customer/${customerId}`
      );

      const invoices = invoicesRes.data || [];

      const paidInvoices = invoices.filter(
        (invoice) => invoice.status === "Paid"
      ).length;

      setStatsData({
        activeRequests,
        pendingQuotes,
        paidInvoices,
        maintenancePlan: "Active",
      });

    } catch (error) {
      console.log("Failed to fetch customer stats:", error);
    }
  };

  const stats = [
    {
      title: "Active Requests",
      value: statsData.activeRequests,
      icon: <FaTools />,
      color: "bg-blue-500",
    },
    {
      title: "Pending Quotes",
      value: statsData.pendingQuotes,
      icon: <FaFileInvoiceDollar />,
      color: "bg-orange-500",
    },
    {
      title: "Paid Invoices",
      value: statsData.paidInvoices,
      icon: <FaFileInvoice />,
      color: "bg-green-500",
    },
    {
      title: "Maintenance Plan",
      value: statsData.maintenancePlan,
      icon: <FaCogs />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >

          <div className="flex items-center justify-between">

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

export default StatCards;