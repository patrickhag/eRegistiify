export default function Footer() {
  return (
    <>
      <footer className='w3-light-grey' style={{ marginTop: "10%" }}>
        <div className='w3-row' style={{ marginLeft: "70%" }}>
          <div className='w3-col l6 m12 s12' style={{ marginTop: "7%" }}>
            <h4>
              <b>SERVICES</b>
            </h4>
            <br />
            <a href='#'>Link 1</a>
            <br />
            <br />
            <a href='#'>Link 2</a>
            <br />
            <br />
            <a href='#'>Link 3</a>
          </div>
          <div className='w3-col l6 m12 s12' style={{ marginTop: "7%" }}>
            <h4>
              <b>ABOUT US</b>
            </h4>
            <br />
            <a href='#'>Link 4</a>
            <br />
            <br />
            <a href='#'>Link 5</a>
            <br />
            <br />
            <a href='#'>Link 6</a>
            <br />
            <br />
            <a href='#'>Link 7</a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className='w3-margin w3-padding-32'>
          <div className='w3-display-container'>
            <h6 className='w3-display-left'>
              &copy; eRegistify All rights reserved 2023.
            </h6>
            <div className='w3-display-right'>
              <a href='#' style={{ textDecoration: "none" }}>
                Contact US
              </a>
              &nbsp;&nbsp;
              <a href='#' style={{ textDecoration: "none" }}>
                Terms & Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
