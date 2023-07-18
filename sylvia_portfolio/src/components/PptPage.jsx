import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const pdfUrl = "src\images\mauroPereiraPresentation.pdf"; // handle PDF file

function PPTPage({ pdfUrl }) {
  
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PPTPage;


// import React from "react";
// import "../styles/main.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faFileLines } from "@fortawesome/free-regular-svg-icons";
// import { faToolbox } from "@fortawesome/free-solid-svg-icons";
// import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// function PPTPage({ pdfUrl }) {
  
//   return (
//     <>
      
//       <header data-bs-theme="dark">
//         <nav
//           className="navbar navbar-expand-lg navbar-dark"
//           style={{ backgroundColor: "#E49393" }}
//         >
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 aria-hidden="true"
//                 className="me-2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
//                 <circle cx="12" cy="13" r="4"></circle>
//               </svg>

//               <strong>Sylvia</strong>
//               <h6>Learning Experience Designer</h6>
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarHeader"
//               aria-controls="navbarHeader"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarHeader">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-sm-8 col-md-7 py-4"></div>
//                   <div className="col-sm-4 offset-md-1 py-4">
//                     <ul className="list-unstyled d-flex justify-content-end">
//                       {" "}
//                       <li className="mx-2">
//                         {" "}
//                         <a
//                           href="https://www.linkedin.com/in/sylviabpereira/"
//                           className="text-white"
//                         >
//                           <FontAwesomeIcon
//                             icon={faLinkedin}
//                             size="2xl"
//                             style={{ color: "#bbbcbf" }}
//                           />
//                         </a>
//                       </li>
//                       <li className="mx-2">
//                         {" "}
//                         <a
//                           href="mailto:sylvia.bachiegga@hotmail.com"
//                           className="text-white"
//                         >
//                           <FontAwesomeIcon
//                             icon={faEnvelope}
//                             size="2xl"
//                             style={{ color: "#bbbcbf" }}
//                           />
//                         </a>
//                       </li>
//                       <li className="mx-2">
//                         {" "}
//                         <a href="#" className="text-white">
//                           <FontAwesomeIcon
//                             icon={faFileLines}
//                             size="2xl"
//                             style={{ color: "#bbbcbf" }}
//                           />
//                         </a>
//                       </li>
//                       <li className="mx-2">
//                         {" "}
//                         <a href="/Admin" className="text-white">
//                           <FontAwesomeIcon
//                             icon={faToolbox}
//                             size="2xl"
//                             style={{ color: "#bbbcbf" }}
//                           />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <div>
//       <Document file={pdfUrl}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>

      
//     </>
//   );
// }

// export default PPTPage;
