import React, { useState } from 'react'
import heroImage from '../assets/hero.jpg'
import ServicePanel from './servicepanel';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [showServicePanel, setShowServicePanel] = useState(false);
  return (
    <div>
        <ServicePanel
        show={showServicePanel}
       onClose ={() => setShowServicePanel(false)}/>

         <section className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">

        <div className="max-w-2xl text-white">
          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Comfort You
            <br />
            Can Count On.
          </h1>

          <p className="text-xl text-gray-200 mt-8 leading-9">
            Professional heating, cooling, repair and maintenance
            services delivered by certified HVAC technicians.
            Fast response. Honest pricing. Reliable comfort.
          </p>
       <div className="flex gap-3">
          <Link
            to="/login"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#0F4C81] transition"
          >
           Request Service
          </Link>
        </div>

{/* <button
  onClick={() => setShowServicePanel(true)}
  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold transition"
>
  Schedule Service
</button> */}

          {/* Trust */}
          <div className="flex flex-wrap gap-8 mt-12">
            <div>
              <h2 className="text-orange-600 text-2xl font-bold">
                ★★★★★
              </h2>

              <p className="text-gray-300">
                4.9 Customer Rating
              </p>
            </div>

            <div>
              <h2 className="text-orange-600 text-2xl font-bold">
                24/7
              </h2>

              <p className="text-gray-300">
                Emergency Service
              </p>
            </div>

            <div>
              <h2 className="text-orange-600 text-2xl font-bold">
                15+
              </h2>

              <p className="text-gray-300">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Hero