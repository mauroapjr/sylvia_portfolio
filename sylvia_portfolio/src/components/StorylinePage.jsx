import React from "react";
import "../styles/main.css";
import "../styles/videoPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Header } from "../helpers.jsx";

function StorylinePage() {
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

      <Header/>        
      <div className="ratio ratio-16x9">
        <iframe
          width="1266"
          height="686"
          src="https://www.youtube.com/embed/cDTwvlb8ZPE"
          title=""
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <small className="d-block mb-3 text-body-secondary">
        mauro pereira © 2023
      </small>
    </>
  );
}

export default StorylinePage;
