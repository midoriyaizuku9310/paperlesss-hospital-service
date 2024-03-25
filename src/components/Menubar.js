import { Link } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import React, { useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import { Dropdown } from "flowbite-react";
import "./Menubar.css";

const Menubar = () => {
  // const { user } = useContext(UserContext);
  const email = localStorage.getItem("email");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img
            height="50px"
            title="Home"
            src="https://www.bing.com/th?id=OIP.axtjZS2afppmC3okKWUilAHaH0&pid=3.1&cb=&w=300&h=300&p=0"
            alt="deloitte logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" style={{ align: "right" }}>
          <ul className="navbar-nav ml-auto">
            {localStorage.getItem("email") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="login">
                  Login
                </Link>
              </li>
            )}

            {localStorage.getItem("email") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="doctorlogin">
                  Doctor Login
                </Link>
              </li>
            )}

            {localStorage.getItem("email") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="Registration">
                  Register
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="UserDashboard">
                  Patient Details
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="bookings">
                  Booking
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="appointment">
                  Appointments
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") !== null && (
              <li className="nav-item">
                <Link className="nav-link active" to="doctorappointments">
                  Appointments
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") !== null && (
              <li className="nav-item">
                <Link className="nav-link active" to="UserDetails">
                  Patient Details
                </Link>
              </li>
            )}
            {/* {localStorage.getItem("email") !== null &&
              <li className="nav-item">
                <Link className="nav-link active" to="logout">
                  Logout
                </Link>
              </li>
            } */}
            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="booktest">
                  BookTest
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && localStorage.getItem("doctor") === null && (
              <li className="nav-item">
                <Link className="nav-link active" to="inbox">
                  Inbox
                </Link>
              </li>
            )}

            {localStorage.getItem("email") !== null && (
              <li className="nav-item1">
                <Link className="nav-link1 active">
                  <CgProfile className="" size={"35px"} />
                  {localStorage.getItem("email")}
                  <Dropdown label="" dismissOnClick={false} style={{backgroundColor:"black"}}>
                    {localStorage.getItem("doctor") === null &&
                      <Dropdown.Item
                        onClick={() =>
                          (window.location.href = `/edituserdetails/${email}`)
                        }
                      >
                        Edit Profile
                      </Dropdown.Item>
                    }
                    <Dropdown.Item
                      onClick={() => (window.location.href = "/logout")}
                    >
                      Logout
                    </Dropdown.Item>
                  </Dropdown>
                </Link>
              </li>
            )}

            {/* <li className="nav-item">
              
                <p>Welcome, {user.name}</p>
              
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search a product..."
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
