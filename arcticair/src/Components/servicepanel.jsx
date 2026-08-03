import React, { useState } from 'react'
import progressBar from './progressbar';
import selectService from './selectservice';

const ServicePanel = ({ show, onClose }) => {
 

    const [step, setStep] = useState (1);

const [bookingData, setBookingData] = useState({
  service: "",});
     if (!show) return null;
  return (
 <div className="fixed inset-0 bg-black/50 z-40">
      <div className="absolute top-0 left-0 w-full bg-white rounded-b-3xl shadow-2xl">

        <div className="max-w-7xl mx-auto px-8 py-10">

          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold">
                Schedule Your Service
              </h2>

              <p className="text-gray-500 mt-2">
                Choose the service you need.
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-4xl font-bold"
            >
              ×
            </button>
          </div>
 {/* Progress Bar */}
          <progressBar step={step} />

          {/* 👇 WRITE THE STEP CODE HERE */}
          {step === 1 && (
            <service
              bookingData={bookingData}
              setBookingData={setBookingData}
              nextStep={() => setStep(2)}
            />
          )}
          {/* We'll add service cards here later */}

        </div>

      </div>
    </div>
  )
}

export default ServicePanel