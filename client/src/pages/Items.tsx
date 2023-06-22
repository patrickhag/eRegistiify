import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Items() {
  const { id } = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    getPhoneInfo();
  }, []);

  const getPhoneInfo = async () => {
    const response = await fetch("http://localhost:9001/phone", {
      method: "GET",
      body: JSON.stringify({
        id,
      }),
    });
    const data = await response.json();
    console.log();
    if (data.msg === "ok") {
      alert("Access granted");
    } else {
      alert(data.status);
    }
  };

  return (
    <>
      <Header />
      <div
        className='w3-display-container w3-white'
        style={{ marginTop: "7%", marginLeft: "5%", marginRight: "5%" }}
      >
        <div className='w3-row' style={{ padding: "5%" }}>
          <div>
            <h1>Apple Iphone 13 </h1>
            <hr />
            <Link
              to={"/create"}
              className='w3-button w3-light-grey w3-margin-right'
            >
              Register New Item
            </Link>
            <Link to={"/"} className='w3-button w3-teal'>
              Download Item Certificate
            </Link>
            <hr />
            <h3>Details</h3>
            <hr />
            <div className='w3-row'>
              <div className='w3-col m4'>
                <p className=''>
                  <span className='w3-opacity'>Brand</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
                </p>
                <p className=''>
                  <span className='w3-opacity'>Model</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum
                </p>
                <p className=''>
                  <span className='w3-opacity'>Date Of Purchase</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum
                </p>
                <p className=''>
                  <span className='w3-opacity'>Price Of Phone</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum
                </p>
              </div>
              <div className='w3-col m4 w3-padding-right'>
                <h3 className='w3-opacity '>Description</h3>
                <p
                  style={{
                    padding: "5px",
                    border: "1px solid grey",
                    borderRadius: "3px",
                  }}
                >
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className='w3-col m4'>
                <h3 className='w3-opacity '>Reported Status</h3>
                <p
                  style={{
                    padding: "5px",
                    border: "1px solid grey",
                    borderRadius: "3px",
                  }}
                >
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <hr />
            <div>
              <h2>Identifiers</h2>
              <hr />
              <p className='w3-opacity w3-margin'>
                <span>
                  IMEI NUMBER &nbsp;&nbsp;
                  <b className='w3-tag'>987654321098765</b>
                </span>
              </p>
            </div>
            <hr />
            <div>
              <h2>Images</h2>
              <hr />
              <p className='w3-margin'>
                <span className='w3-opacity'>
                  This phone currently has no images. Add one now!
                </span>
                &nbsp;
                <input type='file' className='w3-input' />
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
