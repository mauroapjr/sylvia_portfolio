import React from "react";
import "../main.css";
import "../About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import SylviaShortLogo from "../images/Sylvia_Logo_Salmon_Short.png";
import Lines from "../images/Lines.png";
import ProfilePicture from "../images/Profile_picture.jpg";

function About() {
  return (
    <>
      <body>
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
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#E49393" }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="me-2"
                  viewBox="0 0 24 24"
                  backgroundColor="#705846"
                ></svg>
                <img
                  className="sylvia-short-logo"
                  src={SylviaShortLogo}
                  alt="sylvia short logo"
                />
              </a>
              <ul
                className="head-item"
                style={{
                  display: "flex",
                  marginTop: "80px",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="head-items" style={{ display: "flex" }}>
                  <a
                    href="/Portfolio"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p className="head-portfolio" style={{ margin: "0 30px" }}>
                      PORTFOLIO
                    </p>
                  </a>
                  <a
                    href="/Blog"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p className="head-blog" style={{ margin: "0 30px" }}>
                      BLOG
                    </p>
                  </a>
                  <a
                    href="/About"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p className="head-about" style={{ margin: "0 30px" }}>
                      ABOUT
                    </p>
                  </a>
                </div>
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarHeader">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8 col-md-7 py-4"></div>
                    <div className="col-sm-4 offset-md-1 py-4">
                      <ul className="list-unstyled"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <img
          className="line-header"
          src={Lines}
          alt="lines"
          style={{ width: "100%" }}
        />
      </body>
      <main>
        <img
          className="profile-picture"
          src={ProfilePicture}
          alt="picture"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
        />
      </main>

      <footer
        className="text-body-secondary py-5"
        style={{ backgroundColor: "#408E91" }}
      >
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
        </div>
      </footer>
    </>
  );
}

export default About;
