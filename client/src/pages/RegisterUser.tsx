import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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

  const handleChange = (e: any) => {
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
      navigateTo("/sign-in")
    } else {
      alert("Check your info and try again")
    }
  }

  return (
    <>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            <img
              className='w-8 h-8 mr-2'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
              alt='logo'
            />
            Flowbite
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign up and get to login
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={RegisterUser}>
                <div>
                  <label
                    htmlFor='names'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your names
                  </label>
                  <input
                    type='text'
                    name='names'
                    value={formData.names}
                    onChange={handleChange}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='John doe'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='names'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your phone number
                  </label>
                  <input
                    type='number'
                    name='contactInfo'
                    value={formData.contactInfo}
                    onChange={handleChange}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='+250........'
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
                    value={formData.password}
                    onChange={handleChange}
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='names'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='names'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your national id
                  </label>
                  <input
                    type='number'
                    name='nationalId'
                    value={formData.nationalId}
                    onChange={handleChange}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Your national id'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='names'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your address
                  </label>
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='KK 123 St'
                    required
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor='confirm-password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Confirm password
                  </label>
                  <input
                    type='confirm-password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div> */}
                <button
                  type='submit'
                  className='w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-830'
                >
                  Create an account
                </button>

                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account?{" "}
                  <Link
                    to={"/sign-in"}
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Login here
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
