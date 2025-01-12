import React, { useState } from "react";
import "../assets/styles/Profile.css";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import arrow from "../assets/images/arrow.png";
import Gabbie from "../assets/images/Gabbie-caro.png";
import Mia from "../assets/images/Mia-melano.png";
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdCheck } from "react-icons/md";
import wp from "../assets/images/wp.png";
import tg from "../assets/images/tg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gc1 from "../assets/images/gc1.png";
import gc2 from "../assets/images/gc2.png";
import gc3 from "../assets/images/gc3.png";
import gc4 from "../assets/images/gc4.png";
import l1 from "../assets/images/l1.png";
import l2 from "../assets/images/l2.png";
import l3 from "../assets/images/l3.png";

const Profile = () => {
  const loc = useLocation();
  const images = loc.state.proImg;
  const videos = loc.state.vid;
  const [activeSlide, setActiveSlide] = useState(0);
  const [iv, setIv] = useState("image");
  const settings = {
    customPaging: function (i) {
      return (
        <a style={{ width: "100%" }}>
          <img
            className="gal-pro-small"
            src={images[i]}
            alt={`Thumbnail ${i + 1}`}
            style={{
              objectFit: "cover",
              opacity: i === activeSlide ? 1 : 0.3,
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };
  const settings2 = {
    customPaging: function (i) {
      return (
        <a style={{ width: "100%" }}>
          <video
            className="gal-pro-small"
            style={{
              objectFit: "cover",
              opacity: i === activeSlide ? 1 : 0.3,
            }}
          >
            <source src={videos[i]} type="video/mp4" />
          </video>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div className="tgwp-1" style={{ background: "white" }}>
        <a
          href="https://wa.link/38ejzv"
          target="_blank"
          className="btn-link-wptg d-flex align-items-center"
          style={{
            gap: "15px",
            background: "black",
            color: "white",
            padding: "7px 20px",
            width: "160px",
            textDecoration: "none",
          }}
        >
          <img src={wp} height={30} alt="" />
          <div>Whatsapp</div>
        </a>
        <a
          href="https://t.me/auescortco"
          target="_blank"
          className="btn-link-wptg d-flex align-items-center"
          style={{
            gap: "15px",
            background: "black",
            color: "white",
            padding: "7px 20px",
            width: "160px",
            textDecoration: "none",
          }}
        >
          <img src={tg} height={30} alt="" />
          <div>Telegram</div>
        </a>
      </div>
      {/* <div
        className="caro-img caro-img-pro"
        style={{ backgroundImage: `url(${Mia})` }}
      >
        <div className="dumy dumy-pro"></div>
        <div className="caro-content caro-content-pro">
          <h1 className="caro-h" style={{ marginTop: "70px" }}>
            {loc.state.name}
          </h1>
          <div
            className="my-3 vid-caro"
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              borderRadius: "50%",
              fontSize: "1.35rem",
              cursor: "pointer",
            }}
          >
            <HiOutlineVideoCamera />
          </div>
          <p className="caro-p">
            {loc.state.age} - {loc.state.spl}
          </p>
          <p className="caro-p para-pro">
            {loc.state.desc}
          </p>
          <div
            className="d-flex align-items-center btn-know"
            style={{ marginTop: "-20px" }}
          >
            <div className="tgwp">
              <a
                href={loc.state.wpLink}
                className="btn-link-wptg d-flex align-items-center"
                style={{ gap: "10px", textDecoration:"none" }}
              >
                <img src={wp} height={30} alt="" />
                <div>Whatsapp</div>
              </a>
              <a
                href={loc.state.tgLink}
                className="btn-link-wptg d-flex align-items-center"
                style={{ gap: "10px", textDecoration:"none" }}
              >
                <img src={tg} height={30} alt="" />
                <div>Telegram</div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="gallery-pro">
        <h3
          className="font-h"
          style={{ margin: "0px 50px 0 50px", paddingTop: "100px" }}
        >
          Gallery
        </h3>
        <div
          className="d-flex"
          style={{ gap: "50px", margin: "30px 0 -15px 50px" }}
        >
          <div
            className="font-m"
            onClick={() => setIv("image")}
            style={{
              cursor: "pointer",
              paddingBottom: "5px",
              borderBottom: iv === "image" ? "2px solid white" : "",
              color: iv === "video" ? "rgba(255, 255, 255, 0.5)" : "",
            }}
          >
            Images
          </div>
          <div
            className="font-m"
            onClick={() => setIv("video")}
            style={{
              cursor: "pointer",
              paddingBottom: "5px",
              borderBottom: iv === "video" ? "2px solid white" : "",
              color: iv === "image" ? "rgba(255, 255, 255, 0.5)" : "",
            }}
          >
            Videos
          </div>
        </div>
        <div
          className="container mt-5 gal-pro-div"
          style={{
            paddingBottom: "150px",
            display: iv === "image" ? "block" : "none",
          }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="gal-pro-img"
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div
          className="container mt-5 gal-pro-div"
          style={{
            paddingBottom: "150px",
            display: iv === "video" ? "block" : "none",
          }}
        >
          <Slider {...settings2}>
            {videos.map((video, index) => (
              <div key={index}>
                <video
                  className="gal-pro-img"
                  controls
                  style={{ objectFit: "contain" }}
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="prof-det" style={{ padding: "50px 50px 0 50px" }}>
        <h1
          className="font-m"
          style={{
            borderBottom: "2px solid white",
            fontSize: "1.2rem",
            width: "max-content",
            paddingBottom: "5px",
          }}
        >
          Profile Details
        </h1>
        <br />
        <div className="det-table row" style={{ margin: "0" }}>
          <div className="t1 col-lg-6 col-md-12">
            <h3 className="font-h" style={{}}>
              Charges
            </h3>
            <table className="charges-table">
              <thead>
                <tr>
                  <th> </th>
                  <th>Incall/Outcall</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 hour</td>
                  <td>$1000</td>
                  <td>Sensual GFE</td>
                </tr>
                <tr>
                  <td>90 mins</td>
                  <td>$1100</td>
                  <td>Sensual GFE</td>
                </tr>
                <tr>
                  <td>2 hours</td>
                  <td>$1400</td>
                  <td>Sensual GFE</td>
                </tr>
                <tr>
                  <td>3 hours</td>
                  <td>$1600</td>
                  <td>Sensual GFE</td>
                </tr>
                <tr>
                  <td>Add Hours</td>
                  <td>$200</td>
                  <td>Per Hr</td>
                </tr>
                <tr>
                  <td>30 mins</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Dinner</td>
                  <td>$2500</td>
                  <td>4 Hours Including Sex</td>
                </tr>
                <tr>
                  <td>Overnight</td>
                  <td>$5000</td>
                  <td>24 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="t2 col-lg-6 col-md-12 row" style={{ margin: "0" }}>
            <h3 className="font-h stat-line" style={{}}>
              Statistics
            </h3>
            <div className="col-lg-6 col-md-6">
              <table class="charges-table">
                <thead>
                  <tr>
                    <th style={{ color: "black" }}>.</th>
                    <th style={{ color: "black" }}>.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>{loc.state.age}</td>
                  </tr>
                  <tr>
                    <td>Eye</td>
                    <td>{loc.state.eyeColor}</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{loc.state.height}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{loc.state.weight}</td>
                  </tr>
                  <tr>
                    <td>Bust</td>
                    <td>{loc.state.bust}</td>
                  </tr>
                  <tr>
                    <td>Hair</td>
                    <td>{loc.state.hair}</td>
                  </tr>
                  <tr>
                    <td>Nationality</td>
                    <td>{loc.state.nationality}</td>
                  </tr>
                  <tr>
                    <td>Piercings</td>
                    <td>{loc.state.piercings}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 col-md-6">
              <table class="charges-table">
                <thead>
                  <tr>
                    <th style={{ color: "black" }}>.</th>
                    <th style={{ color: "black" }}>.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tattoos</td>
                    <td>{loc.state.tattoos}</td>
                  </tr>
                  <tr>
                    <td>Cup size</td>
                    <td>{loc.state.cupSize}</td>
                  </tr>
                  <tr>
                    <td>Smoking</td>
                    <td>{loc.state.smoking}</td>
                  </tr>
                  <tr>
                    <td>Cuisine</td>
                    <td>{loc.state.cuisine}</td>
                  </tr>
                  <tr>
                    <td>Perfume</td>
                    <td>{loc.state.perfume}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="service-offer" style={{ margin: "50px 50px 0 50px" }}>
        <h3 className="font-h" style={{}}>
          Service Offer
        </h3>
        <br />
        <div className="service-each row" style={{ margin: "0" }}>
          <div className="col-lg-4 col-md-6 service-each-card">
            <img src={l1} alt="" height={25} />
            <h5 className="font-m mt-3 mb-4">Travel Companion</h5>
            {/* <p
              className="font-m"
              style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              velit.
            </p> */}
          </div>
          <div className="col-lg-4 col-md-6 service-each-card">
            <img src={l2} alt="" height={25} />
            <h5 className="font-m mt-3 mb-4">Intimate Time</h5>
            {/* <p
              className="font-m"
              style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              velit.
            </p> */}
          </div>
          <div className="col-lg-4 col-md-6 service-each-card">
            <img src={l3} alt="" height={30} />
            <h5 className="font-m mt-3 mb-4">Role Play</h5>
            {/* <p
              className="font-m"
              style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              velit.
            </p> */}
          </div>
          <div className="col-lg-4 col-md-6 service-each-card">
            <img src={l2} alt="" height={25} />
            <h5 className="font-m mt-3 mb-4">Sensual Message</h5>
            {/* <p
              className="font-m"
              style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              velit.
            </p> */}
          </div>
          <div className="col-lg-4 col-md-6 service-each-card">
            <img src={l2} alt="" height={25} />
            <h5 className="font-m mt-3 mb-4">Domination</h5>
            {/* <p
              className="font-m"
              style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              velit.
            </p> */}
          </div>
          <div className="col-lg-4 col-md-6 service-each-card">
            <img src={l2} alt="" height={25} />
            <h5 className="font-m mt-3 mb-4">Girlfriend Experience</h5>
            {/* <p
              className="font-m"
              style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor
              velit.
            </p> */}
          </div>
        </div>
      </div>
      <div className="last-two row" style={{ margin: "50px 50px 0 50px" }}>
        <div className="col-lg-6" style={{}}>
          <h3 className="font-h">Availability</h3>
          {/* <br /> */}
          {/* <p className="font-m" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Phasellus sapien ex, feugiat non consequat id, malesuada in velit.
            Suspendisse luctus sapien nec tellus maximus, eget iaculis est
            hendrerit.
          </p> */}
          <h5 className="font-h my-3" style={{ fontSize: "0.9rem" }}>
            TIME OF DAY
          </h5>
          <div className="row mb-3" style={{ gap: "0px", margin: "0" }}>
            <div
              className="d-flex align-items-center col-lg-3 col-md-3 col-sm-6"
              style={{ gap: "15px" }}
            >
              <MdCheck />
              <div className="font-m" style={{ marginTop: "-1px" }}>
                Morning
              </div>
            </div>
            <div
              className="d-flex align-items-center col-lg-3 col-md-3 col-sm-6"
              style={{ gap: "15px" }}
            >
              <MdCheck />
              <div className="font-m" style={{ marginTop: "-1px" }}>
                Afternoon
              </div>
            </div>
            <div
              className="d-flex align-items-center col-lg-3 col-md-3 col-sm-6"
              style={{ gap: "15px" }}
            >
              <MdCheck />
              <div className="font-m" style={{ marginTop: "-1px" }}>
                Evening
              </div>
            </div>
            <div
              className="d-flex align-items-center col-lg-3 col-md-3 col-sm-6"
              style={{ gap: "15px" }}
            >
              <MdCheck />
              <div className="font-m" style={{ marginTop: "-1px" }}>
                Dinner
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-center btn-know"
            style={{ marginTop: "-20px", justifyContent: "start" }}
          >
            <button
              className="book-now"
              type="submit"
              style={{ padding: "5px 30px" }}
            >
              Book Now
            </button>
            <div
              className="mx-3"
              style={{
                marginTop: "0px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <p className="font-m mt-4" style={{ fontSize: "0.8rem" }}>
                Know more
              </p>
              <img src={arrow} alt="" style={{ marginTop: "-40px" }} />
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{}}>
          <h3 className="font-h">Matchmaking</h3>
          <br />
          <table class="charges-table">
            <tbody>
              <tr>
                <td>Virgin Experience</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Interact Service</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Mature Clients</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>A-levels (anal sex)</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Private Striptease</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Fetish And Fantasy</td>
                <td>The better</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ margin: "50px 50px 0 50px" }}>
        <h3 className="font-h text-center">Contact</h3>
        <br />
        <form action="" style={{ textAlign: "center" }}>
          <input
            className="form-email"
            type="email"
            placeholder="Enter email address"
          />
          <br />
          <br />
          <button className="book-now" type="submit">
            Contact Now
          </button>
        </form>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Profile;
