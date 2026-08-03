import React from 'react'
import TechstatCards from './tecstatcards'
import TodayJobs from './todayjob'
import UpcomingSchedule from './upcomingschedule'

const TechdashboardHome = () => {
  return (
   <div className="p-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F4C81]">
          Technician Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back! Here's an overview of your assigned HVAC jobs.
        </p>
      </div>

      {/* Statistics Cards */}
      <TechstatCards/>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-8">

      <TodayJobs/>

        <UpcomingSchedule/>

      </div>

    </div>
  )
}

export default TechdashboardHome