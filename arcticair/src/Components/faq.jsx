import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const FaQ = () => {
     const faqs = [
    {
      question: "What is included in a maintenance plan?",
      answer:
        "Our maintenance plans include scheduled HVAC inspections, system cleaning, priority service, repair discounts, and preventive maintenance to keep your system running efficiently.",
    },
    {
      question: "How often should my HVAC system be serviced?",
      answer:
        "We recommend servicing your HVAC system at least twice a year—once before summer and once before winter—to maintain peak performance.",
    },
    {
      question: "Do you provide 24/7 emergency HVAC services?",
      answer:
        "Yes. Our certified technicians are available 24/7 for emergency heating and cooling repairs.",
    },
    {
      question: "Can I upgrade my maintenance plan later?",
      answer:
        "Absolutely! You can upgrade your plan at any time to enjoy additional benefits and priority support.",
    },
    {
      question: "Do maintenance plans include repair discounts?",
      answer:
        "Yes. Depending on your selected plan, you'll receive discounts on labor, repairs, and replacement parts.",
    },
    {
      question: "How do I schedule my maintenance visit?",
      answer:
        "Simply log into your customer dashboard or contact our support team to book your preferred maintenance date.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <section className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-orange-500 uppercase font-semibold tracking-widest">
            FAQ
          </span>

          <h2 className="text-4xl font-bold text-[#0F4C81] mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to common questions about our HVAC maintenance plans
            and services.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-[#0F4C81]">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <FaMinus className="text-orange-500" />
                ) : (
                  <FaPlus className="text-[#0F4C81]" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7 border-t">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default FaQ