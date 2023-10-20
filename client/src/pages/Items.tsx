import { useEffect, useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { CardToPrint } from "./CardToPrint"
import { Sidebar } from "../components/SideBar"

export interface allPhoneTypes {
  id: number
  brand: string
  model: string
  dateOfPurchase: string
  priceOfPhone: number
  description: string
  reportedStatus: string
  imeiNumber: string
}

export default function Items() {
  const [allPhones, setAllPhones] = useState<allPhoneTypes[]>([])
  const [cardVisibility, setCardVisibility] = useState({})
  const data = localStorage.getItem("token")
  const parsedData = data ? JSON.parse(data) : null
  const { id } = parsedData ?? {}

  const HandlePrint = id => {
    setCardVisibility(prevVisibility => ({
      ...prevVisibility,
      [id]: !prevVisibility[id] || false,
    }))
  }

  useEffect(() => {
    function getPhoneInfo() {
      fetch(`http://localhost:3001/phone/${id}`)
        .then(res => res.json())
        .then(data => setAllPhones(data.foundPhone))
        .catch(error => console.error("Error:", error))
    }
    getPhoneInfo()
  }, [id])

  const phoneElements = allPhones.map(phone => {
    const isCardVisible = cardVisibility[phone.id] || false

    return (
      <div
        key={phone.id}
        className='w3-card w3-round-large w3-padding'
        style={{ marginBottom: "2rem" }}
      >
        {isCardVisible && <CardToPrint {...phone} />}
        <h1>{phone.brand} </h1>
        <hr />
        <Link
          to={"/register-device"}
          className='w3-button w3-light-grey w3-margin-right'
        >
          Register New Item
        </Link>
        <button
          className='w3-button w3-teal'
          onClick={() => HandlePrint(phone.id)}
        >
          Print Item Identity
        </button>
        <hr />
        <h3>Details</h3>
        <div className='w3-row'>
          <div className='w3-col m4'>
            <p>
              <span className='w3-opacity'>Brand</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.brand}
            </p>
            <p>
              <span className='w3-opacity'>Model</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.model}
            </p>
            <p>
              <span className='w3-opacity'>Date Of Purchase</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {format(new Date(phone.dateOfPurchase), "yyyy-MMM-d")}
            </p>
            <p>
              <span className='w3-opacity'>Price Of Phone</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.priceOfPhone}
            </p>
          </div>
          <div className='w3-col m4 w3-padding-right'>
            <h3 className='w3-opacity'>Description</h3>
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
            <p>
              <span>
                IMEI NUMBER &nbsp;&nbsp;
                <b className='w3-tag'>{phone.imeiNumber}</b>
              </span>
            </p>
          </div>
          <div>
            <h2>Images</h2>
            <hr />
            <p className='w3-margin'>
              <span className='w3-opacity'>
                This phone currently has no images. Add one now!
              </span>
              &nbsp;
              <input type='file' className='w3-input' />
              <button className='w3-button w3-margin-top'>Upload</button>
            </p>
          </div>
          <br />
        </div>
      </div>
    )
  })

  return (
    <>
      <Sidebar />
      <div
        className='w3-display-container w3-white'
        style={{ marginTop: "3rem", marginLeft: "23rem", marginRight: "7rem" }}
      >
        <h1 className='w3-center'>Your items</h1>
        <div className='w3-row' style={{ padding: "5%" }}>
          {phoneElements}
        </div>
      </div>
    </>
  )
}
