import React from "react";
import "../Styles/About.css";
import aboutIMG from "../assets/Images/WORKS/about.png";

const AboutMe = () => {
  return (
    <div className="aboutContianer">
      <div
        style={{ paddingTop: "3em", paddingBottom: "3em" }}
        className="WorkHeadingContainer"
      >
        <p>ABOUT ME</p>
      </div>
      <div className="aboutCard">
        <img src={aboutIMG} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
