import React, { useState } from "react";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/pptPage.css";

import { Document, Page, pdfjs } from "react-pdf";
import { Link } from "react-router-dom";
import { Header, Footer } from "../helpers.jsx";

import PdfExample from "../pdfFiles/mauroPereiraPresentation.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PPTPage({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Header />
      <main>
        <div className="parent-container">
          <div className="pdf-container">
            <Document file={PdfExample} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (element, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      </main>
      <Link to="/portfolio" className="btn btn-primary">
        Return to Portfolio
      </Link>
      <div className="back-to-top">
        <p>
          <a href="#">Back to top</a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default PPTPage;
