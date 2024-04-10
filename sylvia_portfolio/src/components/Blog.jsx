import React, { useState, useEffect } from "react";
import { Header, Footer } from "../helpers.jsx";
import "../styles/main.css";
import "../styles/blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      <Header />
      <main className="container">
        <div className="black-box p-2 p-md-5 mb-5 rounded">
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
                        style={{ fontSize: "140%", padding: "10px" }}
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
                  Sharing my ideas on my blog, exploring diverse topics with
                  passion, and fostering a love for learning.
                </p>
              </div>
            </div>
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

export default Blog;
