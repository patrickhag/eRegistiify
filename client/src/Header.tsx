import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Header() {
  const [redirect, setRedirect] = useState(false);
  const navigateTo = useNavigate();
  const { id } = useParams();
  const loggedIn = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    setRedirect(prev => !prev);
  };

  useEffect(() => {
    if (redirect) {
      navigateTo("/");
    }
  }, [loggedIn, navigateTo, redirect]);

  return (
    <div className=''>
      <div className='w3-bar w3-teal'>
        <h3 className=''>
          <a
            href='/'
            className='w3-bar-item w3-button w3-mobile w3-center w3-hover-none'
          >
            eRegistify
          </a>
        </h3>
        <div className='w3-right'>
          <a href='#' className='w3-bar-item w3-button w3-mobile'>
            Home
          </a>
          <a href='#' className='w3-bar-item w3-button w3-mobile'>
            Services
          </a>
          <div className='w3-dropdown-hover'>
            <button className='w3-button'>
              About <i className='fa fa-caret-down'></i>
            </button>
            <div className='w3-dropdown-content w3-bar-block w3-dark-grey'>
              <a href='#' className='w3-bar-item w3-button w3-mobile'>
                About DeviceGUARD
              </a>
              <a href='#' className='w3-bar-item w3-button w3-mobile'>
                Registration help
              </a>
              <a href='#' className='w3-bar-item w3-button w3-mobile'>
                Contact us
              </a>
            </div>
          </div>
          <a href='#' className='w3-bar-item w3-button w3-mobile'>
            Products
          </a>
          {loggedIn && (
            <div className='w3-dropdown-hover'>
              <button className='w3-button'>
                My Acccount <i className='fa fa-caret-down'></i>
              </button>
              <div className='w3-dropdown-content w3-bar-block w3-dark-grey'>
                <Link to={"/"} className='w3-bar-item w3-button w3-mobile'>
                  Dashboard
                </Link>
                <Link
                  to={"/all-items"}
                  className='w3-bar-item w3-button w3-mobile'
                >
                  My Items
                </Link>
                <Link
                  to={`/create`}
                  className='w3-bar-item w3-button w3-mobile'
                >
                  Register Item
                </Link>
                <a
                  href='#'
                  className='w3-bar-item w3-button w3-mobile'
                  onClick={logout}
                >
                  Logout {}
                </a>
              </div>
            </div>
          )}
          {!loggedIn && (
            <Link to={"/sign-in"} className='w3-bar-item w3-button w3-mobile'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
