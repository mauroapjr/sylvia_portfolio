import React, { useState } from "react";
import "../styles/main.css";
import "../styles/portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Header, Footer } from "../helpers.jsx";
import { useNavigate } from "react-router-dom";
import { initializeIcons } from "@uifabric/icons";

import StorylineImage from "../images/Storyline.JPG";
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
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">PDF</h2>
                  <p className="lead">
                    Short .pdf presentation that explain...
                  </p>
                </div>
                <div
                  className="bg-body-tertiary shadow-sm mx-auto"
                  style={{
                    width: "80%",
                    height: "300px",
                    marginBottom: "6%",
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
                    Open file
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-body-tertiary custom-bg-color me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">Instructional Designer</h2>
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
      </main>

      <Footer />
    </>
  );
}

export default Portfolio;
