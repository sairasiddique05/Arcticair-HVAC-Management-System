import React from 'react'
import StatCards from './statcards'
import RecentRequest from './recentrequest'
import UpcommingMaintenance from './upcommingmaintenance'

const DashboardHome = () => {
  return (
  <div className="p-8">

      <h1 className="text-3xl font-bold text-[#0F4C81] mb-2">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome back! Here's an overview of your HVAC account.
      </p>

    <StatCards/>
     <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <RecentRequest/>

       <UpcommingMaintenance/>

      </div>

    </div>
  )
}

export default DashboardHome