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

      // Adjusting fromTo animation for smoother effect
      tl.fromTo(
        worksContainer,
        { xPercent: -100 },
        {
          xPercent: 0,
          duration: 1.2, // Reduced duration for quicker animation
          ease: "power3.out", // Smoother easing function
        }
      );

      tl.fromTo(
        image,
        { xPercent: 100, scale: 1.3 },
        {
          xPercent: 0,
          scale: 1,
          duration: 1.2, // Reduced duration to match worksContainer
          delay: -1.2, // Adjust delay to overlap with previous animation
          ease: "power3.out", // Smoother easing function
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="Workwrap">
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
