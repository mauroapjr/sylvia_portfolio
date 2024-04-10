import React from "react";
import Alteryx from "../src/images/alteryxSS.png";
import Movidaria from "../src/images/movidariaS.png";
import RoyalConservatory from "../src/images/Royal_Conservatory_of_Music_logo.svgS.png";
import TVO from "../src/images/TVOS.jpg";
import CTC from "../src/images/canadian-tire-logoS.png";
import ProfileImage from "../src/images/Profile_picture.jpg";
import SylviaLogo from "../src/images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background-no-flower.png";

import "../src/styles/main.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

const imageUrls = [Alteryx, Movidaria, CTC, TVO, RoyalConservatory];

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="header-content">
          <a className="navbar-brand" href="/">
            <img
              className="profile-image"
              src={ProfileImage}
              alt="Profile Image"
            />
            <img
              className="sylvia-logo-main"
              src={SylviaLogo}
              alt="Sylvia Logo"
            />
          </a>
        </div>
        <div className="navbar-menu">
          <a href="/login" className="navbar-link">
            Portfolio
          </a>
          <a href="/blog" className="navbar-link">
            Blog
          </a>
          <a href="/about" className="navbar-link">
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export const ImageGallery = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#5f5a5a",
      padding: "20px",
    }}
  >
    {imageUrls.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Slide ${index}`}
        style={{
          width: "100px",
          height: "auto",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      />
    ))}
  </div>
);

export const Footer = () => {
  return (
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
  );
};
