import React from "react";
import { Header, Footer } from "../helpers.jsx";

import "../styles/resume.css";

function Resume() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default Resume;
