import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utiles/Auth";
import { toast } from "react-toastify";
function Login() {
  const [user, setUser] = useState();
  const [userRecord, setUserRecord] = useState([]);
  function newUserRecord() {
    setUserRecord([...userRecord]);
  }
  useEffect(() => {
    newUserRecord();
  }, []);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.state?.path || "/";
  function handlelogin() {
    auth.login(user);
    navigate(redirect, { replace: true });
    toast.success(" User Login Successfully");
  }
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-5 text-center">Login</h2>
              {userRecord.map((item) => item)}
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="User name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => setUser(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn size="lg" onClick={handlelogin} className="login_btn">
                Login
              </MDBBtn>

              <hr className="my-4" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
