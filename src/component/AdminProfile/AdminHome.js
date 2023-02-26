import React, { useState, useEffect } from "react";
import { ItemCont } from "./Items";
import Wishes from "./Wishes";
import "../../Style/Profile.css";
import axios from "axios";
import { useRef } from "react";

function AdminHome() {
  return (
    <div>
      <ItemCont className="col-10 itemCont">
        <div className="right-side-section-img-wish-cont">
          <div>
            <Wishes />
            <span>
              Without commitment you never start and wothout consistency you
            </span>
            <br />
            <span>never finish</span>
          </div>
          <img
            src="https://st2.depositphotos.com/6489488/9373/v/380/depositphotos_93738922-stock-illustration-library-books-icon.jpg?forcejpeg=true"
            alt="modern-flat-design-book-library"
            className="clipart"
          />
        </div>
      </ItemCont>
    </div>
  );
}

export default AdminHome;
