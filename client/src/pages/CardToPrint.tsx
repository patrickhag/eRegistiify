import trustee from "./../assets/trustee.png"
import logo from "./../assets/logo.png"
import { useEffect, useRef, useState } from "react"
import QRCodeStyling from "qr-code-styling"
import { allPhoneTypes } from "./Items"

interface UserInfoTypes {
  address: string
  contactInfo: string
  email: string
  id: string
  names: string
  nationalId: string
  password: string
}

export const CardToPrint: React.FC<allPhoneTypes> = ({
  imeiNumber,
  brand,
  model,
  dateOfPurchase,
  priceOfPhone,
  description,
  reportedStatus,
}) => {
  const [isComponentVisible, setIsComponentVisible] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfoTypes>()
  const qrCodeRef = useRef<QRCodeStyling>(null)
  const data = localStorage.getItem("token")
  const parsedData = data ? JSON.parse(data) : null
  const ref = useRef<HTMLDivElement>(null)
  const { id } = parsedData ?? {}

  const structuredObject = {
    imeiNumber,
    brand,
    model,
    dateOfPurchase,
    priceOfPhone,
    description,
    reportedStatus,
  }

  const userData = JSON.stringify(structuredObject)

  useEffect(() => {
    qrCodeRef.current = new QRCodeStyling({
      width: 180,
      height: 180,
      data: userData,
      dotsOptions: {
        color: "#000",
        type: "rounded",
      },
      backgroundOptions: {
        round: 0.1,
      },
    })
    if (ref.current && qrCodeRef.current) {
      qrCodeRef.current.append(ref.current)
    }
  }, [userData])

  useEffect(() => {
    if (qrCodeRef.current) {
      qrCodeRef.current.update({
        data: userData,
      })
    }
  }, [userData])

  useEffect(() => {
    function getUserData() {
      fetch(`http://localhost:3001/user/${id}`)
        .then(res => res.json())
        .then(data => setUserInfo(data))
        .catch(error => console.log("Error:", error))
    }
    getUserData()
  }, [id])

  const closeModal = () => {
    setIsComponentVisible(false)
  }

  if (!isComponentVisible) {
    return null
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        className='w3-modal w3-animate-zoom'
        onClick={closeModal}
      >
        <div
          className='w3-card w3-round-large w3-margin w3-modal-content'
          style={{
            width: "500px",
            padding: "0.7rem 2rem",
            background:
              "linear-gradient(312deg, rgba(41, 25, 135, 0.00) 0%, rgba(39, 23, 127, 0.27) 0.01%, rgba(37, 20, 114, 0.76) 0.45%, #23126B 57.10%)",
          }}
        >
          <div className='w3-row'>
            <div className='w3-cell-row'>
              <h3 className='w3-xxlarge w3-cell'>TESA</h3>
              <img src={logo} alt='lOGO' className='w3-right' />
            </div>
            <div className='w3-col l3 s4'>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "2rem",
                }}
              >
                <div ref={ref} />
              </div>
            </div>

            <div className='w3-col l3 s4' style={{ marginLeft: "5rem" }}>
              <h5>{userInfo?.names}</h5>
              <h6>{userInfo?.contactInfo}</h6>
            </div>
          </div>
          <div className='w3-display-container'>
            <h6>{imeiNumber}</h6>
            <p className='w3-opacity'>Tip: scan this code for more info!</p>
            <img
              src={trustee}
              alt='Partners'
              className='w3-display-bottomright'
            />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  )
}
