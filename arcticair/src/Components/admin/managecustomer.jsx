import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";



const ManageCustomers = () => {
const [customers, setCustomers] = useState([]);


useEffect(() => {
  fetchCustomers();
}, []);

const fetchCustomers = async () => {
  try {
    const res = await API.get("/users/customers");
    setCustomers(res.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <section className="p-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#0F4C81]">
            Manage Customers
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage all registered customers.
          </p>
        </div>

        <button className="bg-[#0F4C81] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition">
          + Add Customer
        </button>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search customer..."
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
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">City</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>
  {customers.length === 0 ? (
    <tr>
      <td colSpan="6" className="text-center py-8 text-gray-500">
        No customers found.
      </td>
    </tr>
  ) : (
    customers.map((customer) => (
      <tr
        key={customer._id}
        className="border-b hover:bg-slate-50 transition"
      >
        <td className="px-6 py-5 font-semibold">
          {customer._id.slice(-6).toUpperCase()}
        </td>

        <td className="px-6 py-5">
          {customer.name}
        </td>

        <td className="px-6 py-5">
          {customer.email}
        </td>

        <td className="px-6 py-5">
          {customer.phone}
        </td>

        <td className="px-6 py-5">
          {customer.role}
        </td>

        <td className="px-6 py-5">
          <div className="flex justify-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
              <FaEye />
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg">
              <FaEdit />
            </button>

            <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
              <FaTrash />
            </button>
          </div>
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

export default ManageCustomers