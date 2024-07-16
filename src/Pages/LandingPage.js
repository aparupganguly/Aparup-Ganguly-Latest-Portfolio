import React from "react";
import ReactDOM from "react-dom";
import WorkSection from "../Components/WorkSection";
import AboutMe from "../Components/AboutMe";
import MoreWorksSection from "../Components/MoreWorksSection";
import ProductSection from "../Components/ProductSection";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhatIDo from "../Components/WhatIDo";
import Connect from "../Components/Connect";
import showReel from "../assets/Videos/demoShowreel.mp4";
import "../Styles/Hero.css";

const LandingPage = () => {
  return (
    <div className="landingContianer">
      <Navbar />

      <Hero />
      <div className="mobileBioText">
        <p>
      Hi I'm Aparup Ganguly, I create cool stuff online!
        </p>
      </div>
      {/* ShowReel Section */}

      <div className="showReelContainer">
        <video src={showReel} autoPlay muted loop></video>
      </div>
      {/* ShowReel Section */}
      <WorkSection />
      <MoreWorksSection />
      {/* <ProductSection /> */}
      <AboutMe />
      <WhatIDo />
      <Connect />
    </div>
  );
};

export default LandingPage;
