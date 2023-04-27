import React from "react";
import "../main.css";
import "../Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
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
            <ul className="head-item" style={{ display: "flex", justifyContent: "center",textAlign: "center"}}>
              <div className="head-items" style={{ display: "flex"}}>
                <a href="/Portfolio" style={{ textDecoration: "none", color: "inherit"}}>
                <p className="head-portfolio"style={{ margin: "0 30px"}}>
                  PORTFOLIO
                </p>
                </a>
                <a href="/Blog" style={{ textDecoration: "none", color: "inherit"}}>
                <p className="head-blog" style={{ margin: "0 30px"}} >
                  BLOG
                </p>
                </a>
                <a href="/About" style={{ textDecoration: "none", color: "inherit"}}>
                <p className="head-about"style={{ margin: "0 30px"}}>
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
      <main>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="row">
                <div className="carousel" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="card shadow-sm">
                        <div
                          className="bd-placeholder-img card-img-top"
                          style={{
                            backgroundImage: `url(${""})`,
                            width: "100%",
                            height: "250px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={""}
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
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={""}
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
                        <div
                          className="bd-placeholder-img card-img-top"
                          style={{
                            backgroundImage: `url(${""})`,
                            width: "auto",
                            height: "250px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={""}
                              >
                                Watch Video
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
                      data-bs-slide="next"
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
      {/* <div lang="en" data-bs-theme="auto"> */}

      <script src="../assets/js/color-modes.js"></script>

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta
        name="author"
        content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
      />
      <meta name="generator" content="Hugo 0.111.3" />
      <title>Product example · Bootstrap v5.3</title>

      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/product/"
      />

      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />

      <link href="product.css" rel="stylesheet" />

      <body>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
          <symbol id="check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
          </symbol>
          <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
          </symbol>
          <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
          </symbol>
          <symbol id="sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
          </symbol>
        </svg>

        <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button
            class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
            id="bd-theme"
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            aria-label="Toggle theme (auto)"
          >
            <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            <span class="visually-hidden" id="bd-theme-text">
              Toggle theme
            </span>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end shadow"
            aria-labelledby="bd-theme-text"
          >
            <li>
              <button
                type="button"
                class="dropdown-item d-flex align-items-center"
                data-bs-theme-value="light"
                aria-pressed="false"
              >
                <svg
                  class="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#sun-fill"></use>
                </svg>
                Light
                <svg class="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item d-flex align-items-center"
                data-bs-theme-value="dark"
                aria-pressed="false"
              >
                <svg
                  class="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#moon-stars-fill"></use>
                </svg>
                Dark
                <svg class="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item d-flex align-items-center active"
                data-bs-theme-value="auto"
                aria-pressed="true"
              >
                <svg
                  class="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#circle-half"></use>
                </svg>
                Auto
                <svg class="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <main>
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
              <h1 class="display-4 fw-normal">Punny headline</h1>
              <p class="lead fw-normal">
                And an even wittier subheading to boot. Jumpstart your marketing
                efforts with this example based on Apple’s marketing pages.
              </p>
              <a class="btn btn-outline-secondary" href="#">
                Coming soon
              </a>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div>

          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <div class="my-3 p-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">And an even wittier subheading WHITEEEE.</p>
                  </div>
                  <div
                    class="bg-dark shadow-sm mx-auto"
                    style={{
                      width: "80%",
                      height: "300px",
                      borderRadius: "21px 21px 0 0",
                    }}
                  ></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <div class="my-3 py-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">
                      And an even wittier subheading BBBLAAAACK.
                    </p>
                  </div>
                  <div
                    class="bg-body-tertiary shadow-sm mx-auto"
                    style={{
                      width: "80%",
                      height: "300px",
                      borderRadius: "21px 21px 0 0",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <div class="my-3 py-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">
                      And an even wittier subheading BBBLAAAACK.
                    </p>
                  </div>
                  <div
                    class="bg-body-tertiary shadow-sm mx-auto"
                    style={{
                      width: "80%",
                      height: "300px",
                      borderRadius: "21px 21px 0 0",
                    }}
                  ></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                  <div class="my-3 p-3">
                    <h2 class="display-5">Another headline</h2>
                    <p class="lead">And an even wittier subheading WHITEEEE.</p>
                  </div>
                  <div
                    class="bg-dark shadow-sm mx-auto"
                    style={{
                      width: "80%",
                      height: "300px",
                      borderRadius: "21px 21px 0 0",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </main>

        <footer class="container py-5">
          <div class="row">
            <div class="col-12 col-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="d-block mb-2"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
              </svg>
              <small class="d-block mb-3 text-body-secondary">
                © 2017–2023
              </small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </>
  );
}

export default Portfolio;
