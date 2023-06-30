import React, { useEffect, useState } from "react";
import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
// import {
//   DocumentCard,
//   DocumentCardPreview,
//   DocumentCardTitle,
// } from "@fluentui/react";

// import officegen from "officegen";

//import presentation from "../Mauro Pereira.pptx";

function PPTPage() {
  // const [slides, setSlides] = useState([]);

  // useEffect(() => {
  //   const generateSlides = async () => {
  //     const pptx = officegen('pptx');
  //     pptx.on('finalize', async (writtenData) => {
  //       const slideImages = [];

  //       for (let i = 0; i < pptx.slides.length; i++) {
  //         const slideData = pptx.slides[i];
  //         const slideImage = `data:image/png;base64,${slideData['slide.png']}`;

  //         slideImages.push(slideImage);
  //       }

  //       setSlides(slideImages);
  //     });

  //     pptx.on('error', (err) => {
  //       console.error(err);
  //     });

      // Load PowerPoint file
  //     pptx.load('path/to/Mauro Pereira.pptx');

  //     await pptx.render();
  //   };

  //   generateSlides();
  // }, []);


  return (
    <>
      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/album/"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

      <header data-bs-theme="dark">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#E49393" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                aria-hidden="true"
                className="me-2"
                viewBox="0 0 24 24"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>

              <strong>Sylvia</strong>
              <h6>Learning Experience Designer</h6>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarHeader">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 py-4"></div>
                  <div className="col-sm-4 offset-md-1 py-4">
                    <ul className="list-unstyled d-flex justify-content-end">
                      {" "}
                      <li className="mx-2">
                        {" "}
                        <a
                          href="https://www.linkedin.com/in/sylviabpereira/"
                          className="text-white"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2xl"
                            style={{ color: "#bbbcbf" }}
                          />
                        </a>
                      </li>
                      <li className="mx-2">
                        {" "}
                        <a
                          href="mailto:sylvia.bachiegga@hotmail.com"
                          className="text-white"
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            size="2xl"
                            style={{ color: "#bbbcbf" }}
                          />
                        </a>
                      </li>
                      <li className="mx-2">
                        {" "}
                        <a href="#" className="text-white">
                          <FontAwesomeIcon
                            icon={faFileLines}
                            size="2xl"
                            style={{ color: "#bbbcbf" }}
                          />
                        </a>
                      </li>
                      <li className="mx-2">
                        {" "}
                        <a href="/Admin" className="text-white">
                          <FontAwesomeIcon
                            icon={faToolbox}
                            size="2xl"
                            style={{ color: "#bbbcbf" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <div>
        <h1>My Presentation</h1>
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index + 1}`} />
        ))}
      </div> */}
      {/* <div>
      <h1>My Presentation</h1>
      <Presentation>
        <Slide>
          <img src={presentation} alt="Presentation Slide" />
        </Slide>
      </Presentation>
    </div> */}
      {/* <DocumentCard>
        <DocumentCardPreview
          previewImages={[
            {
              previewImageSrc: 'path-to-your-presentation-thumbnail',
              width: 318,
              height: 196,
              accentColor: '#ce4b1f',
            },
          ]}
        />
        <DocumentCardTitle title="Watch Presentation" />
      </DocumentCard> */}
    </>
  );
}

export default PPTPage;
