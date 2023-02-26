import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

function Contact() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-5 text-center">
                Have Some Query? <hr />
              </h2>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Name"
                id="formControlLg"
                type="text"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email Address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBTextArea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                label="Description"
              ></MDBTextArea>
              <br />
              <MDBBtn size="lg" style={{ backgroundColor: "green" }}>
                Submit
              </MDBBtn>

              <hr className="my-4" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
