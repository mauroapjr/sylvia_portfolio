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





          <div>
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

          {/* <div>
            {posts.map((post) => (
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
                      <p className="card-text mb-auto">{post.processedContent}</p>
                      <a href="#" className="stretched-link">
                        Continue reading
                      </a>
                    </div>
                    <div className="col-auto d-none d-lg-block thumbnail-container">
                    
                  
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div class="row g-5">
            <div class="col-md-8">
              <h3 class="pb-4 mb-4 fst-italic border-bottom">
                From the Firehose
              </h3>

              <article class="blog-post">
                <h2 class="blog-post-title mb-1">Sample blog post</h2>
                <p class="blog-post-meta">
                  January 1, 2021 by <a href="#">Mark</a>
                </p>

                <p>
                  This blog post shows a few different types of content that’s
                  supported and styled with Bootstrap. Basic typography, lists,
                  tables, images, code, and more are all supported as expected.
                </p>
                {/* <hr> */}
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h2>Blockquotes</h2>
                <p>This is an example blockquote in action:</p>
                <blockquote class="blockquote">
                  <p>Quoted text goes here.</p>
                </blockquote>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Example lists</h3>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout. This is an example unordered list:
                </p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>And this is an ordered list:</p>
                <ol>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ol>
                <p>And this is a definition list:</p>
                <dl>
                  <dt>HyperText Markup Language (HTML)</dt>
                  <dd>
                    The language used to describe and define the content of a
                    Web page
                  </dd>
                  <dt>Cascading Style Sheets (CSS)</dt>
                  <dd>Used to describe the appearance of Web content</dd>
                  <dt>JavaScript (JS)</dt>
                  <dd>
                    The programming language used to build advanced Web sites
                    and applications
                  </dd>
                </dl>
                <h2>Inline HTML elements</h2>
                <p>
                  HTML defines a long list of available inline tags, a complete
                  list of which can be found on the{" "}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
                    Mozilla Developer Network
                  </a>
                  .
                </p>
                <ul>
                  <li>
                    <strong>To bold text</strong>, use{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;strong&gt;
                    </code>
                    .
                  </li>
                  <li>
                    <em>To italicize text</em>, use{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;em&gt;
                    </code>
                    .
                  </li>
                  <li>
                    Abbreviations, like{" "}
                    <abbr title="HyperText Markup Language">HTML</abbr> should
                    use{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;abbr&gt;
                    </code>
                    , with an optional{" "}
                    <code class="language-plaintext highlighter-rouge">
                      title
                    </code>{" "}
                    attribute for the full phrase.
                  </li>
                  <li>
                    Citations, like <cite>— Mark Otto</cite>, should use{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;cite&gt;
                    </code>
                    .
                  </li>
                  <li>
                    <del>Deleted</del> text should use{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;del&gt;
                    </code>{" "}
                    and <ins>inserted</ins> text should use{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;ins&gt;
                    </code>
                    .
                  </li>
                  <li>
                    Superscript <sup>text</sup> uses{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;sup&gt;
                    </code>{" "}
                    and subscript <sub>text</sub> uses{" "}
                    <code class="language-plaintext highlighter-rouge">
                      &lt;sub&gt;
                    </code>
                    .
                  </li>
                </ul>
                <p>
                  Most of these elements are styled by browsers with few
                  modifications on our part.
                </p>
                <h2>Heading</h2>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Sub-heading</h3>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <pre>
                  <code>Example code block</code>
                </pre>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <article class="blog-post">
                <h2 class="blog-post-title mb-1">Another blog post</h2>
                <p class="blog-post-meta">
                  December 23, 2020 by <a href="#">Jacob</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <blockquote>
                  <p>
                    Longer quote goes here, maybe with some{" "}
                    <strong>emphasized text</strong> in the middle of it.
                  </p>
                </blockquote>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h3>Example table</h3>
                <p>And don't forget about tables in these posts:</p>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Upvotes</th>
                      <th>Downvotes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alice</td>
                      <td>10</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>Bob</td>
                      <td>4</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Charlie</td>
                      <td>7</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Totals</td>
                      <td>21</td>
                      <td>23</td>
                    </tr>
                  </tfoot>
                </table>

                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <article class="blog-post">
                <h2 class="blog-post-title mb-1">New feature</h2>
                <p class="blog-post-meta">
                  December 14, 2020 by <a href="#">Chris</a>
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <ul>
                  <li>First list item</li>
                  <li>Second list item with a longer description</li>
                  <li>Third list item to close it out</li>
                </ul>
                <p>
                  This is some additional paragraph placeholder content. It's a
                  slightly shorter version of the other highly repetitive body
                  text used throughout.
                </p>
              </article>

              <nav class="blog-pagination" aria-label="Pagination">
                <a class="btn btn-outline-primary rounded-pill" href="#">
                  Older
                </a>
                <a class="btn btn-outline-secondary rounded-pill disabled">
                  Newer
                </a>
              </nav>
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

                <div class="p-4">
                  <h4 class="fst-italic">Archives</h4>
                  <ol class="list-unstyled mb-0">
                    <li>
                      <a href="#">March 2021</a>
                    </li>
                    <li>
                      <a href="#">February 2021</a>
                    </li>
                    <li>
                      <a href="#">January 2021</a>
                    </li>
                    <li>
                      <a href="#">December 2020</a>
                    </li>
                    <li>
                      <a href="#">November 2020</a>
                    </li>
                    <li>
                      <a href="#">October 2020</a>
                    </li>
                    <li>
                      <a href="#">September 2020</a>
                    </li>
                    <li>
                      <a href="#">August 2020</a>
                    </li>
                    <li>
                      <a href="#">July 2020</a>
                    </li>
                    <li>
                      <a href="#">June 2020</a>
                    </li>
                    <li>
                      <a href="#">May 2020</a>
                    </li>
                    <li>
                      <a href="#">April 2020</a>
                    </li>
                  </ol>
                </div>

                <div class="p-4">
                  <h4 class="fst-italic">Elsewhere</h4>
                  <ol class="list-unstyled">
                    <li>
                      <a href="#">GitHub</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="blog-footer">
          <p>
            <a href="#">Back to top</a>
          </p>
        </footer>
      </body>
    </>
  );
}

export default Blog;
