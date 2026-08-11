import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  FaSearch,
  FaEye,
  FaDownload,
  FaCheckCircle,
  FaTimes,
  FaPlus,
} from "react-icons/fa";

const ManageInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [requests, setRequests] = useState([]);

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    fetchInvoices();
    fetchCompletedRequests();
  }, []);

  // =========================
  // FETCH INVOICES
  // =========================
  const fetchInvoices = async () => {
    try {
      const res = await API.get("/invoices");
      setInvoices(res.data);
    } catch (error) {
      console.log("Failed to fetch invoices:", error);
    }
  };

  // =========================
  // FETCH COMPLETED REQUESTS
  // =========================
  const fetchCompletedRequests = async () => {
    try {
      const res = await API.get("/requests");

      const completed = res.data.filter(
        (request) => request.status === "Completed"
      );

      setRequests(completed);
    } catch (error) {
      console.log("Failed to fetch completed requests:", error);
    }
  };

  // =========================
  // CREATE INVOICE
  // =========================
  const handleCreateInvoice = async () => {
    if (!selectedRequest) {
      alert("Please select a completed service request.");
      return;
    }

    if (!amount) {
      alert("Please enter invoice amount.");
      return;
    }

    if (!dueDate) {
      alert("Please select due date.");
      return;
    }

    const request = requests.find(
      (item) => item._id === selectedRequest
    );

    if (!request) {
      alert("Service request not found.");
      return;
    }

    try {
      await API.post("/invoices", {
        request: request._id,
        customer: request.customer?._id || request.customer,
        amount: Number(amount),
        dueDate: dueDate,
        status: "Pending",
      });

      alert("Invoice created successfully!");

      setShowCreateModal(false);

      setSelectedRequest("");
      setAmount("");
      setDueDate("");

      fetchInvoices();
      fetchCompletedRequests();
    } catch (error) {
      console.log("Create invoice error:", error);
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
          "Failed to create invoice."
      );
    }
  };

  // =========================
  // VIEW INVOICE
  // =========================
  const handleViewInvoice = async (id) => {
    try {
      const res = await API.get(`/invoices/${id}`);

      setSelectedInvoice(res.data);
      setShowViewModal(true);
    } catch (error) {
      console.log("View invoice error:", error);
      alert("Failed to load invoice.");
    }
  };

  // =========================
  // DOWNLOAD / PRINT INVOICE
  // =========================
  const handleDownload = async (id) => {
    try {
      const res = await API.get(`/invoices/${id}`);

      const invoice = res.data;

      const printWindow = window.open("", "_blank");

      printWindow.document.write(`
        <html>
          <head>
            <title>Invoice-${invoice._id.slice(-6).toUpperCase()}</title>

            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 40px;
                color: #333;
              }

              .header {
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid #0F4C81;
                padding-bottom: 20px;
              }

              h1 {
                color: #0F4C81;
              }

              .invoice-box {
                margin-top: 40px;
                border: 1px solid #ddd;
                padding: 30px;
                border-radius: 10px;
              }

              .row {
                display: flex;
                justify-content: space-between;
                padding: 12px 0;
                border-bottom: 1px solid #eee;
              }

              .amount {
                font-size: 28px;
                font-weight: bold;
                color: #16a34a;
              }

              .status {
                font-weight: bold;
              }

              .footer {
                margin-top: 50px;
                text-align: center;
                color: #777;
              }
            </style>
          </head>

          <body>

            <div class="header">
              <div>
                <h1>ArcticAir</h1>
                <p>HVAC Service Management</p>
              </div>

              <div>
                <strong>Invoice</strong>
                <p>
                  #${invoice._id.slice(-6).toUpperCase()}
                </p>
              </div>
            </div>

            <div class="invoice-box">

              <div class="row">
                <strong>Customer</strong>
                <span>
                  ${invoice.customer?.name || "N/A"}
                </span>
              </div>

              <div class="row">
                <strong>Email</strong>
                <span>
                  ${invoice.customer?.email || "N/A"}
                </span>
              </div>

              <div class="row">
                <strong>Service</strong>
                <span>
                  ${invoice.request?.serviceType || "HVAC Service"}
                </span>
              </div>

              <div class="row">
                <strong>Due Date</strong>
                <span>
                  ${new Date(invoice.dueDate).toLocaleDateString()}
                </span>
              </div>

              <div class="row">
                <strong>Status</strong>
                <span class="status">
                  ${invoice.status}
                </span>
              </div>

              <div class="row">
                <strong>Total Amount</strong>
                <span class="amount">
                  $${Number(invoice.amount).toLocaleString()}
                </span>
              </div>

            </div>

            <div class="footer">
              <p>Thank you for choosing ArcticAir.</p>
              <p>Professional HVAC Services</p>
            </div>

            <script>
              window.onload = function() {
                window.print();
              }
            </script>

          </body>
        </html>
      `);

      printWindow.document.close();
    } catch (error) {
      console.log("Download invoice error:", error);
      alert("Failed to generate invoice.");
    }
  };

  // =========================
  // MARK PAID
  // =========================
  const markPaid = async (id) => {
    try {
      await API.put(`/invoices/${id}/pay`);

      alert("Invoice marked as paid.");

      fetchInvoices();
    } catch (error) {
      console.log(error);
      alert("Failed to update invoice.");
    }
  };

  // =========================
  // STATUS COLOR
  // =========================
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="p-8">

      {/* ================= HEADER ================= */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#0F4C81]">
            Manage Invoices
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage all customer invoices.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-[#0F4C81] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          <FaPlus />
          Create Invoice
        </button>

      </div>


      {/* ================= SEARCH ================= */}

      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search invoice..."
            className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />

        </div>

      </div>


      {/* ================= TABLE ================= */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Invoice ID
                </th>

                <th className="px-6 py-4 text-left">
                  Customer
                </th>

                <th className="px-6 py-4 text-left">
                  Amount
                </th>

                <th className="px-6 py-4 text-left">
                  Due Date
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

              {invoices.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No invoices found.
                  </td>

                </tr>

              ) : (

                invoices.map((invoice) => (

                  <tr
                    key={invoice._id}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="px-6 py-5 font-semibold">
                      {invoice._id.slice(-6).toUpperCase()}
                    </td>

                    <td className="px-6 py-5">
                      {invoice.customer?.name || "N/A"}
                    </td>

                    <td className="px-6 py-5 font-semibold text-green-600">
                      ${Number(invoice.amount).toLocaleString()}
                    </td>

                    <td className="px-6 py-5">
                      {new Date(
                        invoice.dueDate
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5 text-center">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                          invoice.status
                        )}`}
                      >
                        {invoice.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-3">

                        {/* VIEW */}

                        <button
                          onClick={() =>
                            handleViewInvoice(invoice._id)
                          }
                          title="View Invoice"
                          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                        >
                          <FaEye />
                        </button>


                        {/* DOWNLOAD */}

                        <button
                          onClick={() =>
                            handleDownload(invoice._id)
                          }
                          title="Download Invoice"
                          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg"
                        >
                          <FaDownload />
                        </button>


                        {/* MARK PAID */}

                        {invoice.status !== "Paid" && (

                          <button
                            onClick={() =>
                              markPaid(invoice._id)
                            }
                            title="Mark as Paid"
                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                          >
                            <FaCheckCircle />
                          </button>

                        )}

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* ================= CREATE INVOICE MODAL ================= */}

      {showCreateModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-[500px] p-7">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-[#0F4C81]">
                Create Invoice
              </h2>

              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                <FaTimes />
              </button>

            </div>


            <label className="block font-semibold mb-2">
              Completed Service
            </label>

            <select
              value={selectedRequest}
              onChange={(e) =>
                setSelectedRequest(e.target.value)
              }
              className="w-full border rounded-xl p-3 mb-5"
            >

              <option value="">
                Select completed service
              </option>

              {requests.map((request) => (

                <option
                  key={request._id}
                  value={request._id}
                >
                  {request.serviceType} -
                  {" "}
                  {request.customer?.name || "Customer"}
                </option>

              ))}

            </select>


            <label className="block font-semibold mb-2">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full border rounded-xl p-3 mb-5"
            />


            <label className="block font-semibold mb-2">
              Due Date
            </label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border rounded-xl p-3 mb-6"
            />


            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowCreateModal(false)}
                className="px-5 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateInvoice}
                className="px-5 py-2 bg-[#0F4C81] text-white rounded-lg"
              >
                Create Invoice
              </button>

            </div>

          </div>

        </div>

      )}


      {/* ================= VIEW INVOICE MODAL ================= */}

      {showViewModal && selectedInvoice && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-[550px] p-8">

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-2xl font-bold text-[#0F4C81]">
                  ArcticAir Invoice
                </h2>

                <p className="text-gray-500">
                  #
                  {selectedInvoice._id
                    .slice(-6)
                    .toUpperCase()}
                </p>
              </div>

              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                <FaTimes />
              </button>

            </div>


            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Customer
                </span>

                <span className="font-semibold">
                  {selectedInvoice.customer?.name || "N/A"}
                </span>
              </div>


              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Email
                </span>

                <span>
                  {selectedInvoice.customer?.email || "N/A"}
                </span>
              </div>


              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Service
                </span>

                <span>
                  {selectedInvoice.request?.serviceType ||
                    "HVAC Service"}
                </span>
              </div>


              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Due Date
                </span>

                <span>
                  {new Date(
                    selectedInvoice.dueDate
                  ).toLocaleDateString()}
                </span>
              </div>


              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">
                  Status
                </span>

                <span
                  className={`px-3 py-1 rounded-full ${getStatusColor(
                    selectedInvoice.status
                  )}`}
                >
                  {selectedInvoice.status}
                </span>
              </div>


              <div className="flex justify-between pt-3">

                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold text-green-600">
                  $
                  {Number(
                    selectedInvoice.amount
                  ).toLocaleString()}
                </span>

              </div>

            </div>


            <div className="flex justify-end gap-3 mt-8">

              <button
                onClick={() =>
                  handleDownload(selectedInvoice._id)
                }
                className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-lg"
              >
                <FaDownload />
                Download
              </button>

              <button
                onClick={() =>
                  setShowViewModal(false)
                }
                className="px-5 py-2 bg-gray-200 rounded-lg"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default ManageInvoice;