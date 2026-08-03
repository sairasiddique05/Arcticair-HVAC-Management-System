import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
  FaCircle,
} from "react-icons/fa";


const ManageTech = () => {
  const [showEditModal, setShowEditModal] = useState(false);
const [editData, setEditData] = useState({
  _id: "",
  name: "",
  email: "",
  phone: "",
});
  const [technicians, setTechnicians] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
const [showViewModal, setShowViewModal] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
});

  useEffect(() => {
  fetchTechnicians();
}, []);

const fetchTechnicians = async () => {
  try {
    const res = await API.get("/technicians");

    setTechnicians(res.data.technicians);

  } catch (error) {
    console.log(error);
  }
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async () => {
  try {
    await API.post("/technicians", formData);

    alert("Technician Added Successfully!");

    // Close Modal
    setShowModal(false);

    // Clear Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    // Refresh Table
    fetchTechnicians();

  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};

const handleView = (tech) => {
  setSelectedTech(tech);
  setShowViewModal(true);
};

const handleEdit = (tech) => {
  setEditData({
    _id: tech._id,
    name: tech.name,
    email: tech.email,
    phone: tech.phone,
  });

  setShowEditModal(true);
};

const updateTechnician = async () => {
  try {
    await API.put(`/technicians/${editData._id}`, {
      name: editData.name,
      email: editData.email,
      phone: editData.phone,
    });

    alert("Technician Updated Successfully!");

    setShowEditModal(false);

    fetchTechnicians();

  } catch (error) {
    alert(error.response?.data?.message || "Update Failed");
  }
};

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this technician?"
  );

  if (!confirmDelete) return;

  try {
    await API.delete(`/technicians/${id}`);

    alert("Technician deleted successfully!");

    fetchTechnicians();

  } catch (error) {
    alert(error.response?.data?.message || "Delete Failed");
  }
};

   const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "text-green-500";

      case "On Job":
        return "text-orange-500";

      case "Offline":
        return "text-gray-400";

      default:
        return "text-gray-400";
    }
  };
  return (
    <section className="p-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#0F4C81]">
            Manage Technicians
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage all HVAC technicians.
          </p>
        </div>

       <button
  onClick={() => setShowModal(true)}
  className="bg-[#0F4C81] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition"
>
  + Add Technician
</button>

      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search technician..."
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
                <th className="px-6 py-4 text-center">Assigned Jobs</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {technicians.map((tech) => (

                <tr
                  key={tech.id}
                  className="border-b hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-5 font-semibold">
                     {tech._id.slice(-6).toUpperCase()}
                  </td>

                  <td className="px-6 py-5">
                    {tech.name}
                  </td>

                  <td className="px-6 py-5">
                    {tech.email}
                  </td>

                  <td className="px-6 py-5">
                    {tech.phone}
                  </td>

                  <td className="px-6 py-5 text-center">
                    0
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center items-center gap-2">

                      <FaCircle className={`text-xs ${getStatusColor("Available")}`} />

                      <span>Available</span>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                    <button
  onClick={() => handleView(tech)}
  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
>
  <FaEye />
</button>

                      <button
  onClick={() => handleEdit(tech)}
  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
>
  <FaEdit />
</button>

<button
  onClick={() => handleDelete(tech._id)}
  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
>
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
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Add Technician
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F4C81]"
        />

      </div>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setShowModal(false)}
          className="px-5 py-2 rounded-lg border"
        >
          Cancel
        </button>

        <button
  onClick={handleSubmit}
  className="bg-[#0F4C81] text-white px-5 py-2 rounded-lg hover:bg-blue-900"
>
  Create Technician
</button>

      </div>

    </div>
  </div>
)}



{showViewModal && selectedTech && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Technician Details
      </h2>

      <div className="space-y-4">

        <p><strong>Name:</strong> {selectedTech.name}</p>

        <p><strong>Email:</strong> {selectedTech.email}</p>

        <p><strong>Phone:</strong> {selectedTech.phone}</p>

        <p><strong>Role:</strong> {selectedTech.role}</p>

        <p>
          <strong>Status:</strong> Available
        </p>

      </div>

      <div className="flex justify-end mt-6">

        <button
          onClick={() => setShowViewModal(false)}
          className="bg-[#0F4C81] text-white px-5 py-2 rounded-lg"
        >
          Close
        </button>

      </div>

    </div>
  </div>
)}


{showEditModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        Edit Technician
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          value={editData.name}
          onChange={(e) =>
            setEditData({ ...editData, name: e.target.value })
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          value={editData.email}
          onChange={(e) =>
            setEditData({ ...editData, email: e.target.value })
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="text"
          value={editData.phone}
          onChange={(e) =>
            setEditData({ ...editData, phone: e.target.value })
          }
          className="w-full border rounded-lg px-4 py-3"
        />

      </div>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={() => setShowEditModal(false)}
          className="border px-5 py-2 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={updateTechnician}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          Update
        </button>

      </div>

    </div>
  </div>
)}


    </section>
  )
}

export default ManageTech