import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Sidebar() {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false)

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

  const toggleAccordion = () => {
    setIsAccordionVisible(!isAccordionVisible)
  }
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
        <div className='w3-container'>
          <h3 className='w3-padding-64'>
            <b>e-Registration</b>
          </h3>
        </div>
        <div className='w3-bar-block'>
          <Link
            to={"/register-device"}
            onClick={w3Close}
            className='w3-bar-item w3-button w3-round'
          >
            <i className='fa fa-plus'></i> Register new item
          </Link>
          <Link
            to={"#"}
            onClick={w3Close}
            className='w3-bar-item w3-button w3-round'
          >
            <i className='fa fa-map-marker'></i> Track Device
          </Link>
          <Link
            to={"#"}
            onClick={w3Close}
            className='w3-bar-item w3-button w3-round'
          >
            <i className='fa fa-dollar'></i> Subscribe
          </Link>
          <Link
            to={"#"}
            onClick={w3Close}
            className='w3-bar-item w3-button w3-round'
          >
            <i className='fa fa-search'></i> Search lost device
          </Link>
          <Link
            to={"/items"}
            onClick={w3Close}
            className='w3-bar-item w3-button w3-round'
          >
            <i className='fa fa-th-list'></i> My items
          </Link>
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
        <span>Rinda App</span>
      </header>

      <div
        className='w3-overlay w3-hide-large'
        onClick={w3Close}
        style={{ cursor: "pointer" }}
        title='close side menu'
        id='myOverlay'
      ></div>
      <div className='w3-bar w3-card'>
        <p className='w3-bar-item w3-right' onClick={toggleAccordion}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            style={{ fill: "rgba(0, 0, 0, 1)" }}
          >
            <path d='M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z'></path>
          </svg>
        </p>
        <div className={`${isAccordionVisible ? "w3-show" : ""}`}>
          <a className='w3-button w3-left-align w3-text-black'>Link 1</a>
          <a className='w3-button w3-left-align w3-text-black'>Link 2</a>
          <a className='w3-button w3-left-align w3-text-black'>Link 3</a>
        </div>
      </div>
    </div>
  )
}
