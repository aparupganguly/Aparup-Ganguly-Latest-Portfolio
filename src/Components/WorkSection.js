import React from "react";
import "../Styles/Works.css";
import Work1 from "../assets/Images/WORKS/Work1.png";
import Work2 from "../assets/Images/WORKS/Work2.png";
import Work3 from "../assets/Images/WORKS/Work3.png";
import Work4 from "../assets/Images/WORKS/Work4.png";

const WorkSection = () => {
  return (
    <div className="workMainContainer">
      <div className="WorkHeadingContainer">
        <p>CREATING WHAT MATTERS</p>
      </div>
      <div className="worksContianer">
        <div className="workFirstRow">
          <img src={Work1} />

          <img src={Work2} />
        </div>
        <div className="workSecondRow">
          <img src={Work3} />
          <img src={Work4} />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
