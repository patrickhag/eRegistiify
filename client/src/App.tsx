import { BrowserRouter, Route, Routes } from "react-router-dom"
import Application from "./pages/RegisterPhone"
import RegisterUser from "./pages/RegisterUser"
import Login from "./pages/LoginUser"
import Items from "./pages/Items"
import UserDashboard from "./pages/Dashboard"
import Dashboard from "./admin/Dashboard"
import "./styles.css"

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/sign-up' element={<RegisterUser />}></Route>
          <Route path='/user-dashboard' element={<UserDashboard />}></Route>
          <Route path='/register-device' element={<Application />}></Route>
          <Route path='/items' element={<Items />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
