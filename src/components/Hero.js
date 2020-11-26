import React from "react";
import Phonelayout from "./phone/Phonelayout"
const Hero = ({heroTitle}) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">{heroTitle}</h1>

      <div className="seller-container">
        <Phonelayout />
      </div>
    </div>
  );
};

export default Hero;
