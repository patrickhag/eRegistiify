import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:9001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data.id);

    if (data.msg === "ok") {
      localStorage.setItem("token", JSON.stringify(data));
      navigateTo("/");
    } else {
      alert(data.msg);
    }
  }

  return (
    <>
      <Header />
      <div
        className='w3-border w3-round-large w3-white'
        style={{ marginTop: "13%", marginLeft: "35%", marginRight: "35%" }}
      >
        <h5 className='w3-padding' style={{ fontWeight: 500 }}>
          Login and get to <span className='w3-text-teal'>registiify</span>.
        </h5>
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
            className='w3-button w3-block w3-blue w3-hover-blue w3-margin-bottom'
          >
            Sign in
          </button>
          <p className='w3-row' style={{ paddingBottom: "25px" }}>
            <span className='w3-half'>
              Or &nbsp;
              <a href='/sign-up'>sign up now!</a>
            </span>
            <a href='#' className='w3-half'>
              Forgot password?
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
