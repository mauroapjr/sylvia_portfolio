import React from "react";
import "../styles/main.css";
import "../styles/about.css";
import { Header, Footer } from "../helpers.jsx";

function About() {
  return (
    <>
      <Header />
      <main>
        <div className="about-text-container">
          <div className="col-lg-6 col-md-8 mx-auto">
            <p
              className="about-text-top"
              style={{ color: "black", width: "100%" }}
            >
              I have dedicated my time to learn some different things in the
              last few years, from music to data analysis, from academic
              high-school courses to customer enablement, I consider myself a
              lifelong learner by nature. “Curious, energetic, dedicated,
              committed to anything assigned to her and always trying different
              avenues to achieve her goals” this is probably what people would
              say about me. I am passionate about learning and development, with
              a solid track record of applying adult education principles,
              instructional design methodologies, and evaluation processes when
              conducting the development of learning programs.
            </p>
            <p
              className="about-text-top"
              style={{ color: "black", width: "100%" }}
            >
              As an accomplished and creative professional, one of my strengths
              is to work closely with learners and help them to achieve their
              goals through effective strategies, while ensuring their journey
              is enjoyable, engaging, relevant, and informative. I am skilled at
              leading complex scenarios that involve different areas and
              stakeholders, tight deadlines, and a limited budget.
            </p>
            <p
              className="about-text-top"
              style={{
                color: "black",
                width: "100%",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            >
              Highlights & Achievements:
              <ul>
                <li>
                  Interactions with hundreds of learners to increase engagement
                  within the Alteryx Academy
                </li>
                <li>
                  Built effective and engaging online courses related to History
                  of Music for learners across Canada and abroad, using the
                  latest eLearning authoring tools (Storyline 360, Captivate,
                  and Camtasia)
                </li>
                <li>
                  Successfully completed Science courses (grades 9 to 12) in
                  collaboration with teacher-writers (subject-matter experts)
                  employing formal instructional design methods and adult
                  learning principles
                </li>
                <li>
                  Planned and launched the “Maternity Care” program which
                  supported more than 150 women in regards to career and
                  motherhood which decreased turnover rates by 25%
                </li>
                <li>
                  Redesigned onboarding courses for call center staff, reducing
                  training time from three months to one. This project drove
                  over $2 million in savings for the company and raised customer
                  service KPIs, engagement, and retention of employees
                </li>
                <li>
                  Implemented a consulting model process (i.e., needs
                  assessment, recommendation, development solution,
                  implementation, and evaluation) for business partners, and
                  saved over $500K in the annual budget
                </li>
              </ul>
            </p>

            <h6 className="about-text-bottom">
              Customer Education | Learning Experience Designer | eLearning
              Developer | Adult Learning Specialist | Learning Analytics |
              Localization | Curious by Nature
            </h6>
          </div>
        </div>
        <p>
          <a href="#">Back to top</a>
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;
