import React from 'react'
import AdminstatCards from './adminstatCards'
import RecentRequest from './recentrequest'
import TechActivity from './techactivity'

const AdmindashboardHome = () => {
  return (
 <div className="p-8">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back! Here's an overview of your HVAC business.
        </p>

      </div>

      {/* Statistics */}
  <AdminstatCards/>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-8">

     <RecentRequest/>

        <TechActivity/>

      </div>

    </div>
  )
}

export default AdmindashboardHome