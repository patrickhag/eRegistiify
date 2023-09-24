import { BrowserRouter, Route, Routes } from "react-router-dom"
import Application from "./pages/RegisterPhone"
import RegisterUser from "./pages/RegisterUser"
import Login from "./pages/LoginUser"
import Dashboard from "./pages/Dashboard"
import Items from "./pages/Items"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/sign-up' element={<RegisterUser />}></Route>
          <Route path='/sign-in' element={<Login />}></Route>
          <Route path='/create' element={<Application />}></Route>
          <Route path='/items' element={<Items />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
