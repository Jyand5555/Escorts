import React, { useState } from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/logo.png";
import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="footer">
        <div className="footer-mid" style={{paddingTop:"20px"}}>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-3" style={{ padding: "50px" }}>
              <div>
                <img
                  src={logo}
                  alt=""
                  height={20}
                  onClick={() => nav("/")}
                  style={{ cursor: "pointer" }}
                />
                <p
                  className="my-3"
                  style={{ color: "white", fontSize: "0.85rem" }}
                >
                  Copyright @ All rights reserved
                </p>
              </div>
              <div><br /><br /><br />
              <h1 className="font-m" style={{fontSize:"1.1rem"}}>Social Media</h1>
              <div
                  className="d-flex align-items-center"
                  style={{ gap: "0px" }}
                >
                  <div className="each-logo">
                    <FiFacebook className="logo-each" />
                  </div>
                  <div className="each-logo">
                    <PiTwitterLogo className="logo-each" />
                  </div>
                  <div className="each-logo">
                    <PiInstagramLogo className="logo-each" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 row" style={{ margin: "0" }}>
              <div
                className="col-lg-6 col-md-4 col-sm-6"
                style={{ padding: "50px" }}
              >
                <p className="font-h" style={{ fontSize: "1.1rem" }}>
                  Quick Menu
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/")}
                >
                  Home
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/about")}
                >
                  Gallery
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/blog")}
                >
                  Locations
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/support")}
                >
                  Recruitment
                </p>
              </div>
              <div
                className="col-lg-6 col-md-4 col-sm-6"
                style={{ padding: "50px" }}
              >
                <p className="font-h" style={{ fontSize: "1.1rem" }}>
                  Terms and Conditions
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/home_control/control4")}
                >
                  Terms and Conditions
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() =>
                    nav("/product/Entertainment_&_Lifestyle/home-theatre")
                  }
                >
                  Privacy Statement
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/comfort/climate-control")}
                >
                  Our Guarantee
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() =>
                    nav("/product/Security_&_Surveillance/cameras")
                  }
                >
                  High Class Escorts
                </p>
                <p
                  style={{ fontSize: "0.85rem", cursor: "pointer" }}
                  onClick={() => nav("/product/Lighting/smart-lighting")}
                >
                  Loyalty Program
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" style={{ padding: "50px" }}>
              <div>
                <p className="font-h" style={{ fontSize: "1.1rem" }}>
                  Contact
                </p>
                <p style={{ fontSize: "0.85rem" }}>dreamescorts@gmail.com</p>
                <p style={{ fontSize: "0.85rem" }}>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="tel:571-315-2073"
                  >
                    +1 620 456 7890
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
