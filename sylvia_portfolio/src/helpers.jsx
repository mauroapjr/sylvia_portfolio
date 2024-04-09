import React from "react";
import Alteryx from "../src/images/alteryxSS.png";
import Movidaria from "../src/images/movidariaS.png";
import RoyalConservatory from "../src/images/Royal_Conservatory_of_Music_logo.svgS.png";
import TVO from "../src/images/TVOS.jpg";
import CTC from "../src/images/canadian-tire-logoS.png";
import "../src/styles/main.css";

const imageUrls = [Alteryx, Movidaria, CTC, TVO, RoyalConservatory];

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
