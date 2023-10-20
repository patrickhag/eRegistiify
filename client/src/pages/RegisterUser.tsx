import { useState } from "react"
import Footer from "../Footer"
import Header from "../Header"
import { useNavigate } from "react-router-dom"

export default function RegisterUser() {
  const navigateTo = useNavigate()
  const [formData, setFormData] = useState({
    names: "",
    password: "",
    contactInfo: "",
    email: "",
    nationalId: "",
    address: "",
  })

  const handleChange = e => {
    e.preventDefault()
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  async function RegisterUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch("http://localhost:3001/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        names: formData.names,
        password: formData.password,
        contactInfo: formData.contactInfo,
        email: formData.email,
        nationalId: formData.nationalId,
        address: formData.address,
      }),
    })
    const data = await response.json()
    if (data.status === "ok") {
      alert(`Registered successfully`)
      navigateTo("/")
    } else {
      alert("Check your info and try again")
    }
  }

  return (
    <>
      <div
        className='w3-border w3-round-large w3-white'
        style={{ marginTop: "7%", marginLeft: "30%", marginRight: "30%" }}
      >
        <h5 className='w3-padding w3-center' style={{ fontWeight: 500 }}>
          <span className='w3-text-blue'>e-Registration</span>
        </h5>
        <h3 className='w3-center'>
          <b> Sign up and get to login</b>
        </h3>
        <hr />
        <form className='w3-container' onSubmit={RegisterUser}>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='text'
              placeholder='Your Names'
              name='names'
              value={formData.names}
              onChange={handleChange}
              required
            />
          </p>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='password'
              placeholder='Your Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </p>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='text'
              placeholder='Your Phone Number'
              name='contactInfo'
              value={formData.contactInfo}
              onChange={handleChange}
              required
            />
          </p>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='email'
              placeholder='Your Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='text'
              placeholder='Your National Id'
              name='nationalId'
              value={formData.nationalId}
              onChange={handleChange}
              required
            />
          </p>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='text'
              placeholder='Your Address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </p>
          <button
            type='submit'
            className='w3-button w3-block w3-blue w3-hover-blue w3-margin-bottom w3-round'
          >
            Register now
          </button>
          <p className='w3-row' style={{ paddingBottom: "25px" }}>
            <span className='w3-half'>Already have an account?</span>
            <a href='/' className='w3-right'>
              Sign in
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
