import React, { useState } from "react"
import "./styles.css"

export default function Header() {
  const [showBottomBorder, setShowBottomBorder] = useState(false)

  const handleMouseEnter = () => {
    setShowBottomBorder(true)
  }

  const handleMouseLeave = () => {
    setShowBottomBorder(false)
  }

  const linkClass = `w3-bar-item w3-button w3-right w3-hover-none w3-hover-text-purple w3-text-purple  w3-margin-right ${
    showBottomBorder ? "w3-border-bottom" : ""
  }`

  return (
    <div className='w3-bar home--header'>
      <a
        href='#'
        className={linkClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Contact
      </a>
      <a
        href='#'
        className={linkClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Pricing
      </a>
      <a
        href='#'
        className={linkClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Services
      </a>
      <a
        href='#'
        className={`${linkClass} w3-border-bottom`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </a>
    </div>
  )
}
