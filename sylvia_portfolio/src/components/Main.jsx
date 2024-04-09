import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { ImageGallery } from "../helpers.jsx";

import "../styles/main.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ProfileImage from "../images/Profile_picture.jpg";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";

export default function Main() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <div className="profile-image-container">
              <img
                className="profile-image"
                src={ProfileImage}
                alt="Profile Image"
              />
              <div className="sylvia-logo-container">
                <img
                  className="sylvia-logo-main"
                  src={SylviaLogo}
                  alt="Sylvia Logo"
                />
              </div>
            </div>

            <div className="flow-container">
              <img
                className="flow-background-main-1"
                src={FlowBackground}
                alt="Background 1"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                }}
              />
            </div>
          </a>
        </nav>
      </header>

      <main>
        <div className="page-container">
          <div className="text-container">
            <h3 className="long-text">Nice to e-meet you!</h3>
            <h3 className="long-text">
              I'm Sylvia Pereira, an enthusiastic learning designer who's all
              about embracing the joy of constant learning. I've ventured into a
              world of skills that includes music, data analysis, high-school
              courses, and customer education.
            </h3>
            <h3 className="long-text">
              If you ask people to describe me, they would likely tell you,
              "Sylvia is curious, energetic, dedicated, and committed to any
              task at hand.“
            </h3>
            <h3 className="long-text">
              Here's a summary of my expertise in the field of learning design:
              <ul>
                <li>Adult Education Principles</li>
                <li>Learner-Centric Approach</li>
                <li>Learning Transfer</li>
                <li>Metrics & Evaluation</li>
              </ul>
            </h3>
            <h2 className="text-title">Main Projects</h2>
          </div>
          <div className="badge-container">
            <section className="box-right">
              <div className="link-items">
                <a
                  href="/Login"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="badge rounded-pill text-bg-secondary link-portfolio">
                    PORTFOLIO
                  </p>
                </a>
                <a
                  href="/Blog"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="badge rounded-pill text-bg-secondary link-blog">
                    BLOG
                  </p>
                </a>
                <a
                  href="/About"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="badge rounded-pill text-bg-secondary link-about">
                    ABOUT
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
        <ImageGallery />
        {/* <Carousel /> */}
      </main>

      <footer
        className="text-body-secondary"
        style={{ backgroundColor: "#9EBA99", padding: "1% 0", height: "50%" }}
      >
        <div className="container">
          <div className="row">
            <ul className="list-unstyled">
              <li className="mx-3">
                <a
                  href="https://www.linkedin.com/in/sylviabpereira/"
                  className="text-white"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2xl"
                    style={{ color: "#343a40" }}
                  />
                </a>
              </li>

              <li className="mx-3">
                <a
                  href="mailto:sylvia.bachiegga@hotmail.com"
                  className="text-white"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2xl"
                    style={{ color: "#343a40" }}
                  />
                </a>
              </li>

              <li className="mx-3">
                <a href="/Resume" className="text-white">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    size="2xl"
                    style={{ color: "#343a40" }}
                  />
                </a>
              </li>

              <li className="mx-3">
                <a href="/Admin" className="text-white">
                  <FontAwesomeIcon
                    icon={faToolbox}
                    size="2xl"
                    style={{ color: "#343a40" }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <small className="d-block mb-3 text-dark-grey text-center">
            mauroPereira©2023
          </small>
        </div>
      </footer>
    </>
  );
}
