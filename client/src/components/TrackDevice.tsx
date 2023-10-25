import { Sidebar } from "./SideBar"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import "./mapStyles.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function TrackDevice() {
  const [userLocation, setUserLocation] = useState<number | null>(null)
  console.log(userLocation)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        error => {
          console.error("Error getting user location:", error)
        }
      )
    } else {
      console.error("Geolocation is not supported by your browser.")
    }
  }, [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAwWu813gG8oCrx71scIHZ9Vt-xB5Eyw_U",
  })
  if (!isLoaded) {
    return <Loader />
  }
  return (
    <>
      <Sidebar />
      {userLocation ? <Map center={userLocation} /> : <Loader />}
    </>
  )
}

function Map({ center }) {
  //   const center = useMemo(() => ({ lat: 44, lng: -80 }), [])
  return (
    <GoogleMap
      zoom={10}
      mapContainerClassName='map-container'
      center={center || { lat: 1.9441, lng: 30.0619 }}
    >
      <Marker position={{ lat: -2.1484455, lng: 30.5433303 }} />
      <div className='button-container'>
        <Link to={"https://www.google.com/android/find/"} className='w3-button'>
          Track it down
        </Link>
      </div>
    </GoogleMap>
  )
}

function Loader() {
  const loaderStyle = {
    border: "16px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "16px solid #3498db",
    width: "120px",
    height: "120px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitAnimation: "spin 2s linear infinite",
    animation: "spin 2s linear infinite",
  }

  return <div style={loaderStyle}></div>
}
