import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigateTo = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()
    console.log(data)
    if (data.msg == "ok") {
      localStorage.setItem("token", JSON.stringify(data))
      navigateTo("/user-dashboard")
    } else {
      alert(data.msg)
    }
  }

  return (
    <>
      <div
        className='w3-border w3-round-large w3-white'
        style={{
          marginTop: "7% ",
          marginLeft: "35%",
          marginRight: "35%",
          backgroundColor: "azure",
        }}
      >
        <h5 className='w3-padding w3-center' style={{ fontWeight: 500 }}>
          <span className='w3-text-blue'>e-Registration</span>
        </h5>
        <h3 className='w3-center'>
          <b> Welcome back</b>
        </h3>
        <hr />
        <form className='w3-container' onSubmit={loginUser}>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='text'
              placeholder='📧 Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </p>
          <p className='w3-padding'>
            <input
              className='w3-input w3-border w3-block w3-round'
              type='password'
              placeholder='🔑 Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </p>
          <button
            type='submit'
            className='w3-button w3-block w3-blue w3-hover-blue w3-margin-bottom w3-round'
          >
            Sign in
          </button>
          <p className='w3-row' style={{ paddingBottom: "25px" }}>
            <span className='w3-half'>Don't have an account?&nbsp;</span>
            <a href='/sign-up' className='w3-right '>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </>
  )
}
