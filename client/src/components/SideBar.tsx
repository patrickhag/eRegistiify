import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function Sidebar() {
  const w3Open = () => {
    const sidebarElement = document.getElementById("mySidebar")
    const overlayElement = document.getElementById("myOverlay")

    if (sidebarElement && overlayElement) {
      sidebarElement.style.display = "block"
      overlayElement.style.display = "block"
    }
  }

  const w3Close = () => {
    const sidebarElement = document.getElementById("mySidebar")
    const overlayElement = document.getElementById("myOverlay")

    if (sidebarElement && overlayElement) {
      sidebarElement.style.display = "none"
      overlayElement.style.display = "none"
    }
  }

  useEffect(() => {
    w3Close()
  }, [])

  // const [redirect, setRedirect] = useState(false)
  const navigateTo = useNavigate()
  // const loggedIn = localStorage.getItem("token")

  const logout = () => {
    localStorage.clear()
    navigateTo("/")
  }

  // useEffect(() => {
  //   if (redirect) {
  //     navigateTo("/")
  //   }
  // }, [loggedIn, navigateTo, redirect])

  return (
    <div>
      <nav
        className='w3-sidebar w3-blue w3-collapse w3-top w3-large w3-padding'
        style={{ zIndex: 3, width: "300px", fontWeight: "bold" }}
        id='mySidebar'
      >
        <Link
          to={"#"}
          onClick={w3Close}
          className='w3-button w3-hide-large w3-display-topleft'
          style={{ width: "100%", fontSize: "22px" }}
        >
          Close Menu
        </Link>
        <div className='w3-container w3-hide-medium'>
          <h3 className='w3-padding-64'>
            <b>DeviceGUARD</b>
          </h3>
        </div>
        <div className='w3-bar-block'>
          <Link
            to={"/register-device"}
            className='w3-bar-item w3-button w3-round w3-hover-white'
          >
            <i className='fa fa-plus'></i> Register new item
          </Link>
          <Link
            to={"/track-device"}
            className='w3-bar-item w3-button w3-round w3-hover-white'
          >
            <i className='fa fa-map-marker'></i> Track Device
          </Link>

          <Link
            to={"#"}
            className='w3-bar-item w3-button w3-round w3-hover-white'
          >
            <i className='fa fa-search'></i> Search lost device
          </Link>
          <Link
            to={"/items"}
            className='w3-bar-item w3-button w3-round w3-hover-white'
          >
            <i className='fa fa-th-list'></i> My items
          </Link>
          <button
            onClick={logout}
            className='w3-bar-item w3-button w3-hover-white w3-display-bottomleft	'
          >
            <i className='fa fa-sign-out'></i> Logout
          </button>
        </div>
      </nav>

      <header className='w3-container w3-top w3-hide-large w3-blue w3-xlarge w3-padding'>
        <Link
          to={"#"}
          className='w3-button w3-blue w3-margin-right'
          onClick={w3Open}
        >
          ☰
        </Link>
        <span>DeviceGUARD</span>
      </header>
      <div
        className='w3-overlay w3-hide-large'
        onClick={w3Close}
        style={{ cursor: "pointer" }}
        title='close side menu'
        id='myOverlay'
      ></div>
    </div>
  )
}
