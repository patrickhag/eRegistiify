import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "./pages/RegisterPhone";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/LoginUser";
import Dashboard from "./pages/Dashboard";
import { UserContextProvider } from "./UserContext";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/sign-up' element={<RegisterUser />}></Route>
            <Route path='/sign-in' element={<Login />}></Route>
            <Route path='/create' element={<Application />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}
