import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import SylviaResume from "../pdfFiles/Sylvia_Pereira_Resume_2022[4520].pdf"; 

import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

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
      <div className="parent-container-resume">
      <div className="pdf-container-resume">
        <Document file={SylviaResume} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (element, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
      </div>
      </main>
      <footer>
        <div className="back-to-top">
        <p>
          <a href="#">Back to top</a>
        </p></div>
        </footer>
    </>
  )
}

export default Resume;