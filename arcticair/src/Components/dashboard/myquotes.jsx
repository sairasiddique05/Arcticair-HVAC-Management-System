import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
     const res = await API.get("/quotes/my");
      setQuotes(res.data);
    } catch (error) {
      console.log("Failed to fetch quotes:", error);
    }
  };

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


  const handleView = (quote) => {
    setSelectedQuote(quote);
    setShowViewModal(true);
  };

 
  const handleDownload = (quote) => {
    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
      <html>
        <head>
          <title>Quote-${quote._id}</title>

          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #333;
            }

            .header {
              text-align: center;
              margin-bottom: 30px;
            }

            .header h1 {
              color: #0F4C81;
              margin-bottom: 5px;
            }

            .quote-box {
              border: 1px solid #ddd;
              border-radius: 10px;
              padding: 25px;
            }

            .row {
              display: flex;
              justify-content: space-between;
              padding: 12px 0;
              border-bottom: 1px solid #eee;
            }

            .label {
              font-weight: bold;
            }

            .amount {
              font-size: 28px;
              font-weight: bold;
              color: #16a34a;
              margin-top: 20px;
            }

            .status {
              display: inline-block;
              padding: 8px 15px;
              border-radius: 20px;
              background: #dcfce7;
              color: #15803d;
            }
          </style>
        </head>

        <body>

          <div class="header">
            <h1>ArcticAir HVAC Solutions</h1>
            <p>HVAC Service Quote</p>
          </div>

          <div class="quote-box">

            <div class="row">
              <span class="label">Quote ID</span>
              <span>${quote._id.slice(-6).toUpperCase()}</span>
            </div>

            <div class="row">
              <span class="label">Customer</span>
              <span>${quote.customer?.name || "Customer"}</span>
            </div>

            <div class="row">
              <span class="label">Email</span>
              <span>${quote.customer?.email || ""}</span>
            </div>

            <div class="row">
              <span class="label">Service</span>
              <span>${quote.serviceType || ""}</span>
            </div>

            <div class="row">
              <span class="label">Property Type</span>
              <span>${quote.propertyType || ""}</span>
            </div>

            <div class="row">
              <span class="label">Address</span>
              <span>${quote.address || ""}</span>
            </div>

            <div class="row">
              <span class="label">Property Size</span>
              <span>${quote.propertySize || ""}</span>
            </div>

            <div class="row">
              <span class="label">Preferred Date</span>
              <span>
                ${
                  quote.preferredDate
                    ? new Date(
                        quote.preferredDate
                      ).toLocaleDateString()
                    : ""
                }
              </span>
            </div>

            <div class="row">
              <span class="label">Status</span>
              <span class="status">${quote.status}</span>
            </div>

            <div class="amount">
              Total Quote: $${quote.amount || 0}
            </div>

          </div>

          <script>
            window.onload = function () {
              window.print();
            };
          </script>

        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#0F4C81]">
          My Quotes
        </h1>

        <p className="text-gray-600 mt-2">
          View and manage your HVAC quotations.
        </p>

      </div>
      

      <Link
  to="/rquote"
  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
>
  + Request New Quote
</Link>


      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>
                <th className="px-6 py-4 text-left">
                  Quote ID
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

              {quotes.length === 0 ? (

                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-10 text-gray-500"
                  >
                    No quotes found.
                  </td>
                </tr>

              ) : (

                quotes.map((quote) => (

                  <tr
                    key={quote._id}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="px-6 py-5 font-semibold">
                      #{quote._id.slice(-6).toUpperCase()}
                    </td>

                    <td className="px-6 py-5">
                      {quote.serviceType}
                    </td>

                    <td className="px-6 py-5 font-semibold text-[#0F4C81]">
                      ${quote.amount || 0}
                    </td>

                    <td className="px-6 py-5">
                      {new Date(
                        quote.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5 text-center">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(
                          quote.status
                        )}`}
                      >
                        {quote.status}
                      </span>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-3">

                        {/* VIEW */}
                        <button
                          onClick={() => handleView(quote)}
                          className="bg-[#0F4C81] hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                        >
                          <FaEye />
                          View
                        </button>

                        {/* PDF */}
                        {quote.status === "Approved" && (

                          <button
                            onClick={() =>
                              handleDownload(quote)
                            }
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                          >
                            <FaDownload />
                            PDF
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

      {/* VIEW MODAL */}
      {showViewModal && selectedQuote && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">

            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">

              <div>
                <h2 className="text-2xl font-bold text-[#0F4C81]">
                  Quote Details
                </h2>

                <p className="text-gray-500 mt-1">
                  #
                  {selectedQuote._id
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

            {/* Details */}
            <div className="p-6 space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Service
                </span>

                <span>
                  {selectedQuote.serviceType}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Property Type
                </span>

                <span>
                  {selectedQuote.propertyType}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Address
                </span>

                <span>
                  {selectedQuote.address || "N/A"}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Property Size
                </span>

                <span>
                  {selectedQuote.propertySize || "N/A"}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Preferred Date
                </span>

                <span>
                  {selectedQuote.preferredDate
                    ? new Date(
                        selectedQuote.preferredDate
                      ).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="font-semibold">
                  Status
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                    selectedQuote.status
                  )}`}
                >
                  {selectedQuote.status}
                </span>
              </div>

              <div className="pt-3">

                <p className="font-semibold mb-2">
                  Description
                </p>

                <p className="text-gray-600 bg-slate-50 p-4 rounded-lg">
                  {selectedQuote.description ||
                    "No description provided."}
                </p>

              </div>

              <div className="text-right pt-3">

                <p className="text-gray-500">
                  Quote Amount
                </p>

                <p className="text-3xl font-bold text-green-600">
                  ${selectedQuote.amount || 0}
                </p>

              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t flex justify-end gap-3">

              {selectedQuote.status === "Approved" && (

                <button
                  onClick={() =>
                    handleDownload(selectedQuote)
                  }
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaDownload />
                  Download PDF
                </button>

              )}

              <button
                onClick={() => setShowViewModal(false)}
                className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg"
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

export default MyQuotes;