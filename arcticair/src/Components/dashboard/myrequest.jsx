import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";


const MyRequest = () => {
  const [requests, setRequests] = useState([]);

const user = JSON.parse(localStorage.getItem("user"));

useEffect(() => {
  fetchRequests();
}, []);

const fetchRequests = async () => {
  try {
    const res = await API.get(`/requests/customer/${user._id}`);
    setRequests(res.data);
  } catch (err) {
    console.log(err);
  }
};

    const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "In Progress":
        return "bg-purple-100 text-purple-700";

      case "Completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
   <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-[#0F4C81]">
          My Service Requests
        </h1>

        <p className="text-gray-600 mt-2">
          Track the progress of all your HVAC service requests.
        </p>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F4C81] text-white">

              <tr>

                <th className="px-6 py-4 text-left">Request ID</th>

                <th className="px-6 py-4 text-left">Service</th>

                <th className="px-6 py-4 text-left">Date</th>

                <th className="px-6 py-4 text-left">Technician</th>

                <th className="px-6 py-4 text-center">Status</th>

                <th className="px-6 py-4 text-center">Action</th>

              </tr>

            </thead>

           <tbody>

  {requests.length === 0 ? (

    <tr>
      <td
        colSpan="6"
        className="text-center py-10 text-gray-500"
      >
        No Service Requests Found
      </td>
    </tr>

  ) : (

    requests.map((request) => (

      <tr
        key={request._id}
        className="border-b hover:bg-slate-50 transition"
      >

        <td className="px-6 py-5 font-semibold">
          {request._id.slice(-6).toUpperCase()}
        </td>

        <td className="px-6 py-5">
          {request.serviceType}
        </td>

        <td className="px-6 py-5">
          {new Date(request.preferredDate).toLocaleDateString()}
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

        <td className="px-6 py-5 text-center">

         <Link
  to={`/request/${request._id}`}
  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto w-fit transition"
>
  <FaEye />
  View
</Link>

        </td>

      </tr>

    ))

  )}

</tbody>

          </table>

        </div>

      </div>

    </section>
  )
}

export default MyRequest