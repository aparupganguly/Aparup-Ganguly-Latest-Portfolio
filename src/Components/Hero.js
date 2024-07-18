import React from "react";
import "../Styles/Hero.css";
const Hero = () => {
  return (
    <>
      <div className="HeroContianer">
        <div className="leftHeroContainer">
          <p className="leftHeroText">Developer*</p>
          <p className="leftHeroText">Designer*</p>
          <p className="leftHeroText">Brand Strategist*</p>
          <p className="leftHeroText">Visual Identity Designer*</p>
        </div>
        <div className="rightHeroContainer">
          <p className="bioText">
            Hi I'm Aparup Ganguly, creating minimalistic tech and digital products to elevate your lifestyle and experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
