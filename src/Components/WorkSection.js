import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Work1 from "../assets/Images/WORKS/Work1.png";
import Work2 from "../assets/Images/WORKS/Work2.png";
import Work3 from "../assets/Images/WORKS/Work3.png";
import Work4 from "../assets/Images/WORKS/Work4.png";
import Works from "../Styles/Works.css";
gsap.registerPlugin(ScrollTrigger);

const images = [Work1, Work2, Work3, Work4];

const WorkSection = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((worksContainer) => {
      const image = worksContainer.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: worksContainer,
          toggleActions: "play none none reverse",
        },
      });

      tl.set(worksContainer, { autoAlpha: 1 });
      tl.from(worksContainer, 1.5, {
        xPercent: -100,
        ease: "power2.out",
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="wrap">
      <div
        style={{ paddingTop: "3em", paddingBottom: "3em" }}
        className="WorkHeadingContainer"
      >
        <p>CREATING WHAT MATTERS</p>
      </div>
      <div className="workMainContainer">
        {images.map((src, index) => (
          <div className="worksContainer" key={index} ref={addToRefs}>
            <div className="reveal">
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;


// .workFirstRow,
// .workSecondRow {
//   display: flex;
//   justify-content: space-around;
//   padding-bottom: 5em;
//   gap: 10em;
// }
// .worksContianer img {
//   width: 34em;
//   height: 36vh;
//   display: block;
//   object-fit: cover;
// }

// @media screen and (max-width: 1024px) {
//   .worksContianer img {
//     height: 11vh;
//   }
// }
// @media screen and (max-width: 500px) {
//   .worksContianer img {
//     height: 6vh;
//   }
//   .workFirstRow,
//   .workSecondRow {
//     gap: 1.2em;
//     padding-top: 0.1em;
//     padding-bottom: 1em;

//     padding-right: 30px;
//   }
// }
// .workMainContainer {
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px; /* Adjust the gap between images as needed */
//   max-width: 800px; /* Adjust the max-width to your needs */
//   margin: 0 auto;
//   padding: 20px;
// }

// .reveal {
//   position: relative;
//   overflow: hidden;
// }
