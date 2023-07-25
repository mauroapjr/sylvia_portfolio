import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Alteryx from "../images/alteryx.png";
import Movidaria from "../images/movidaria.png";
import RoyalConservatory from "../images/Royal_Conservatory_of_Music_logo.svg.png";
import TVO from "../images/TVO.jpg";
import CTC from "../images/canadian-tire-logo.png";
import ProfileImage from "../images/Profile_picture.jpg";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";

export default function Main() {
  
  return (
    <>
      <header >
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
                className="flow-background-1"
                src={FlowBackground}
                alt="Background 1"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                }}
              />
              {/* <img
                className="flow-background-2"
                src={FlowBackground}
                alt="Background 2"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                  
                }}
              /> */}
            </div>
          </a>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="box-left">
            <img
                className="flow-background-2"
                src={FlowBackground}
                alt="Background 2"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                  
                }}
              />
            </div>
           
                <h3
                  className="long-text"
                  
                >
                  I am a lifelong learner driven by an insatiable curiosity and
                  a tenacious spirit. People would describe me as a dedicated
                  and energetic individual who fearlessly takes on new
                  challenges and explores innovative avenues to achieve success.
                  
                </h3>
                <h3 className="long-text">Throughout the years, I have immersed myself in diverse
                  fields, from music to data analysis, from academic high-school
                  courses to customer education. My passion lies in learning and
                  development, and I am always up to talk about education
                  projects.</h3>

                <h6
                  className="short-text"
                  
                >
                  Customer Education | Learning Experience Designer | eLearning
                  Developer | Adult Learning Specialist | Learning Analytics |
                  Localization | Curious by Nature
                </h6>
             

            <section
              className="box-right"
              
            >
              <div
                className="link-items"
                
              >
                <a
                  href="/Login"
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

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
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
                    width: "30%",
                    height: "100px",
                    backgroundSize: "30%",
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
                    width: "20%",
                    height: "100px",
                    backgroundSize: "25%",
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
                    width: "20%",
                    height: "80px",
                    marginBottom: "10px",
                    backgroundSize: "18%",
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
                    width: "20%",
                    height: "100px",
                    backgroundSize: "35%",
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
                    width: "20%",
                    height: "120px",
                    backgroundSize: "40%",
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
        style={{ backgroundColor: "#9EBA99", padding: "1% 0", height: "50%" }}
      >
        
        <div className="container">
          <div className="row" >
            
              <ul className="list-unstyled" >
                
                <li className="mx-3" >
                  
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
                 
                  <a href="#" className="text-white">
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

      {/* <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossOrigin="anonymous"
      ></script> */}
    </>
  );
}
