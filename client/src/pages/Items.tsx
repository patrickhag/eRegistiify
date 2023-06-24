import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function Items() {
  const [allPhones, setAllPhones] = useState([]);
  useEffect(() => {
    getPhoneInfo();
  }, []);

  const getPhoneInfo = async () => {
    const response = await fetch("http://localhost:3001/phone", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    if (data.msg === "ok") {
      setAllPhones(data.foundPhone);
    } else {
      alert(data.status);
    }
  };

  const phoneElements = allPhones.map(phone => {
    return (
      <div>
        <h1>{phone.brand} </h1>
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.brand}
            </p>
            <p className=''>
              <span className='w3-opacity'>Model</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.model}
            </p>
            <p className=''>
              <span className='w3-opacity'>Date Of Purchase</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {format(new Date(phone.dateOfPurchase), "yyyy-MMM-d")}
            </p>
            <p className=''>
              <span className='w3-opacity'>Price Of Phone</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.priceOfPhone}
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
              {phone.description}
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
              {phone.reportedStatus}
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
              <b className='w3-tag'>{phone.imeiNumber}</b>
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
    );
  });

  return (
    <>
      <Header />
      <div
        className='w3-display-container w3-white'
        style={{ marginTop: "7%", marginLeft: "5%", marginRight: "5%" }}
      >
        <div className='w3-row' style={{ padding: "5%" }}>
          {phoneElements}
        </div>
      </div>
      <Footer />
    </>
  );
}
