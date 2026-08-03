import React from 'react'

const progressBar = ({step}) => {
      const stepTitles = [
    "Select Service",
    "Property & HVAC System",
    "Schedule Appointment",
    "Customer Information",
    "Describe Your Issue",
  ];
  return (
  <div className="mb-10">

      {/* Heading */}
      <div className="flex justify-between items-center mb-4">

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            {stepTitles[step - 1]}
          </h2>

          <p className="text-gray-500 mt-1">
            Step {step} of 5
          </p>
        </div>

        <div className="text-right">
          <p className="text-sky-600 font-bold text-lg">
            {Math.round((step / 5) * 100)}%
          </p>
        </div>

      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-sky-600 transition-all duration-500"
          style={{
            width: `${(step / 5) * 100}%`,
          }}
        ></div>

      </div>

      {/* Step Labels */}
      <div className="flex justify-between mt-4 text-sm">

        {stepTitles.map((title, index) => (

          <div
            key={index}
            className={`flex flex-col items-center w-1/5 ${
              step === index + 1
                ? "text-sky-600 font-semibold"
                : step > index + 1
                ? "text-green-600"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 border-2 ${
                step > index + 1
                  ? "bg-green-600 border-green-600 text-white"
                  : step === index + 1
                  ? "bg-sky-600 border-sky-600 text-white"
                  : "border-gray-300 bg-white"
              }`}
            >
              {step > index + 1 ? "✓" : index + 1}
            </div>

            <span className="text-center text-xs">
              {title}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default progressBar