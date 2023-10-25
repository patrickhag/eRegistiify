import { BrowserRouter, Route, Routes } from "react-router-dom"
import Application from "./pages/RegisterPhone"
import RegisterUser from "./pages/RegisterUser"
import Items from "./pages/Items"
import UserDashboard from "./pages/Dashboard"
import "./styles.css"
import HomePage from "./home/HomePage"
import Login from "./pages/LoginUser"
import TrackDevice from "./components/TrackDevice"

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sign-up' element={<RegisterUser />}></Route>
          <Route path='/sign-in' element={<Login />}></Route>
          <Route path='/user-dashboard' element={<UserDashboard />}></Route>
          <Route path='/register-device' element={<Application />}></Route>
          <Route path='/items' element={<Items />}></Route>
          <Route path='/track-device' element={<TrackDevice />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
