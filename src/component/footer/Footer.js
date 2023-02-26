import React from "react";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "../../Style/Footer.css";

function Footer() {
  return (
    <div
      id="footer-container"
      style={{ height: "50vh", border: "1px solid black" }}
    >
      <div id="icons-cont">
        <MDBBtn
          floating
          className="icons"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <MDBBtn
          floating
          className="icons"
          style={{ backgroundColor: "#55acee" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        <MDBBtn
          floating
          className="icons"
          style={{ backgroundColor: "#dd4b39" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="google" />
        </MDBBtn>
        <MDBBtn
          floating
          className="icons"
          style={{ backgroundColor: "#ac2bac" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>

        <MDBBtn
          floating
          className="icons"
          style={{ backgroundColor: "#0082ca" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>

        <MDBBtn
          floating
          className="icons"
          style={{ backgroundColor: "#333333" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </div>
      <div id="cc">
        <p> © 2020 Copyright: Digital Library</p>
      </div>
    </div>
  );
}

export default Footer;
