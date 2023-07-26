import React, { useState } from "react";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Document, Page, pdfjs } from "react-pdf";

import PdfExample from "../pdfFiles/mauroPereiraPresentation.pdf";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PPTPage({ pdfUrl }) {
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
      <div className="pdf-container">
        <Document file={PdfExample} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
      {/* <div>
        <Document file={PdfExample}>
          <Page pageNumber={1} />
        </Document>
      </div> */}
    </>
  );
}

export default PPTPage;
// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import pdfFile from '../pdfFiles/mauroPereiraPresentation.pdf'

// function PPTPage() {
//   const [numPages, setNumPages] = useState(null)
//   function onDocumentSuccess ({numPages}) {
//     setNumPages (numPages)
//   }
//   return (

//     <div style={{display: "flex", justifyContent: "center"}}>
//       <div style={{width: "700px", border: "2px solid gray"}}>
//         <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
//           {
//             Array(numPages).fill().map((_, index) => (
//               <Page pageNumber={ index + 1 }></Page>
//             ))
//           }

//         </Document>
//       </div>
//     </div>

//   )
// }

// export default PPTPage

// function PPTPage() {
//   const pdfUrl = ; // handle PDF file
//   return (
//     <div>
//       <Document file={pdfUrl}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

// export default PPTPage;

// import React, { useEffect } from "react";
// import "../styles/main.css";
// //import "../styles/ppt-page.css"; // Create a separate CSS file for PPTPage
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.js";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// function PPTPage({ pdfUrl }) {
//   useEffect(() => {
//     const loadPdf = async () => {
//       try {
//         const loadingTask = pdfjs.getDocument(pdfUrl);
//         const pdf = await loadingTask.promise;
//         const pageNumber = 1; // Adjust this value to change the displayed page number
//         const page = await pdf.getPage(pageNumber);
//         const scale = 1.5; // Adjust this value to change the zoom level
//         const viewport = page.getViewport({ scale });
//         const canvas = document.getElementById("pdf-canvas"); // Make sure you have a canvas element with id "pdf-canvas"
//         const context = canvas.getContext("2d");
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;
//         const renderContext = {
//           canvasContext: context,
//           viewport: viewport,
//         };
//         await page.render(renderContext);
//       } catch (error) {
//         console.error("Error loading PDF:", error);
//       }
//     };
//     loadPdf();
//   }, [pdfUrl]);

//   return (
//     <>
//       {/* Your header and navigation JSX here */}
//       <div>
//         <canvas id="pdf-canvas"></canvas>
//       </div>
//     </>
//   );
// }

// export default PPTPage;
