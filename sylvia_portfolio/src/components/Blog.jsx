import React, { useState, useEffect } from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import InstImage from "../images/inst_designer.png";
import SylviaShortLogo from "../images/Sylvia_Logo_Salmon_Short.png";
import Lines from "../images/Lines.png";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Admin")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .then((error) => console.log(error));
  }, []);

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
      <body>
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
                  backgroundColor="#705846"
                ></svg>
                <img
                  className="sylvia-short-logo"
                  src={SylviaShortLogo}
                  alt="sylvia short logo"
                />
              </a>
              <ul
                className="head-item"
                style={{
                  display: "flex",
                  marginTop: "80px",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="head-items" style={{ display: "flex" }}>
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
              <div className="collapse navbar-collapse" id="navbarHeader">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-8 col-md-7 py-4"></div>
                    <div className="col-sm-4 offset-md-1 py-4">
                      <ul className="list-unstyled"></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <img
          className="line-header"
          src={Lines}
          alt="lines"
          style={{ width: "100%" }}
        />
        </body>
      <body>
        <main class="container">
          <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div class="col-md-6 px-0">
              <h1 class="display-4 fst-italic">
                Here is where I share my thoutghs and ideas!
              </h1>
              <p class="lead my-3">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
            {posts.map((post) => {
              const processedContent = new DOMParser().parseFromString(
                post.content,
                "text/html"
              ).documentElement.textContent;
              post.processedContent = processedContent;

              const styling = JSON.parse(post.styling || "{}");
              const deltaContent = JSON.parse(post.deltaContent || "{}");
              const plainTextContent = post.plainTextContent || "";

              return (
                <div key={post.id} className="row mb-4">
                  <div className="col-md-12">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <img
                        className="InstImage"
                        src={InstImage}
                        alt="InstImage"
                      />
                      <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">
                          {post.category}
                        </strong>
                        <h3 className="mb-0">{post.title}</h3>
                        <div className="mb-1 text-body-secondary">
                          {post.date}
                        </div>
                        <div className="mb-1 text-body-secondary">By {post.author}</div>
                        <p className="card-text mb-auto">
                          {post.processedContent}
                        </p>
                        <a href="#" className="stretched-link">
                          Continue reading
                        </a>
                      </div>
                      <div className="col-auto d-none d-lg-block thumbnail-container"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div class="row g-5">
            <div class="col-md-8">
              <h3 class="pb-4 mb-4 fst-italic border-bottom"></h3>
            </div>

            <div class="col-md-4">
              <div class="position-sticky" style={{ top: "2rem" }}>
                <div class="p-4 mb-3 bg-body-tertiary rounded">
                  <h4 class="fst-italic">About</h4>
                  <p class="mb-0">
                    Customize this section to tell your visitors a little bit
                    about your publication, writers, content, or something else
                    entirely. Totally up to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-body-secondary py-5"
        style={{ backgroundColor: "#408E91" }}>
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
                      style={{ color: "#D8D8D8" }}
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
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
                <li className="mx-2">
                  {" "}
                  <a href="#" className="text-white">
                    <FontAwesomeIcon
                      icon={faFileLines}
                      size="2xl"
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
                <li className="mx-2">
                  {" "}
                  <a href="/Admin" className="text-white">
                    <FontAwesomeIcon
                      icon={faToolbox}
                      size="2xl"
                      style={{ color: "#D8D8D8" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <p>
            <a href="#">Back to top</a>
          </p>

        </footer>
      </body>
    </>
  );
}

export default Blog;
