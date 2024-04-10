import React from "react";
import Alteryx from "../src/images/alteryxSS.png";
import Movidaria from "../src/images/movidariaS.png";
import RoyalConservatory from "../src/images/Royal_Conservatory_of_Music_logo.svgS.png";
import TVO from "../src/images/TVOS.jpg";
import CTC from "../src/images/canadian-tire-logoS.png";
import ProfileImage from "../src/images/Profile_picture.jpg";
import SylviaLogo from "../src/images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background-no-flower.png";

import "../src/styles/main.css";

const imageUrls = [Alteryx, Movidaria, CTC, TVO, RoyalConservatory];

export const Header = () => {
  return (
  <header>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <div className="header-content">
              <img
                className="profile-image"
                src={ProfileImage}
                alt="Profile Image"
              />
              <img
                className="sylvia-logo-main"
                src={SylviaLogo}
                alt="Sylvia Logo"
              />
            </div>
          </a>
        </nav>
      </header>
  );
};

export const ImageGallery = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#5f5a5a",
      padding: "20px",
    }}
  >
    {imageUrls.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Slide ${index}`}
        style={{
          width: "100px",
          height: "auto",
          marginLeft: "80px",
          marginRight: "80px",
        }}
      />
    ))}
  </div>
);
