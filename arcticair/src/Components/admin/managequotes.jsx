import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const ManageQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  // View modal
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  // Edit modal
  const [showEditModal, setShowEditModal] = useState(false);

  const [editData, setEditData] = useState({
    serviceType: "",
    propertyType: "",
    address: "",
    preferredDate: "",
    propertySize: "",
    description: "",
    amount: 0,
  });

  // =========================
  // Fetch Quotes
  // =========================
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const res = await API.get("/quotes");
      setQuotes(res.data);
    } catch (error) {
      console.log("Failed to fetch quotes:", error);
    }
  };

  // =========================
  // Status Color
  // =========================
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Approved":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // =========================
  // VIEW QUOTE
  // =========================
  const handleView = (quote) => {
    setSelectedQuote(quote);
    setShowViewModal(true);
  };

  // =========================
  // EDIT QUOTE
  // =========================
  const handleEdit = (quote) => {
    setSelectedQuote(quote);

    setEditData({
      serviceType: quote.serviceType || "",
      propertyType: quote.propertyType || "",
      address: quote.address || "",
      preferredDate: quote.preferredDate
        ? quote.preferredDate.split("T")[0]
        : "",
      propertySize: quote.propertySize || "",
      description: quote.description || "",
      amount: quote.amount || 0,
    });

    setShowEditModal(true);
  };

  // =========================
  // HANDLE EDIT INPUT
  // =========================
  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  // =========================
  // UPDATE QUOTE
  // =========================
  const handleUpdateQuote = async () => {
    try {
      await API.put(`/quotes/${selectedQuote._id}`, editData);

      alert("Quote updated successfully!");

      setShowEditModal(false);
      setSelectedQuote(null);

      fetchQuotes();
    } catch (error) {
      console.log("Update quote error:", error);
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
          "Failed to update quote"
      );
    }
  };

  // =========================
  // APPROVE QUOTE
  // =========================
  const handleApprove = async (quote) => {
    try {
      await API.put(`/quotes/${quote._id}/status`, {
        status: "Approved",
      });

      alert("Quote approved successfully!");

      fetchQuotes();
    } catch (error) {
      console.log(error);
      alert("Failed to approve quote");
    }
  };

  // =========================
  // REJECT QUOTE
  // =========================
  const handleReject = async (quote) => {
    try {
      await API.put(`/quotes/${quote._id}/status`, {
        status: "Rejected",
      });

      alert("Quote rejected successfully!");

      fetchQuotes();
    } catch (error) {
      console.log(error);
      alert("Failed to reject quote");
    }
  };

  return (
    <section className="p-8">

      {/* =========================
          HEADING
      ========================= */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Manage Quotes
        </h1>

        <p className="text-gray-600 mt-2">
          Review, approve, reject, or edit customer quotes.
        </p>
      </div>

      {/* =========================
          SEARCH
      ========================= */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search quote..."
            className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />

        </div>

      </div>

      {/* =========================
          TABLE
      ========================= */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Quote ID
                </th>

                <th className="px-6 py-4 text-left">
                  Customer
                </th>

                <th className="px-6 py-4 text-left">
                  Service
                </th>

                <th className="px-6 py-4 text-left">
                  Amount
                </th>

                <th className="px-6 py-4 text-left">
                  Date
                </th>

                <th className="px-6 py-4 text-center">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {quotes.map((quote) => (

                <tr
                  key={quote._id}
                  className="border-b hover:bg-slate-50"
                >

                  {/* Quote ID */}
                  <td className="px-6 py-5 font-semibold">
                    {quote._id.slice(-6).toUpperCase()}
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-5">
                    {quote.customer?.name || "Guest Customer"}
                  </td>

                  {/* Service */}
                  <td className="px-6 py-5">
                    {quote.serviceType || "N/A"}
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-5 font-semibold text-green-600">
                    ${Number(quote.amount || 0).toLocaleString()}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-5">
                    {quote.createdAt
                      ? new Date(
                          quote.createdAt
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                        quote.status
                      )}`}
                    >
                      {quote.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      {/* VIEW */}
                      <button
                        onClick={() => handleView(quote)}
                        title="View Quote"
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                      >
                        <FaEye />
                      </button>

                      {/* EDIT */}
                      <button
                        onClick={() => handleEdit(quote)}
                        title="Edit Quote"
                        className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg"
                      >
                        <FaEdit />
                      </button>

                      {/* APPROVE */}
                      <button
                        onClick={() => handleApprove(quote)}
                        title="Approve Quote"
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                      >
                        <FaCheck />
                      </button>

                      {/* REJECT */}
                      <button
                        onClick={() => handleReject(quote)}
                        title="Reject Quote"
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      >
                        <FaTimes />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* ==================================================
          VIEW QUOTE MODAL
      ================================================== */}

      {showViewModal && selectedQuote && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-[#0F4C81]">
                Quote Details
              </h2>

              <button
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedQuote(null);
                }}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <p className="text-gray-500 text-sm">
                  Customer
                </p>

                <p className="font-semibold">
                  {selectedQuote.customer?.name ||
                    "Guest Customer"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                  {selectedQuote.customer?.email ||
                    "Not available"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Service
                </p>

                <p className="font-semibold">
                  {selectedQuote.serviceType}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Property Type
                </p>

                <p className="font-semibold">
                  {selectedQuote.propertyType}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Property Size
                </p>

                <p className="font-semibold">
                  {selectedQuote.propertySize || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Amount
                </p>

                <p className="font-bold text-green-600">
                  $
                  {Number(
                    selectedQuote.amount || 0
                  ).toLocaleString()}
                </p>
              </div>

              <div className="md:col-span-2">

                <p className="text-gray-500 text-sm">
                  Address
                </p>

                <p className="font-semibold">
                  {selectedQuote.address || "N/A"}
                </p>

              </div>

              <div className="md:col-span-2">

                <p className="text-gray-500 text-sm">
                  Description
                </p>

                <p className="text-gray-700">
                  {selectedQuote.description ||
                    "No description provided"}
                </p>

              </div>

            </div>

            <div className="flex justify-end mt-8">

              <button
                onClick={() => {
                  setShowViewModal(false);
                  setSelectedQuote(null);
                }}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ==================================================
          EDIT QUOTE MODAL
      ================================================== */}

      {showEditModal && selectedQuote && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8">

            <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
              Edit Quote
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {/* Service */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Service Type
                </label>

                <input
                  type="text"
                  name="serviceType"
                  value={editData.serviceType}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                />

              </div>

              {/* Property Type */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Property Type
                </label>

                <select
                  name="propertyType"
                  value={editData.propertyType}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                >

                  <option value="">
                    Select Property Type
                  </option>

                  <option value="Residential">
                    Residential
                  </option>

                  <option value="Commercial">
                    Commercial
                  </option>

                </select>

              </div>

              {/* Address */}
              <div className="md:col-span-2">

                <label className="block text-sm font-medium mb-2">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={editData.address}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                />

              </div>

              {/* Date */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Preferred Date
                </label>

                <input
                  type="date"
                  name="preferredDate"
                  value={editData.preferredDate}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                />

              </div>

              {/* Property Size */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Property Size
                </label>

                <input
                  type="text"
                  name="propertySize"
                  value={editData.propertySize}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                />

              </div>

              {/* Amount */}
              <div className="md:col-span-2">

                <label className="block text-sm font-medium mb-2">
                  Quote Amount ($)
                </label>

                <input
                  type="number"
                  name="amount"
                  min="0"
                  value={editData.amount}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                />

              </div>

              {/* Description */}
              <div className="md:col-span-2">

                <label className="block text-sm font-medium mb-2">
                  Description
                </label>

                <textarea
                  name="description"
                  rows="4"
                  value={editData.description}
                  onChange={handleEditChange}
                  className="w-full border rounded-lg p-3"
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedQuote(null);
                }}
                className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdateQuote}
                className="px-6 py-2 bg-[#0F4C81] hover:bg-blue-800 text-white rounded-lg"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default ManageQuotes;