import React, { useState } from "react";

import ResumePg1 from "../images/Sylvia_Resume_pg1.JPG";
import ResumePg2 from "../images/Sylvia_Resume_pg2.JPG";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";

import "../styles/resume.css";

function Resume() {
  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <div className="sylvia-logo-container-about">
              <img
                className="sylvia-logo-about"
                src={SylviaLogo}
                alt="Sylvia Logo"
              />
            </div>
          </a>
          <div className="flow-container-about">
            <img
              className="flow-background-about"
              src={FlowBackground}
              alt="Background about"
              style={{
                backgroundImage: `url(${FlowBackground})`,
              }}
            />
          </div>
        </nav>
      </header>
      <main>
        <div className="resume-container">
        <iframe
            title="Resume"
            src="https://resume.creddle.io/resume/bp52urjocg3"
            width="100%"
            height="1000px" 
            style={{ border: "none" }}
            allowFullScreen 
          />
          {/* <img className="resume-pg1" src={ResumePg1} alt="Page 1"/>
          <img className="resume-pg2" src={ResumePg2} alt="Page 2"/> */}
        </div>
      </main>
      {/* <footer>
        <div className="back-to-top">
          <p>
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer> */}
    </>
  );
}

export default Resume;
