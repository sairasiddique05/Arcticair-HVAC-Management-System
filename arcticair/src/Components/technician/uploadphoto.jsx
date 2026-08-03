import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { FaCamera, FaUpload } from "react-icons/fa";

const UploadPhoto = () => {
    const [beforePhoto, setBeforePhoto] = useState(null);
  const [afterPhoto, setAfterPhoto] = useState(null);
  const { jobId } = useParams();
const navigate = useNavigate();

const handleSubmit = async () => {
  try {
    const images = [];

    if (beforePhoto) images.push(beforePhoto.name);
    if (afterPhoto) images.push(afterPhoto.name);

    await API.put(`/requests/${jobId}/photos`, {
      images,
    });

    alert("Photos uploaded successfully!");

    navigate(`/techdashboard/jobs/${jobId}`);
  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};



  return (
   <section className="p-8 bg-slate-100 min-h-screen">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Upload Service Photos
        </h1>

        <p className="text-gray-600 mt-2">
          Upload before and after service photos for the completed HVAC job.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Before Photo */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex items-center gap-3 mb-6">
            <FaCamera className="text-2xl text-[#0F4C81]" />
            <h2 className="text-xl font-bold text-[#0F4C81]">
              Before Service
            </h2>
          </div>

          <label className="border-2 border-dashed border-gray-300 rounded-xl h-72 flex flex-col justify-center items-center cursor-pointer hover:border-[#0F4C81] transition">

            {beforePhoto ? (
              <img
                src={URL.createObjectURL(beforePhoto)}
                alt="Before"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <FaUpload className="text-5xl text-gray-400 mb-4" />
                <p className="text-gray-500">
                  Click to upload photo
                </p>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setBeforePhoto(e.target.files[0])}
            />

          </label>

        </div>

        {/* After Photo */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <div className="flex items-center gap-3 mb-6">
            <FaCamera className="text-2xl text-green-600" />
            <h2 className="text-xl font-bold text-[#0F4C81]">
              After Service
            </h2>
          </div>

          <label className="border-2 border-dashed border-gray-300 rounded-xl h-72 flex flex-col justify-center items-center cursor-pointer hover:border-green-600 transition">

            {afterPhoto ? (
              <img
                src={URL.createObjectURL(afterPhoto)}
                alt="After"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <>
                <FaUpload className="text-5xl text-gray-400 mb-4" />
                <p className="text-gray-500">
                  Click to upload photo
                </p>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setAfterPhoto(e.target.files[0])}
            />

          </label>

        </div>

      </div>

      {/* Button */}
      <div className="mt-8 text-center">

       <button
  onClick={handleSubmit}
  className="bg-[#0F4C81] hover:bg-blue-900 text-white px-10 py-3 rounded-xl font-semibold transition"
>
  Save Photos
</button>

      </div>

    </section>
  )
}

export default UploadPhoto