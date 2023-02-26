import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utiles/Auth";
import "../../Style/Home.css";
import "../Navbar/NavBar.css";
import { Button } from "@mui/material";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { SiLibrarything } from "react-icons/si";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handlelogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div className="nav-container">
      <div className="side-nav-container_1">
        <NavLink
          to={"/"}
          className="navText_1"
          id="navText_1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            {" "}
            <SiLibrarything className="left-side-bar-library-icon" />
          </div>
          <div
            style={{
              paddingTop: "0px",
              paddingLeft: "5px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "green",
            }}
          >
            Library
          </div>
        </NavLink>
      </div>
      <div className="side-nav-container_2">
        <NavLink to={"/aboutus"} className="navText">
          {"  "} About us
        </NavLink>
        <NavLink to={"/contact"} className="navText">
          Contact
        </NavLink>
      </div>
      <div className="side-nav-container_3">
        {!auth.user && (
          <NavLink to={"/login"} className="navText">
            <Button
              variant="outlined"
              size="medium"
              style={{
                fontWeight: "500",
                padding: " 6px 17px",
                color: "black",
              }}
            >
              Dashboard
            </Button>
          </NavLink>
        )}

        {!auth.user ? (
          <NavLink to={"/profile"} className="navText">
            <Button
              variant="contained"
              size="medium"
              endIcon={<FiLogIn />}
              style={{ fontWeight: "400", padding: " 7px 22px" }}
            >
              Login
            </Button>
          </NavLink>
        ) : (
          <Button
            variant="contained"
            size="medium"
            endIcon={<FiLogOut />}
            style={{ fontWeight: "400", padding: " 7px 22px" }}
            onClick={handlelogout}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
