import React, { useState } from "react";
import "../styles/main.css";
import "../styles/portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useNavigate } from "react-router-dom";
import { initializeIcons } from "@uifabric/icons";

import YoutubeImage from "../images/Youtube_image.JPG";
import StorylineImage from "../images/Storyline.JPG";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";
import InstDesigner from "../images/inst_designer.png";
// import PPTPage from "./PPTPage";

initializeIcons();

function Portfolio({ isAuthenticated }) {
  const navigate = useNavigate(); // handle youtube video
  //const [showPdf, setShowPdf] = useState(false);
  
  const handleClick = () => {
    navigate("/VideoPage");
  };

  const handleClickStoryline = () => {
    navigate("/StorylinePage");
  };

  const handleShowPdf = () => {
    navigate("/PPTPage");
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-4 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">"Desafio Semanal"</h2>
                  <p className="lead text-dark">Short video that explain...</p>
                </div>
                <div
                  className="bg-dark shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "5%",
                    borderRadius: "21px 21px 0 0",
                    backgroundImage: `url(${YoutubeImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleClick}
                    style={{
                      marginBottom: "40%",
                      backgroundColor: "#245953",
                      color: "white",
                    }}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">"StoryLine Presentation"</h2>
                  <p className="lead">Short video that explain...</p>
                </div>
                <div
                  className="bg-body-tertiary shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "5%",
                    borderRadius: "21px 21px 0 0",
                    backgroundImage: `url(${StorylineImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleClickStoryline}
                    style={{
                      marginBottom: "40%",
                      backgroundColor: "#245953",
                      color: "white",
                    }}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">TBD</h2>
                  <p className="lead">Short video that explain...</p>
                </div>
                <div
                  className="bg-body-tertiary shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "5%",
                    borderRadius: "21px 21px 0 0",
                    backgroundImage: `url(${StorylineImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleClickStoryline}
                    style={{
                      marginBottom: "40%",
                      backgroundColor: "#245953",
                      color: "white",
                    }}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">TBD</h2>
                  <p className="lead">Short video that explain...</p>
                </div>
                <div
                  className="bg-body-tertiary shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "5%",
                    borderRadius: "21px 21px 0 0",
                    backgroundImage: `url(${StorylineImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleShowPdf}
                    style={{
                      marginBottom: "40%",
                      backgroundColor: "#245953",
                      color: "white",
                    }}
                  >
                    Watch Video
                  </button>
                </div>
                {/* <div className="btn-group">
                  <DocumentCard onClick={handleClickPpt}>
                    <DocumentCardPreview
                      previewImages={[
                        {
                          previewImageSrc:
                            "path-to-your-presentation-thumbnail",
                          width: 318,
                          height: 196,
                          accentColor: "#ce4b1f",
                        },
                      ]}
                    />
                    <DocumentCardTitle title="Watch Presentation" />
                  </DocumentCard>
                </div> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">TBD</h2>
                  <p className="lead">Short video that explain...</p>
                </div>
                <div
                  className="bg-dark shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "5%",
                    borderRadius: "21px 21px 0 0",
                    backgroundImage: `url(${InstDesigner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleClick}
                    style={{
                      marginBottom: "40%",
                      backgroundColor: "#245953",
                      color: "white",
                    }}
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* <div>
      <h1>Portfolio Page</h1>
      <button onClick={handleShowPdf}>Show PDF</button>
      {showPdf && <PPTPage pdfUrl={pdfUrl} />}
    </div> */}




      </main>

      <footer className="container py-5">
        <ul
          className="head-item"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            className="head-items"
            style={{ display: "flex", fontSize: "155%" }}
          >
            <a
              href="/Portfolio"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="head-portfolio" style={{ margin: "0 30px" }}>
                PORTFOLIO
              </p>
            </a>
            <a
              href="/Blog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="head-blog" style={{ margin: "0 30px" }}>
                BLOG
              </p>
            </a>
            <a
              href="/About"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="head-about" style={{ margin: "0 30px" }}>
                ABOUT
              </p>
            </a>
          </div>
        </ul>
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
        <p>
          <a href="#">Back to top</a>
        </p>
        <div className="row">
          <div className="col-12 col-md d-flex justify-content-center">
            <small className="d-block mb-3 text-body-secondary">
              mauroPereira©2023
            </small>
          </div>
        </div>
      </footer>

      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Portfolio;

// export default function PortfolioWrapper() {
//   return (
//     <ProtectedRoute
//       component={Portfolio}
//       isAuthenticated={isAuthenticated}
//       path="/Portfolio/*"
//     />
//   );
// }
