import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import "../main.css";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Main() {
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate("/VideoPage");
  };

  const storyViewClick = () => {
    navigate("/StorylinePage");
  };

  return (
    <>
      <body>
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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                      <ul className="list-unstyled"></ul>
                      <Login />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">About me</h1>
                <p className="lead text-body-secondary">
                  Customer Education Specialist | Learning Experience Designer |
                  eLearning Developer | Adult Learning Specialist | Learning
                  Analytics | Localization | Curious by Nature
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2 mx-2">
                    Main call to action
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Secondary action
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="row">
                  <div className="carousel" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="card shadow-sm">
                          <svg
                            className="bd-placeholder-img card-img-top"
                            width="100%"
                            height="225"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                          >
                            <title>Placeholder</title>
                            <rect
                              width="100%"
                              height="100%"
                              fill="#55595c"
                            ></rect>
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/67QNw2xQlsk"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                              gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>

                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                              E-Learning
                            </text>
                          </svg>
                          <div className="card-body">
                            <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                  onClick={handleViewClick}
                                >
                                  Watch Video
                                </button>
                              </div>

                              <small className="text-body-secondary">
                                1 min 20'
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card shadow-sm">
                          <svg
                            className="bd-placeholder-img card-img-top"
                            width="100%"
                            height="225"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                          >
                            <title>Placeholder</title>
                            <rect
                              width="100%"
                              height="100%"
                              fill="#55595c"
                            ></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                              Instructor Lead-training
                            </text>
                          </svg>
                          <div className="card-body">
                            <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  View
                                </button>
                              </div>
                              <small className="text-body-secondary">
                                9 mins
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card shadow-sm">
                          <svg
                            className="bd-placeholder-img card-img-top"
                            width="100%"
                            height="225"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                          >
                            <title>Placeholder</title>
                            <rect
                              width="100%"
                              height="100%"
                              fill="#55595c"
                            ></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                              Storyline video
                            </text>
                          </svg>
                          <div className="card-body">
                            <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                  onClick={storyViewClick}
                                >
                                  Watch video
                                </button>
                              </div>
                              <small className="text-body-secondary">
                                2 min 39'
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target=".carousel"
                        data-bs-slide="prev"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                          width: "18px",
                          height: "100%",
                          margin: "-20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          width="24px"
                          height="24px"
                        >
                          <path d="M15.41,18.59L10.83,14l4.58-4.59L14,8l-6,6,6,6Z" />
                        </svg>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target=".carousel"
                        data-bs-slide="prev"
                        style={{
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                          width: "18px",
                          height: "100%",
                          margin: "-20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transform: "rotate(180deg)",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          width="24px"
                          height="24px"
                        >
                          <path d="M15.41,18.59L10.83,14l4.58-4.59L14,8l-6,6,6,6Z" />
                        </svg>
                        <span className="visually-hidden">Previous</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="text-body-secondary py-5 footer-dark-grey">
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
        </footer>

        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
}
