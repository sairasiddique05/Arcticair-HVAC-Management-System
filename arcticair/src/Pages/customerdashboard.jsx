import React from 'react'
import SideBar from '../Components/dashboard/sidebar'
import TopNavbar from '../Components/dashboard/topnavbar'
import DashboardHome from '../Components/dashboard/dashboardhome'
import MyRequest from '../Components/dashboard/myrequest'
import { Outlet } from 'react-router-dom'

const CustomerDashboard = () => {
  return (
   <div className="flex">

      <SideBar/>

      <div className="flex-1 bg-slate-100 min-h-screen">

        <TopNavbar />
        <Outlet/>

        {/* <div className="p-8">
         <MyRequest/>
        </div> */}

      </div>

    </div>
  )
}

export default CustomerDashboard