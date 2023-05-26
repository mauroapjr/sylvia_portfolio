import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import "../main.css";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Alteryx from "../images/alteryx.png";
import Movidaria from "../images/movidaria.png";
import RoyalConservatory from "../images/Royal_Conservatory_of_Music_logo.svg.png";
import TVO from "../images/TVO.jpg";
import CTC from "../images/canadian-tire-logo.png";
import ProfileImage from "../images/Profile_picture.jpg";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/Sylvia_text_logo.png";

export default function Main() {
  return (
    <>
      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/album/"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="profile-image-container">
                <img
                  className="profile-image"
                  src={ProfileImage}
                  alt="Profile Image"
                />
                <div className="sylvia-logo-container">
                  <img
                    className="sylvia-logo"
                    src={SylviaLogo}
                    alt="Sylvia Logo"
                  />
                </div>
              </div>
            </a>

            <div className="flow-container">
              <img
                className="flow-background"
                src={FlowBackground}
                alt="Background 1"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                  backgroundSize: "120%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  marginTop: "15px",
                  display: "flex",
                }}
              />
              <img
                className="flow-background"
                src={FlowBackground}
                alt="Background 2"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left",
                  display: "flex",
                  width: "60%",
                  marginTop: "75px",
                  transform: "rotate(90deg)",
                  position: "absolute",
                  top: 520,
                  left: -540,
                  zIndex: -2,
                }}
              />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <section className="text-start">
                <p
                  className="lead text-body-secondary"
                  style={{
                    textAlign: "left",
                    height: "300px",
                    marginLeft: "10%",
                    marginTop: "5%",
                    fontSize: "25px",
                  }}
                >
                  I am a lifelong learner driven by an insatiable curiosity and
                  a tenacious spirit. People would describe me as a dedicated
                  and energetic individual who fearlessly takes on new
                  challenges and explores innovative avenues to achieve success.
                  Throughout the years, I have immersed myself in diverse
                  fields, from music to data analysis, from academic high-school
                  courses to customer education. My passion lies in learning and
                  development, and I am always up to talk about education
                  projects.
                </p>

                <h6
                  className="fw-light"
                  style={{
                    textAlign: "left",
                    marginLeft: "10%",
                    marginTop: "15%",
                    padding: "20px",
                    fontSize: "20px",
                  }}
                >
                  Customer Education | Learning Experience Designer | eLearning
                  Developer | Adult Learning Specialist | Learning Analytics |
                  Localization | Curious by Nature
                </h6>
              </section>
            </div>

            <section
              className="box-right"
              style={{
                backgroundColor: "rgb(204, 202, 202)",
                width: "40%",
                height: "500%",
                marginLeft: "auto",
                marginRight: "0px",
                zIndex: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                className="link-items"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginLeft: "450px",
                  fontSize: "35px",
                }}
              >
                <a
                  href="/Portfolio"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginTop: "180px",
                    margin: "15px -40px",
                    zIndex: 1,
                  }}
                >
                  <p className="link-portfolio">PORTFOLIO</p>
                </a>
                <a
                  href="/Blog"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    margin: "15px -38px",
                    zIndex: 1,
                  }}
                >
                  <p className="link-blog">BLOG</p>
                </a>
                <a
                  href="/About"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    margin: "15px -33px",
                    marginBottom: "180px",
                    zIndex: 1,
                  }}
                >
                  <p className="link-about">ABOUT</p>
                </a>
              </div>
              <ul className="list-unstyled"></ul>
            </section>
          </div>
        </div>

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <div className="container">
                <div
                  className="carousel-caption text-start"
                  style={{
                    backgroundImage: `url(${Alteryx})`,
                    width: "50%",
                    height: "100px",
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>

              <div className="container">
                <div
                  className="carousel-caption"
                  style={{
                    backgroundImage: `url(${Movidaria})`,
                    width: "10%",
                    height: "100px",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>

            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>

              <div className="container">
                <div
                  className="carousel-caption"
                  style={{
                    backgroundImage: `url(${CTC})`,
                    width: "10%",
                    height: "100px",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>

            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>

              <div className="container">
                <div
                  className="carousel-caption"
                  style={{
                    backgroundImage: `url(${TVO})`,
                    width: "10%",
                    height: "100px",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>

            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-color)"
                ></rect>
              </svg>
              <div className="container">
                <div
                  className="carousel-caption text-end"
                  style={{
                    backgroundImage: `url(${RoyalConservatory})`,
                    width: "15%",
                    height: "100px",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>

      <footer
        className="text-body-secondary"
        style={{ backgroundColor: "#408E91", padding: "4% 0" }}
      >
        <div className="float-start ms-5">
          <Login />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4"></div>
            <div className="col-sm-4 offset-md-1 py-4">
              <ul className="list-unstyled d-flex justify-content-end">
                {" "}
                <li className="mx-2">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/sylviabpereira/"
                    className="text-white"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
                <li className="mx-2">
                  {" "}
                  <a
                    href="mailto:sylvia.bachiegga@hotmail.com"
                    className="text-white"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2xl"
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
                <li className="mx-2">
                  {" "}
                  <a href="#" className="text-white">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      size="2xl"
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
                <li className="mx-2">
                  {" "}
                  <a href="/Admin" className="text-white">
                    <FontAwesomeIcon
                      icon={faToolbox}
                      size="2xl"
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <small className="d-block mb-3 text-white text-center">
            mauroPereira©2023
          </small>
        </div>
      </footer>

      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
