import React from "react";
import "../main.css";
import "../Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useNavigate } from "react-router-dom";

import SylviaSmallLogo from "../images/Sylvia_Logo_Salmon_Short.png";
import YoutubeImage from "../images/Youtube_image.JPG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const navigate = useNavigate(); // handle the youtube video

  const handleClick = () => {
    navigate("/VideoPage");
  };

  return (
    <>
      <script src="../assets/js/color-modes.js"></script>

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
              ></svg>
              <img
                className="SylviaSmallLogo"
                src={SylviaSmallLogo}
                alt="SylviaSmallLogo"
              />
            </a>
            <ul
              className="head-item"
              style={{
                display: "flex",
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
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Punny headline</h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing
              efforts with this example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">"Desafio Semanal"</h2>
                  <p className="lead text-dark">Short video that explain...</p>
                </div>
                <div
                  className="bg-dark shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "20px",
                    borderRadius: "21px 21px 0 0",
                    backgroundImage: `url(${YoutubeImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleClick}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">Another headline</h2>
                  <p className="lead">
                    And an even wittier subheading BBBLAAAACK.
                  </p>
                </div>
                <div
                  className="bg-body-tertiary shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    borderRadius: "21px 21px 0 0",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">Another headline</h2>
                  <p className="lead">
                    And an even wittier subheading BBBLAAAACK.
                  </p>
                </div>
                <div
                  className="bg-body-tertiary shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    borderRadius: "21px 21px 0 0",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">Another headline</h2>
                  <p className="lead">
                    And an even wittier subheading WHITEEEE.
                  </p>
                </div>
                <div
                  className="bg-dark shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    borderRadius: "21px 21px 0 0",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
            </svg>
            <small className="d-block mb-3 text-body-secondary">
              mauro pereira © 2023
            </small>
          </div>
        </div>
      </footer>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Portfolio;
