import React from 'react'
import TechSideBar from '../Components/technician/techsidebar'
import { Outlet } from 'react-router-dom'
import TechtopNavbar from '../Components/technician/techtopnavbar'


const TechnicianDashboard = () => {
  return (
   <>
     <div className="flex">

   <TechSideBar/>

      <div className="flex-1 bg-slate-100 min-h-screen">

      <TechtopNavbar/>

       <Outlet/>

      </div>

    </div>
   </>
  )
}

export default TechnicianDashboard