import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home'
import Login from './Pages/login'
import Register from './Pages/register'
import RequestS from './Pages/requests'
import AboutHero from './Components/abouthero'
import AboutUs from './Pages/aboutus'
import CompanyIntro from './Components/companyintro'
import Services from './Pages/services'
import Maintenace from './Pages/maintenace'
import ServiceArea from './Pages/servicearea'
import RequestQuote from './Pages/requestquote'
import Contact from './Pages/contact'
import CustomerDashboard from './Pages/customerdashboard'
import DashboardHome from './Components/dashboard/dashboardhome'
import MyRequest from './Components/dashboard/myrequest'
import MyQuotes from './Components/dashboard/myquotes'
import MyInvoice from './Components/dashboard/myinvoice'
import MaintenancePlan from './Components/dashboard/maintenenceplan'
import MyProfile from './Components/dashboard/myprofile'
import TechnicianDashboard from './Pages/techniciandashboard'
import TechdashboardHome from './Components/technician/techdashboardhome'
import AssignJobs from './Components/technician/asignjob'
import UploadPhoto from './Components/technician/uploadphoto'
import TechProfile from './Components/technician/techprofile'
import ServiceReport from './Components/technician/servicereport'
import JobDetails from './Components/technician/jobdetail'
import AdminDashboard from './Pages/admindashboard'
import AdmindashboardHome from './Components/admin/admindashboarhome'
import ManageRequest from './Components/admin/managerequest'
import ManageCustomers from './Components/admin/managecustomer'
import ManageTech from './Components/admin/managetech'
import ManageQuotes from './Components/admin/managequotes'
import ManageInvoice from './Components/admin/manageinvoice'
import Reports from './Components/admin/reports'
import Settings from './Components/admin/settings'
import ProtectedRoute from './Components/protectedroute'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/requests' element={<RequestS/>}/>
      <Route path='/abouthero' element={<AboutHero/>}/>
      <Route path='/about' element={<AboutUs/>}/>
 <Route path='/servicep' element={<Services/>}/>
 <Route path='/maintenance' element={<Maintenace/>}/>
 <Route path='/area' element={<ServiceArea/>}/>
 <Route path='/rquote' element={<RequestQuote/>}/>
 <Route path='/contact' element={<Contact/>}/>

 <Route path='/customerdashboard' element={<ProtectedRoute allowedRole="customer"><CustomerDashboard/></ProtectedRoute>}>
  <Route index element={<DashboardHome/>} />
  <Route path="dashrequests" element={<MyRequest/>} />
  <Route path="dashquotes" element={<MyQuotes/>} />
  <Route path="invoices" element={<MyInvoice/>} />
  <Route path="dashmaintenance" element={<MaintenancePlan/>} />
  <Route path="profile" element={<MyProfile/>} />
</Route>

<Route path='/techdashboard' element={<ProtectedRoute allowedRole="technician"><TechnicianDashboard/></ProtectedRoute>}>
 <Route index element={<TechdashboardHome/>} />
<Route path="jobs" element={<AssignJobs/>}/>
<Route path="photos" element={<UploadPhoto/>}/>
<Route path="report/:jobId" element={<ServiceReport />}/>
<Route path="profile" element={<TechProfile/>}/>
<Route path="jobs/:jobId" element={<JobDetails/>}/>
</Route>

<Route path="/admindashboard" element={<ProtectedRoute allowedRole="admin"><AdminDashboard/></ProtectedRoute>}>
  <Route index element={<AdmindashboardHome/>} />
  <Route path="customers" element={<ManageCustomers />} />
  <Route path="technicians" element={<ManageTech />} />
  <Route path="requests" element={<ManageRequest/>} />
  <Route path="quotes" element={<ManageQuotes/>} />
  <Route path="invoices" element={<ManageInvoice/>} />
  <Route path="reports" element={<Reports />} />
  <Route path="settings" element={<Settings/>} />
</Route>


</Routes>


  )
}

export default App
