import QrCodeImage from "./../assets/download.png"
import trustee from "./../assets/trustee.png"
import logo from "./../assets/logo.png"

export const CardToPrint = () => {
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
            <div className='w3-cell-row w3-margin-bottom'>
              <h3 className='w3-xxlarge w3-cell'>e-Registration</h3>
              <img src={logo} alt='lOGO' />
            </div>
            <img
              src={QrCodeImage}
              className='w3-round-large w3-col l3 s4'
              width={"100px"}
            />
            <div className='w3-col l3 s4 w3-padding-left'>
              <h5>Peter pan</h5>
              <h6>0788000000</h6>
            </div>
          </div>
          <div className='w3-margin-top w3-display-container'>
            <h6>2342-2342-2342-2342</h6>
            <p className='w3-opacity w3-'>Tip: scan this code for more info!</p>
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
