import React from 'react';
import "./storyline_helpers.js";
import "./loader.js";

export default function StorylinePage() {
  return (
    <>
    <head>
    <meta charset="utf-8"/>
  
  <title>Examining Your Data</title>
  <meta http-equiv="x-ua-compatible" content="IE=edge" />
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no, minimal-ui" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <style>
    html,
    body {
      height= "100%",
      padding= "0",
      margin= "0"
    }
    #app {
      height= "100%",
      width= "100%"
    }
  </style>
  <script>window.THREE = {};</script>
</head>
<body style="background: #282828" class="cs-HTML theme-unified">
 
  <script src="./storyline_helpers.js">
  </script>

  <div id="focus-sink" aria-hidden="true" tabIndex="-1"></div>
  <div id="preso"></div>
  <script src="./globals.js">
    
  </script>
  <script src='story_content/user.js' type="text/javascript"></script>
  <div class="slide-loader"></div>
  <script type="text/javascript" src='./loader.js'>
  
</script>
  <div class="mobile-load-title-overlay" style="display: none">
    <div class="mobile-load-title">Examining Your Data</div>
  </div>
  <div class="mobile-chrome-warning"></div>
  <script>
    if (window.autoSpider && window.vInterfaceObject) {
      document.querySelector('.mobile-load-title-overlay').style.display = 'none'
    }
  </script>
  <link rel="stylesheet" href="html5/data/css/output.min.css" data-noprefix />
</body>
<script src="html5/lib/scripts/bootstrapper.min.js"></script>
</>
  );
}
