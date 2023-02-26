import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../utiles/Auth";
import {  AiOutlineHome } from "react-icons/ai";
import {  BiTask, BiHelpCircle } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import "../../Style/LeftSideBar.css";
import AllBooks from "./task/AllBooks";
import AddBooks from "./task/AddBooks";
import { createContext } from "react";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import { BiBookAdd } from "react-icons/bi";
import { MdLibraryBooks } from "react-icons/md";

const Items = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  height: "100vh",
  color: theme.palette.text.secondary,
}));

const LastName = createContext({});

function LeftSideBar({ children }) {
  const initialValue = {
    bookname: "",
    authorname: "",
    edition: "",
    serialnumber: "",
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formRecords, setFormRecords] = useState([]);
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState("kumar");
  const [users, setUsers] = useState("pankaj");
  const auth = useAuth();
  const navigate = useNavigate();
 
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = () => {
    if (formRecords) {
      setFormRecords([...formRecords, formValue]);
      toast.success("user added successfully");
      setTimeout(() => navigate("/profile/allbooks"), 500);
    }
  };
  const fistLetter = auth.user.slice(0, 1).toUpperCase();

  return (
    <div className="left-side-bar-main-container">
      <LastName.Provider
        value={{
          user,
          users,
          formValue,
          formRecords,
          setFormRecords,
          handleInputChange,
          handleSubmit,
          edit,
        }}
      >
        {children}
        <Items className=" col-12 itemC">
          <div className="left-side-bar-user-container">
            <div className="left-side-bar-user-logo-container">
              <Avatar
                className="left-side-bar-user-icon"
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "green",
                  fontSize: "30px",
                }}
              >
                {fistLetter}
              </Avatar>
            </div>
            <div className="left-side-bar-user-info-container">
              <span> Hello </span>
              <span>{auth.user}</span>
            </div>
          </div>

          <div className="left-side-bar-feature-container">
            <div className="left-side-bar-feature">
              <AiOutlineHome className="left-side-bar-feature-icon" />
              <Link to="adminhome">
                <span
                  className="left-side-bar-feature-name"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </span>
              </Link>
            </div>
            <div className="left-side-bar-feature">
              <BiTask className="left-side-bar-feature-icon" />
              <span className="left-side-bar-feature-name" id="task">
                Tasks
              </span>
            </div>

            <div className="left-side-bar-feature">
              <div className="task_icons">
                {" "}
                <BiBookAdd />
              </div>
              <div className="left-side-bar-books-container">
                <Link to="addbooks">
                  {" "}
                  <p style={{ color: "black", margin: "0px" }}> Add Books</p>
                </Link>
                <span
                  className="left-side-bar-books"
                  style={{ display: "none" }}
                >
                  {" "}
                  Add Books <AddBooks />{" "}
                </span>
              </div>
            </div>
            <div className="left-side-bar-feature">
              <div className="task_icons">
                <MdLibraryBooks />
              </div>
              <div className="left-side-bar-books-container">
                <Link to="allbooks">
                  <p style={{ color: "black", margin: "0px" }}>All books</p>
                </Link>
                <span
                  className="left-side-bar-books"
                  style={{ display: "none" }}
                >
                  all <AllBooks user={user} />{" "}
                </span>
              </div>
            </div>
            <div className="left-side-bar-feature" id="mydiv">
              <BiHelpCircle className="left-side-bar-feature-icon" />
              <span className="left-side-bar-feature-name">Helpdesk</span>
            </div>
          </div>
        </Items>
        <Outlet />
      </LastName.Provider>
    </div>
  );
}

export default LeftSideBar;
export { LastName };
