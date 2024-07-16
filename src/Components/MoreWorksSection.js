import React from "react";
import "../Styles/Works.css";
import "../Styles/MoreWorksSection.css";
import img1 from "../assets/Images/MOREWORKS/wall.png";
import img2 from "../assets/Images/MOREWORKS/array.png";
import img3 from "../assets/Images/MOREWORKS/cb.png";
import img4 from "../assets/Images/MOREWORKS/dd.png";
import img5 from "../assets/Images/MOREWORKS/go.png";
import img6 from "../assets/Images/MOREWORKS/rabbit.png";
import img7 from "../assets/Images/MOREWORKS/so.png";
import img8 from "../assets/Images/MOREWORKS/teenage.png";
import img9 from "../assets/Images/MOREWORKS/teenagePack.png";
import img10 from "../assets/Images/MOREWORKS/icon.jpeg";
import img11 from "../assets/Images/MOREWORKS/kol.png";

const MoreWorksSection = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return (
    <div className="moreWorksContainer">
      <div
        style={{ paddingTop: "3em", paddingBottom: "3em" }}
        className="WorkHeadingContainer"
      >
        <p>STUFF I'VE BUILT OVER THE YEARS</p>
      </div>
      <div className="MoreWorksWrapper">
        <div className="items">
          {images.map((image, index) => (
            <div
              key={index}
              tabIndex="0"
              className="item"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreWorksSection;
