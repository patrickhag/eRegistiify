import QrCodeImage from "./../assets/download.png"
import trustee from "./../assets/trustee.png"
import logo from "./../assets/logo.png"
import { useEffect, useState } from "react"
import QRCode from "react-qr-code"

interface UserInfoTypes {
  address: string
  contactInfo: string
  email: string
  id: string
  names: string
  nationalId: string
  password: string
}

export const CardToPrint = () => {
  const [userInfo, setUserInfo] = useState<UserInfoTypes>({})
  const { names } = userInfo
  const data = localStorage.getItem("token")
  const parsedData = data ? JSON.parse(data) : null

  const { id } = parsedData ?? {}

  useEffect(() => {
    getUserData()
  }, [id])

  function getUserData() {
    fetch(`http://localhost:3001/user/${id}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))
      .catch(error => console.log("Error:", error))
  }

  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }
  return (
    <>
      <div style={containerStyles}>
        <div
          className='w3-card w3-round-large w3-margin'
          style={{
            width: "500px",
            padding: "0.7rem 2rem",
            background:
              "linear-gradient(312deg, rgba(41, 25, 135, 0.00) 0%, rgba(39, 23, 127, 0.27) 0.01%, rgba(37, 20, 114, 0.76) 0.45%, #23126B 57.10%)",
          }}
        >
          <div className='w3-row'>
            <div className='w3-cell-row'>
              <h3 className='w3-xxlarge w3-cell'>e-Registration</h3>
              <img src={logo} alt='lOGO' className='w3-right' />
            </div>
            <span className='w3-col l3 s4'>
              <QRCode
                value={names}
                style={{
                  width: "11.5rem",
                }}
              />
            </span>

            <div className='w3-col l3 s4 w3-margin-left'>
              <h5>{userInfo.names}</h5>
              <h6>{userInfo.contactInfo}</h6>
            </div>
          </div>
          <div className='w3-display-container'>
            <h6>2342-2342-2342-2342</h6>
            <p className='w3-opacity'>Tip: scan this code for more info!</p>
            <img
              src={trustee}
              alt='Partners'
              className='w3-display-bottomright'
            />
          </div>
        </div>
      </div>
    </>
  )
}
