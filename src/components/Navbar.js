import React from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar-box">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{marginLeft:"30px"}} to={"/"}>
            <img src={logo} alt="" height={17}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="" style={{ color: "grey", fontSize: "30px" }}>
              <RxHamburgerMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Recruitment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Blog
                </Link>
              </li>
            </ul>
            <button className="book-now mx-5" type="submit">
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
