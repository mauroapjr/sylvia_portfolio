import React from "react";

import ProfileImage from "../images/Profile_picture.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background-no-flower.png";
import "../styles/resume.css";

function Resume() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <div className="header-content">
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
            </div>
          </a>
        </nav>
      </header>
      <main>
        <div className="resume-container">
          <iframe
            title="Resume"
            src="https://resume.creddle.io/resume/bp52urjocg3"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>
      </main>
    </>
  );
}

export default Resume;
