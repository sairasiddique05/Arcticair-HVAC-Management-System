import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaSearch,
  FaEye,
  FaTrash,
  FaUserCog,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const ManageRequest = () => {
const [requests, setRequests] = useState([]);
const [technicians, setTechnicians] = useState([]);
const [selectedRequest, setSelectedRequest] = useState(null);
const [showViewModal, setShowViewModal] = useState(false);
const [selectedTech, setSelectedTech] = useState("");
const [showModal, setShowModal] = useState(false);
const [showInvoiceModal, setShowInvoiceModal] = useState(false);
const [invoiceAmount, setInvoiceAmount] = useState("");
const [invoiceDueDate, setInvoiceDueDate] = useState("");

useEffect(() => {
  fetchRequests();
  fetchTechnicians();
}, []);

const fetchRequests = async () => {
  try {
    const res = await API.get("/requests");
    console.log(res.data);
    setRequests(res.data);
  } catch (error) {
    console.log(error);
  }
};

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const fetchTechnicians = async () => {
  try {
    const res = await API.get("/users/technicians");
    setTechnicians(res.data);
  } catch (err) {
    console.log(err);
  }
};


const assignTechnician = async () => {
  if (!selectedTech) {
    alert("Please select a technician");
    return;
  }

  try {
    await API.put(`/requests/${selectedRequest._id}/assign`, {
      technicianId: selectedTech,
    });

    alert("Technician Assigned Successfully!");

    setShowModal(false);
    setSelectedRequest(null);
    setSelectedTech("");

    fetchRequests();

  } catch (error) {
    console.log(error);
    alert("Failed to assign technician");
  }
};

const generateInvoice = async () => {
  if (!invoiceAmount || !invoiceDueDate) {
    alert("Please enter amount and due date");
    return;
  }

  try {
    await API.post("/invoices", {
      request: selectedRequest._id,
      customer: selectedRequest.customer._id,
      amount: Number(invoiceAmount),
      dueDate: invoiceDueDate,
    });

    alert("Invoice generated successfully!");

    setShowInvoiceModal(false);
    setSelectedRequest(null);
    setInvoiceAmount("");
    setInvoiceDueDate("");
  } catch (error) {
    console.log("Invoice error:", error);
    console.log("Backend response:", error.response?.data);

    alert(
      error.response?.data?.message ||
        "Failed to generate invoice"
    );
  }
};

  return (
    <section className="p-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#0F4C81]">
            Manage Service Requests
          </h1>

          <p className="text-gray-600 mt-2">
            View, assign and manage customer service requests.
          </p>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search request..."
            className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>
                <th className="px-6 py-4 text-left">Request ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Technician</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {requests.map((request) => (

                <tr
                  key={request.id}
                  className="border-b hover:bg-slate-50"
                >

                  <td className="px-6 py-5 font-semibold">
                   {request._id.slice(-6).toUpperCase()}
                  </td>

                  <td className="px-6 py-5">
                    {request.customer?.name}
                  </td>

                  <td className="px-6 py-5">
                    {request.serviceType}
                  </td>

                  <td className="px-6 py-5">
                   {new Date(request.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5">
               {request.assignedTechnician?.name || "Not Assigned"}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                     <button
  onClick={() => {
    setSelectedRequest(request);
    setShowViewModal(true);
  }}
  title="View Request"
  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
>
  <FaEye />
</button>

                      {/* Assign */}
                      <button
  onClick={() => {
    setSelectedRequest(request);
    setShowModal(true);
  }}
  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
>
  <FaUserCog />
</button>

               

{request.status === "Completed" ? (
  <button
    onClick={() => {
      setSelectedRequest(request);
      setShowInvoiceModal(true);
    }}
    title="Generate Invoice"
    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg"
  >
    <FaFileInvoiceDollar />
  </button>
) : (
  <button
    title="Delete Request"
    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
  >
    <FaTrash />
  </button>
)}

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-[420px] rounded-xl shadow-xl p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-5">
        Assign Technician
      </h2>

      <select
        value={selectedTech}
        onChange={(e) => setSelectedTech(e.target.value)}
        className="w-full border rounded-lg p-3 mb-6"
      >
        <option value="">Select Technician</option>

        {technicians.map((tech) => (
          <option key={tech._id} value={tech._id}>
            {tech.name}
          </option>
        ))}
      </select>

      <div className="flex justify-end gap-3">

        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-2 rounded-lg bg-gray-300"
        >
          Cancel
        </button>

        <button
          onClick={assignTechnician}
          className="px-5 py-2 rounded-lg bg-[#0F4C81] text-white"
        >
          Assign
        </button>

      </div>

    </div>
  </div>
)}

{showInvoiceModal && selectedRequest && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white w-[450px] rounded-2xl shadow-xl p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Generate Invoice
      </h2>

      {/* Customer */}

      <div className="mb-4">

        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Customer
        </label>

        <input
          type="text"
          value={selectedRequest.customer?.name || ""}
          disabled
          className="w-full border rounded-lg p-3 bg-gray-100"
        />

      </div>

      {/* Service */}

      <div className="mb-4">

        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Service
        </label>

        <input
          type="text"
          value={selectedRequest.serviceType || ""}
          disabled
          className="w-full border rounded-lg p-3 bg-gray-100"
        />

      </div>

      {/* Amount */}

      <div className="mb-4">

        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Invoice Amount
        </label>

        <input
          type="number"
          placeholder="Enter amount"
          value={invoiceAmount}
          onChange={(e) => setInvoiceAmount(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

      </div>

      {/* Due Date */}

      <div className="mb-6">

        <label className="block text-sm font-semibold text-gray-600 mb-2">
          Due Date
        </label>

        <input
          type="date"
          value={invoiceDueDate}
          onChange={(e) => setInvoiceDueDate(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-3">

        <button
          onClick={() => {
            setShowInvoiceModal(false);
            setSelectedRequest(null);
            setInvoiceAmount("");
            setInvoiceDueDate("");
          }}
          className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
        >
          Cancel
        </button>

        <button
          onClick={generateInvoice}
          className="px-5 py-2 rounded-lg bg-[#0F4C81] hover:bg-blue-900 text-white"
        >
          Create Invoice
        </button>

      </div>

    </div>

  </div>
)}

{showViewModal && selectedRequest && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-7">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-[#0F4C81]">
          Service Request Details
        </h2>

        <button
          onClick={() => {
            setShowViewModal(false);
            setSelectedRequest(null);
          }}
          className="text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

      </div>

      <div className="space-y-4">

        {/* Request ID */}
        <div>
          <p className="text-sm text-gray-500">
            Request ID
          </p>

          <p className="font-semibold text-[#0F4C81]">
            {selectedRequest._id?.slice(-6).toUpperCase()}
          </p>
        </div>

        {/* Customer */}
        <div>
          <p className="text-sm text-gray-500">
            Customer
          </p>

          <p className="font-semibold">
            {selectedRequest.customer?.name || "N/A"}
          </p>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm text-gray-500">
            Email
          </p>

          <p>
            {selectedRequest.customer?.email || "N/A"}
          </p>
        </div>

        {/* Service */}
        <div>
          <p className="text-sm text-gray-500">
            Service
          </p>

          <p className="font-semibold">
            {selectedRequest.serviceType}
          </p>
        </div>

        {/* Date */}
        <div>
          <p className="text-sm text-gray-500">
            Preferred Date
          </p>

          <p>
            {selectedRequest.preferredDate
              ? new Date(
                  selectedRequest.preferredDate
                ).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

        {/* Time */}
        <div>
          <p className="text-sm text-gray-500">
            Preferred Time
          </p>

          <p>
            {selectedRequest.preferredTime || "N/A"}
          </p>
        </div>

        {/* Property */}
        <div>
          <p className="text-sm text-gray-500">
            Property Type
          </p>

          <p>
            {selectedRequest.propertyType || "N/A"}
          </p>
        </div>

        {/* Address */}
        <div>
          <p className="text-sm text-gray-500">
            Address
          </p>

          <p>
            {selectedRequest.address || "N/A"}
          </p>
        </div>

        {/* Technician */}
        <div>
          <p className="text-sm text-gray-500">
            Assigned Technician
          </p>

          <p>
            {selectedRequest.assignedTechnician?.name ||
              "Not Assigned"}
          </p>
        </div>

        {/* Status */}
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Status
          </p>

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
              selectedRequest.status
            )}`}
          >
            {selectedRequest.status}
          </span>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm text-gray-500">
            Description
          </p>

          <div className="bg-slate-50 rounded-lg p-4 mt-1">
            {selectedRequest.description || "No description provided."}
          </div>
        </div>

        {/* Completed Job Information */}

        {selectedRequest.status === "Completed" && (
          <div className="border-t pt-5 mt-5">

            <h3 className="text-lg font-bold text-[#0F4C81] mb-4">
              Service Report
            </h3>

            <div className="space-y-3">

              <div>
                <p className="text-sm text-gray-500">
                  Work Performed
                </p>

                <p>
                  {selectedRequest.workPerformed ||
                    "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Parts Used
                </p>

                <p>
                  {selectedRequest.partsUsed ||
                    "None"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Recommendation
                </p>

                <p>
                  {selectedRequest.recommendation ||
                    selectedRequest.recommendations ||
                    "None"}
                </p>
              </div>

            </div>

          </div>
        )}

      </div>

      <div className="flex justify-end mt-7">

        <button
          onClick={() => {
            setShowViewModal(false);
            setSelectedRequest(null);
          }}
          className="px-6 py-2 rounded-lg bg-[#0F4C81] hover:bg-blue-900 text-white"
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}
    </section>
  )
}

export default ManageRequest