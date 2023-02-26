import "./App.css";
import { AuthProvider } from "./utiles/Auth";
import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./component/AdminProfile/Profile";
import NavBar from "./component/Navbar/NavBar";
import Login from "./component/login/Login";
import RequireAuth from "./utiles/RequireAuth";
import AddBooks from "./component/AdminProfile/task/AddBooks";
import AdminHome from "./component/AdminProfile/AdminHome";
import BookDetails from "./component/AdminProfile/task/BookDetails";
import AllBooks from "./component/AdminProfile/task/AllBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/footer/Footer";
import Contact from "./component/contact/Contact";
import AboutUs from "./component/AboutUs/AboutUs";

function App() {
  return (
    <AuthProvider className="app">
      <ToastContainer />

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          exact
          path="/profile"
          element={
            <RequireAuth>
              {" "}
              <Profile />{" "}
            </RequireAuth>
          }
        >
          <Route path="adminhome" element={<AdminHome />} />
          <Route path="addbooks" element={<AddBooks />} />
          <Route path="updatebook/:id" element={<AddBooks />} />
          <Route path="allbooks" element={<AllBooks />} />
          <Route path="bookdetails/:id" element={<BookDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
