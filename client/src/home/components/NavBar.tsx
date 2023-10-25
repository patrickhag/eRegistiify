import { useState } from "react"
import { Link } from "react-router-dom"

type ref = any
type navT = {
  refs: [ref, ref, ref, ref]
}

const NavBar = ({ refs }: navT) => {
  const [ref1, ref2, ref3, ref4] = refs

  const scrollToSection = (elementRef: ref) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  const [activeLink, setActiveLink] = useState(0)

  return (
    <div className='flex items-center top-0 bg-gradient-to-b from-sky-300 to-sky-50 py-4 h-[80px] shadow-md sticky justify-between px-12 gap-8'>
      <div className='text-2xl tracking-lg font-extrabold'>
        <Link to={"/"}>
          {" "}
          <span className='text-sky-600'>Device</span>Guard
        </Link>
      </div>
      <ul className='hidden md:flex gap-4'>
        <li
          onClick={() => {
            scrollToSection(ref1)
            setActiveLink(0)
          }}
          className={`hover:border-b-4 h-[70px] flex items-center hover:border-teal-600 cursor-pointer ${
            activeLink == 0 ? " border-teal-600 border-b-4 " : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(ref2)
            setActiveLink(1)
          }}
          className={`hover:border-b-4 h-[70px] flex items-center hover:border-teal-600 cursor-pointer ${
            activeLink === 1 ? "border-teal-600 border-b-4" : ""
          }`}
        >
          Eco tips
        </li>
        <li
          onClick={() => {
            scrollToSection(ref3)
            setActiveLink(3)
          }}
          className={`hover:border-b-4 h-[70px] flex items-center hover:border-teal-600 cursor-pointer ${
            activeLink === 3 ? "active" : ""
          }`}
        >
          Features
        </li>
        <Link to={"/sign-in"}>
          <li
            onClick={() => {
              scrollToSection(ref4)
              setActiveLink(2)
            }}
            className={`hover:border-b-4 h-[70px] flex items-center hover:border-teal-600 cursor-pointer ${
              activeLink === 2 ? "active" : ""
            }`}
          >
            Login
          </li>
        </Link>
      </ul>
      <i className='fa fa-bars md:hidden'></i>
    </div>
  )
}

export default NavBar
