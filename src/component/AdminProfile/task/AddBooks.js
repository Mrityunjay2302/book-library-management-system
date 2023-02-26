import React, { useContext, useEffect, useState } from "react";
import { ItemCont } from "../Items";
import { MDBValidation, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { LastName } from "../LeftSideBar";


function AddBooks() {
  const { formValue, formRecords, handleInputChange, handleSubmit, edit } =
    useContext(LastName);
  const { bookname, authorname, edition, serialnumber } = formValue;
  const { id } = useParams();

  return (
    <ItemCont className="col-10 itemCont">
      <h4 style={{ color: "rgba(0, 0, 0, 0.911)" }}>
        {!edit ? "Add Book Detail" : "Update Book"}
      </h4>
      <MDBValidation
        className="row g-3"
        style={{ margin: "25px" }}
        noValidate
        onSubmit={handleSubmit}
      >
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "300px",
            alignContent: "center",
          }}
        >
          <MDBInput
            value={bookname || ""}
            name="bookname"
            type="text"
            onChange={handleInputChange}
            required
            label="Book Name"
          />
          <br />
          <MDBInput
            value={authorname || ""}
            name="authorname"
            type="text"
            onChange={handleInputChange}
            required
            label="Author Name"
          />
          <br />
          <MDBInput
            value={edition || ""}
            name="edition"
            type="text"
            onChange={handleInputChange}
            required
            label="Edition"
          />
          <br />
          <MDBInput
            value={serialnumber || ""}
            name="serialnumber"
            type="text"
            onChange={handleInputChange}
            required
            label="Serial Number"
          />
          <br />
          <div className="">
            <MDBBtn
              style={{
                margin: "auto",
                width: "270px",
                maxWidth: "300px",
                alignContent: "center",
                backgroundColor: "rgba(67, 110, 27, 0.884)",
              }}
            >
              {!edit ? "Add" : "Update"}
            </MDBBtn>
          </div>
          <br />
        </div>
      </MDBValidation>
    </ItemCont>
  );
}

export default AddBooks;
