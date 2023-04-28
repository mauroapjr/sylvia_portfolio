import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

function Blog() {
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
      {/* lang="en" data-bs-theme="auto"> */}
      {/* <head> */}
      {/* <script src="../assets/js/color-modes.js"></script>

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta
        name="author"
        content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
      />
      <meta name="generator" content="Hugo 0.111.3" />
      <title>Blog Template · Bootstrap v5.3</title>

      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/blog/"
      />

      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />

     

      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900&amp;display=swap"
        rel="stylesheet"
      />

      <link href="blog.css" rel="stylesheet" /> */}
      {/* </head> */}
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
            <svg
              class="bi my-1 theme-icon-active"
              style={{ width: "1em", height: "1em" }}
            >
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
                <svg
                  class="bi ms-auto d-none"
                  style={{ width: "1em", height: "1em" }}
                >
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
                <svg
                  class="bi ms-auto d-none"
                  style={{ width: "1em", height: "1em" }}
                >
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
                <svg
                  class="bi ms-auto d-none"
                  style={{ width: "1em", height: "1em" }}
                >
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <main class="container">
          <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div class="col-md-6 px-0">
              <h1 class="display-4 fst-italic">
                Title of a longer featured blog post
              </h1>
              <p class="lead my-3">
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what’s most interesting in this
                post’s contents.
              </p>
              <p class="lead mb-0">
                <a href="#" class="text-white fw-bold">
                  Continue reading...
                </a>
              </p>
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">
                    World
                  </strong>
                  <h3 class="mb-0">Featured post</h3>
                  <div class="mb-1 text-body-secondary">Nov 12</div>
                  <p class="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="#" class="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg
                    class="bd-placeholder-img"
                    width="200"
                  
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    Design
                  </strong>
                  <h3 class="mb-0">Post title</h3>
                  <div class="mb-1 text-body-secondary">Nov 11</div>
                  <p class="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <a href="#" class="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div class="col-auto d-none d-lg-block">
                  <svg
                    class="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

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
