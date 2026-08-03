import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaSearch,
  FaEye,
  FaTrash,
  FaUserCog,
} from "react-icons/fa";

const ManageRequest = () => {
const [requests, setRequests] = useState([]);
const [technicians, setTechnicians] = useState([]);
const [selectedRequest, setSelectedRequest] = useState(null);
const [selectedTech, setSelectedTech] = useState("");
const [showModal, setShowModal] = useState(false);

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

                      {/* View */}
                      <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
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

                      {/* Delete */}
                      <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
                        <FaTrash />
                      </button>

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

    </section>
  )
}

export default ManageRequest