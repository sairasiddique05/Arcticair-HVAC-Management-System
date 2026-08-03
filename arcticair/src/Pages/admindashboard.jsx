import React from 'react'
import AdminSidebar from '../Components/admin/adminsidebar'
import { Outlet } from 'react-router-dom'
import AdmintopNavbar from '../Components/admin/admintopNavbar'

const AdminDashboard = () => {
  return (
   <div className="flex">

      {/* Sidebar */}
     <AdminSidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 min-h-screen">

      <AdmintopNavbar/>

        <Outlet />

      </div>

    </div>
  )
}

export default AdminDashboard