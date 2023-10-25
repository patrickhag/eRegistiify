import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { CardToPrint } from "./CardToPrint"
import { Sidebar } from "../components/SideBar"
import "../styles.css"

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

interface CardVisibility {
  [key: string]: boolean
}

export default function Items() {
  const [allPhones, setAllPhones] = useState<allPhoneTypes[]>([])
  const [cardVisibility, setCardVisibility] = useState<CardVisibility>({})
  const data = localStorage.getItem("token")
  const parsedData = data ? JSON.parse(data) : null
  const { id } = parsedData ?? {}
  const [file, setFile] = useState<Blob | string>("")
  const [img, setSrc] = useState<string | ArrayBuffer | null | undefined>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [status, setStatus] = useState<
    "success" | "error" | "idle" | "loading"
  >("idle")
  const HandlePrint = (id: number) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const fileReader = new FileReader()
      fileReader.onload = ev => {
        setSrc(ev.target?.result)
      }
      fileReader.readAsDataURL(file)
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append("file", file)
    try {
      setStatus("loading")
      const req = await fetch("http://localhost:3001/phone/upload", {
        method: "POST",
        body: formData,
      })
      if (req.ok) {
        setStatus("success")
        const data = await req.json()
        console.log(data.message)
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
      console.error("Error:", err)
    }
  }

  const phoneElements = allPhones.map(phone => {
    const isCardVisible = cardVisibility[phone.id] || false

    return (
      <div
        key={phone.id}
        className='w3-card w3-round-large w3-padding'
        style={{ marginBottom: "2rem" }}
      >
        {isCardVisible && <CardToPrint {...phone} />}
        <h1 className='w3-xlarge'>{phone.brand} </h1>
        <hr />
        <div className='w3-row w3-margin-top'>
          <Link
            to={"/register-device"}
            className='w3-button w3-light-grey w3-margin w3-round'
          >
            Register New Item
          </Link>
          <button
            className='w3-button w3-teal w3-margin w3-round'
            onClick={() => HandlePrint(phone.id)}
          >
            Print Item Certificate
          </button>
        </div>
        <hr />
        <h3 className='w3-large w3-margin-top'>Details</h3>
        <div className='w3-row'>
          <div className='w3-col m4 w3-padding'>
            <p>
              <span className='w3-opacity w3-margin-top'>Brand</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.brand}
            </p>
            <p>
              <span className='w3-opacity w3-margin-top'>Model</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.model}
            </p>
            <p>
              <span className='w3-opacity w3-margin-top'>Date Of Purchase</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {format(new Date(phone.dateOfPurchase), "yyyy-MMM-d")}
            </p>
            <p>
              <span className='w3-opacity w3-margin-top'>Price Of Phone</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{phone.priceOfPhone}
            </p>
          </div>

          <div className='w3-col m4 w3-padding'>
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
            <div className='w3-margin'>
              <span className='w3-opacity'>
                This phone currently has no images. Add one now!
              </span>
              &nbsp;
              {status !== "success" && (
                <input
                  type='file'
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className='w3-input'
                />
              )}
              <p>
                {img && (
                  <img
                    src={img as string}
                    alt=''
                    style={{ width: "15rem", height: "15rem" }}
                    className='w3-image'
                  />
                )}
              </p>
              {status !== "success" && (
                <button
                  className='w3-button w3-margin-top w3-round'
                  onClick={handleUpload}
                >
                  Upload
                </button>
              )}
            </div>
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
        className='w3-display-container w3-white SideBalr'
        style={{ marginTop: "3rem", marginLeft: "23rem", marginRight: "7rem" }}
      >
        <h1 className='w3-center w3-xxlarge w3-padding-bottom'>Your items</h1>
        <div className='w3-container' /* style={{ padding: "5%" }} */>
          {phoneElements}
        </div>
      </div>
    </>
  )
}
