import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
      navigateTo("/register-device")
    } else {
      alert(data.msg)
    }
  }

  return (
    <>
      {/* <div
        className='w3-border w3-round-large w3-white'
        style={{
          marginTop: "7% ",
          marginLeft: "35%",
          marginRight: "35%",
          backgroundColor: "azure",
        }}
      >
        <h5 className='w3-padding w3-center' style={{ fontWeight: 500 }}>
          <span className='w3-text-blue'>DeviceGUARD</span>
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
      </div> */}
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            DeviceGUARD
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Login with your account
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={loginUser}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='John Doe'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='terms'
                      aria-describedby='terms'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label
                      htmlFor='terms'
                      className='font-light text-gray-500 dark:text-gray-300'
                    >
                      I accept the{" "}
                      <a
                        className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                        href='#'
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-830'
                >
                  Login
                </button>

                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don't have an account?{" "}
                  <Link
                    to={"/sign-up"}
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
