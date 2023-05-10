import React from "react";
import "../main.css";
import "../About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

import SylviaShortLogo from "../images/Sylvia_Logo_Salmon_Short.png";
import Lines from "../images/Lines.png";
import ProfilePicture from "../images/Profile_picture.jpg";

function About() {
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

      <main>
        <div className="profile-picture-container">
          <img className="profile-picture" src={ProfilePicture} alt="picture" />
        </div>
        <div className="about-text-container">
    <div className="col-lg-6 col-md-8 mx-auto">
      <p className="about-text" style={{ color: "black", width: "100%" }}>
        I have dedicated my time to learn some different things in the last
        few years, from music to data analysis, from academic high-school
        courses to customer enablement, I consider myself a lifelong learner
        by nature. “Curious, energetic, dedicated, committed to anything
        assigned to her and always trying different avenues to achieve her
        goals” this is probably what people would say about me. I am
        passionate about learning and development, with a solid track record
        of applying adult education principles, instructional design
        methodologies, and evaluation processes when conducting the
        development of learning programs.
      </p>
      <p className="about-text" style={{ color: "black", width: "100%" }}>
        As an accomplished and creative professional, one of my strengths is
        to work closely with learners and help them to achieve their goals
        through effective strategies, while ensuring their journey is
        enjoyable, engaging, relevant, and informative. I am skilled at
        leading complex scenarios that involve different areas and
        stakeholders, tight deadlines, and a limited budget.
      </p>
      <p className="about-text" style={{ color: "black", width: "100%" }}>
        Highlights & Achievements
        <ul>
          <li>
            Interactions with hundreds of learners to increase engagement
            within the Alteryx Academy
          </li>
          <li>
            Built effective and engaging online courses related to History of
            Music for learners across Canada and abroad, using the latest
            eLearning authoring tools (Storyline 360, Captivate, and Camtasia)
          </li>
          <li>
            Successfully completed Science courses (grades 9 to 12) in
            collaboration with teacher-writers (subject-matter experts)
            employing formal instructional design methods and adult learning
            principles
          </li>
          <li>
            Planned and launched the “Maternity Care” program which supported
            more than 150 women in regards to career and motherhood which
            decreased turnover rates by 25%
          </li>
          <li>
            Redesigned onboarding courses for call center staff, reducing
            training time from three months to one. This project drove over $2
            million in savings for the company and raised customer service
            KPIs, engagement, and retention of employees
          </li>
          <li>
            Implemented a consulting model process (i.e., needs assessment,
            recommendation, development solution, implementation, and
            evaluation) for business partners, and saved over $500K in the
            annual budget
          </li>
        </ul>
      </p>

      <h6 className="fw-light">
        Customer Education | Learning Experience Designer | eLearning
        Developer | Adult Learning Specialist | Learning Analytics |
        Localization | Curious by Nature
      </h6>
    </div>
  </div>
</main>

      <footer
        className="text-body-secondary py-5"
        style={{ backgroundColor: "#408E91" }}
      >
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
      </footer>
    </>
  );
}

export default About;
