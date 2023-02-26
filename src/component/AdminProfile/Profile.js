import React from "react";
import LeftSideBar from "./LeftSideBar";
import "../../Style/Profile.css";

function Profile() {

  return (
    <div className="col-12 profile-page-container">
      <div className="col-2 left-side-section">
        <LeftSideBar />
      </div>
      <div className="right-side-section-navbar-container">
        <div className="right-side-section-nav">
          <div>
            <span className="home"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
