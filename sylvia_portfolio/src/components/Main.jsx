import React from "react";
import { ImageGallery, Header, Footer } from "../helpers.jsx";
import "../styles/main.css";

export default function Main() {
  return (
    <>
      <Header />

      <main>
        <div className="page-container">
          <div className="text-container">
            <p className="long-text">Nice to e-meet you!</p>
            <p className="long-text">
              I'm Sylvia Bachiegga, an enthusiastic learning designer who's all
              about embracing the joy of constant learning. I've ventured into a
              world of skills that includes music, data analysis, high-school
              courses, and customer education.
            </p>
            <p className="long-text">
              If you ask people to describe me, they would likely tell you,
              "Sylvia is curious, energetic, dedicated, and committed to any
              task at hand.“
            </p>
            <p className="long-text">
              Here's a summary of my expertise in the field of learning design:
              <ul>
                <li>Adult Education Principles</li>
                <li>Learner-Centric Approach</li>
                <li>Learning Transfer</li>
                <li>Metrics & Evaluation</li>
              </ul>
            </p>
          </div>

          <div className="badge-container">
            <section className="box-right">
              <div className="link-items">
                <a
                  href="/Login"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="badge rounded-pill text-bg-secondary link-portfolio">
                    PORTFOLIO
                  </p>
                </a>
                <a
                  href="/Blog"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="badge rounded-pill text-bg-secondary link-blog">
                    BLOG
                  </p>
                </a>
                <a
                  href="/About"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p className="badge rounded-pill text-bg-secondary link-about">
                    ABOUT
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
        <ImageGallery />
      </main>

      <Footer />
    </>
  );
}
