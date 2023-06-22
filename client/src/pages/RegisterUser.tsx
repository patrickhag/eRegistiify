import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    names: "",
    password: "",
    contactInfo: "",
    email: "",
    nationalId: "",
    address: "",
  });

  const handleChange = e => {
    e.preventDefault();
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  async function RegisterUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    });
    const data = await response.json();
    if (data.status === "ok") {
      alert(`Registered successfully`);
      navigateTo("/sign-in");
    } else {
      alert("Check your info and try again");
    }
  }

  return (
    <>
      <Header />
      <div
        className='w3-border w3-round-large w3-white'
        style={{ marginTop: "10%", marginLeft: "30%", marginRight: "30%" }}
      >
        <h5 className='w3-padding' style={{ fontWeight: 500 }}>
          Register and get to login.
        </h5>
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
            />
          </p>
          <button
            type='submit'
            className='w3-button w3-block w3-blue w3-hover-blue w3-margin-bottom w3-round'
          >
            Register now!
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
