import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaClipboardCheck,
  FaCalendarAlt,
  FaUserCog,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const ReportDetails = () => {
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

const [invoiceData, setInvoiceData] = useState({
  amount: "",
  dueDate: "",
});

  const { id } = useParams();

  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
     const res = await API.get(`/requests/reports/${id}`);
      setReport(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!report) {
    return (
      <div className="p-10 text-center text-xl">
        Loading...
      </div>
    );
  }

  const handleInvoiceChange = (e) => {
  setInvoiceData({
    ...invoiceData,
    [e.target.name]: e.target.value,
  });
};

const generateInvoice = async () => {
  try {
    await API.post("/invoices", {
      request: report.request._id,
      customer: report.request.customer._id,
      amount: invoiceData.amount,
      dueDate: invoiceData.dueDate,
    });

    alert("Invoice Generated Successfully!");
    setShowInvoiceForm(false);

  } catch (error) {
    console.log(error);
    alert("Failed to generate invoice.");
  }
};

  return (
    <section className="p-8 bg-slate-100 min-h-screen">

      <div className="bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">
          Service Report Details
        </h1>

        {/* Customer */}
        <div className="mb-10">

          <h2 className="text-xl font-bold text-[#0F4C81] mb-5">
            Customer Information
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaUser />
              {report.request?.customer?.name}
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              {report.request?.customer?.email}
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              {report.request?.customer?.phone}
            </div>

          </div>

        </div>

        {/* Technician */}
        <div className="mb-10">

          <h2 className="text-xl font-bold text-[#0F4C81] mb-5">
            Technician
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaUserCog />
              {report.technician?.name}
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              {report.technician?.email}
            </div>

          </div>

        </div>

        {/* Service */}
        <div className="mb-10">

          <h2 className="text-xl font-bold text-[#0F4C81] mb-5">
            Service Information
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaTools />
              {report.request?.serviceType}
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt />
              {new Date(report.createdAt).toLocaleDateString()}
            </div>

          </div>

        </div>

        {/* Work Performed */}

        <div className="mb-8">

          <h2 className="font-bold text-lg mb-2">
            Work Performed
          </h2>

          <div className="bg-slate-100 rounded-xl p-5">
            {report.workPerformed}
          </div>

        </div>

        {/* Parts */}

        <div className="mb-8">

          <h2 className="font-bold text-lg mb-2">
            Parts Used
          </h2>

          <div className="bg-slate-100 rounded-xl p-5">
            {report.partsUsed}
          </div>

        </div>

        {/* Recommendation */}

        <div className="mb-8">

          <h2 className="font-bold text-lg mb-2">
            Recommendations
          </h2>

          <div className="bg-slate-100 rounded-xl p-5">
            {report.recommendations}
          </div>

        </div>

        {/* Status */}

        <div className="flex items-center gap-3">

          <FaClipboardCheck className="text-green-600"/>

          <span className="font-semibold">
            Final Status :
          </span>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
            {report.jobStatus}
          </span>

        </div>
        <div className="mt-10">
  <button
    onClick={() => setShowInvoiceForm(true)}
    className="bg-[#0F4C81] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold"
  >
    Generate Invoice
  </button>
</div>

     {showInvoiceForm && (

<div className="mt-8 bg-slate-100 rounded-xl p-6">

    <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Create Invoice
    </h2>

    <div className="mb-5">

        <label className="font-semibold">
            Amount
        </label>

        <input
            type="number"
            name="amount"
            value={invoiceData.amount}
            onChange={handleInvoiceChange}
            className="w-full border rounded-xl p-3 mt-2"
            placeholder="Enter amount"
        />

    </div>

    <div className="mb-6">

        <label className="font-semibold">
            Due Date
        </label>

        <input
            type="date"
            name="dueDate"
            value={invoiceData.dueDate}
            onChange={handleInvoiceChange}
            className="w-full border rounded-xl p-3 mt-2"
        />

    </div>

    <button
        onClick={generateInvoice}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
    >
        Save Invoice
    </button>

</div>

)}

</div>

</section>
  );
};

export default ReportDetails;