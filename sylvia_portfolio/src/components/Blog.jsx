import React, { useState, useEffect } from "react";
import "../main.css";
import "../Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/Sylvia_text_logo.png";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

  const handleContinueReading = (e, postId) => {
    e.preventDefault();
    setExpandedPostId((prevExpandedPostId) =>
      prevExpandedPostId === postId ? null : postId
    );
  };

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
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="sylvia-logo-container">
                <img
                  className="sylvia-logo"
                  src={SylviaLogo}
                  alt="Sylvia Logo"
                />
              </div>
            </a>

            <div className="flow-container-1">
              <img
                className="flow-background-1"
                src={FlowBackground}
                alt="Background 1"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                  backgroundSize: "120%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  marginTop: "15px",
                  display: "flex",
                }}
              />
            </div>
          </div>
        </nav>
      </header>

      <main className="container">
        <div className="p-2 p-md-5 mb-5 rounded">
          <div className="col-md-6 px-0">
            <h1 className="display-2 fst-italic ">
              Here is where I share my thoutghs and ideas!
            </h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
          {posts.map((post) => {
            const isExpanded = post.id === expandedPostId;

            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            );

            return (
              <div
                key={post.id}
                className={`col-md-12 ${isExpanded ? "expanded" : ""}`}
              >
                <div className="post-row mb-4">
                  <div
                    className={`border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-primary">
                        {post.category}
                      </strong>
                      <h3
                        className="mb-0"
                        style={{ fontSize: "38px", padding: "6px" }}
                      >
                        {post.title}
                      </h3>
                      <div className="mb-1 text-body-secondary">
                        {formattedDate}
                      </div>
                      <div className="mb-1 text-body-secondary">
                        By {post.author}
                      </div>
                      <div
                        className={`post-content ${isExpanded ? "show" : ""}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                        style={{ fontSize: "140%", padding: "8px" }}
                      />
                      <a
                        href="#"
                        className="stretched-link"
                        onClick={(clickEvent) =>
                          handleContinueReading(clickEvent, post.id)
                        }
                        style={{ fontSize: "18px", padding: "8px" }}
                      >
                        {isExpanded ? "Hide content" : "Continue reading"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom"></h3>
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}

export default Blog;
