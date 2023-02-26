import React, { useContext} from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LastName } from "./AdminProfile/LeftSideBar";
import "../Style/Booklist.css";
function BookList() {
  const {
    formRecords,
    setFormRecords,
  } = useContext(LastName);
  const handleDelete = (id) => {
    if (window.confirm(" I want to delete ?")) {
      setFormRecords(formRecords.filter((item, index) => index !== id));
      toast.success("deleted successfully");
    }
  };
  return (
    <div className="table-container" style={{ margin: "40px 25px 25px" }}>
      <h4>Book list </h4>
      <MDBTable id="table">
        <MDBTableHead
          style={{
            color: "rgba(0, 0, 0, 0.911)",
            fontSize: "2.1ch",
            backgroundColor: "rgb(177, 233, 177)",
          }}
        >
          <tr style={{ fontWeight: "bolder" }}>
            <th scope="col">No.</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Edition</th>
            <th scope="col">Serial Number</th>
            <th scope="col">Action</th>
          </tr>
        </MDBTableHead>
        {formRecords &&
          formRecords.map((item, index) => {
            return (
              <MDBTableBody key={index}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.bookname}</td>
                  <td>{item.authorname}</td>
                  <td>{item.edition}</td>
                  <td>{item.serialnumber}</td>
                  <td>
                    <MDBBtn
                      className="m-1"
                      tag="a"
                      color="none"
                      onClick={() => handleDelete(index)}
                    >
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                      ></MDBIcon>
                    </MDBBtn>{" "}
                    <Link to={`/profile/updatebook/${index}`}>
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{
                          color: "#55acee",
                          margin: "0px 20px 10px ",
                          color: "green",
                        }}
                        size="lg"
                      ></MDBIcon>
                    </Link>{" "}
                    <Link to={`/profile/bookdetails/${index}`}>
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: "#3b5998", marginBottom: "10px" }}
                        size="lg"
                      ></MDBIcon>
                    </Link>
                  </td>
                </tr>
              </MDBTableBody>
            );
          })}
      </MDBTable>
    </div>
  );
}
export default BookList;
