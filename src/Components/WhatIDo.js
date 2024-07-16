import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../Styles/WhatIDo.css";
import WhatIDoImg from "../assets/Images/WORKS/whatIDOImg.png";
import secondWhatIdo from "../assets/Images/WORKS/secondWhatIdo.png";
import thirdWhatIdo from "../assets/Images/WORKS/thirdWhatIdoImg.png";
import fourthWhatIdo from "../assets/Images/WORKS/fourthWhatIDoImg.png";

const WhatIDo = () => {
  useEffect(() => {
    const wrap = document.querySelector(".whatIdoImgContianer");
    const images = document.querySelectorAll(".whatIdoImages");

    images.forEach((img) => {
      gsap.set(img, { width: "25%" });

      img.addEventListener("mouseenter", () => {
        images.forEach((otherImg) => {
          if (otherImg === img) {
            gsap.to(img, { duration: 1, width: "40%" });
          } else {
            gsap.to(otherImg, { duration: 1, width: "20%" });
          }
        });
      });
    });

    wrap.addEventListener("mouseleave", () => {
      images.forEach((img) => {
        gsap.to(img, { duration: 1, width: "25%" });
      });
    });

    // Clean up event listeners on unmount
    return () => {
      images.forEach((img) => {
        img.removeEventListener("mouseenter", () => {
          images.forEach((otherImg) => {
            if (otherImg === img) {
              gsap.to(img, { duration: 1, width: "30%" });
            } else {
              gsap.to(otherImg, { duration: 1, width: "20%" });
            }
          });
        });
      });

      wrap.removeEventListener("mouseleave", () => {
        images.forEach((img) => {
          gsap.to(img, { duration: 1, width: "25%" });
        });
      });
    };
  }, []);

  return (
    <div className="whatIdoContianer">
      <p style={{ fontSize: "1.8em" }}>What Matters?</p>
      <div className="whatIdoImgContianer">
        <img src={WhatIDoImg} alt="" className="whatIdoImages" />
        <img src={secondWhatIdo} alt="" className="whatIdoImages" />
        <img src={thirdWhatIdo} className="whatIdoImages" />
        <img src={fourthWhatIdo} alt="" className="whatIdoImages" />
      </div>
    </div>
  );
};

export default WhatIDo;
