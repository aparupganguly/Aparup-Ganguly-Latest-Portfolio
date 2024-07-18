import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap/all";
import { Link } from "react-router-dom";

import "../Styles/Navbar.css";

const Navbar = () => {
  const [status, setStatus] = useState(0);
  const vw = window.innerWidth;

  const handleClick = () => {
    let delay_time = 0;
    setStatus((prevstatus) => {
      if (prevstatus === 0) {
        gsap.to("#bg-menu-mobile", 1, {
          x: -vw,
          ease: Expo.easeInOut,
        });

        document.querySelectorAll("li").forEach((li, index) => {
          gsap.to(li, 1.2, {
            x: -vw,
            scaleX: 1,
            delay: delay_time,
            ease: Expo.easeInOut,
          });
          delay_time += 0.04;
        });
        return 1;
      } else {
        gsap.to("#bg-menu-mobile", 1.2, {
          x: 0,
          ease: Expo.easeInOut,
        });

        document.querySelectorAll("li").forEach((li, index) => {
          gsap.to(li, 1, {
            x: 0,
            delay: delay_time,
            ease: Expo.easeInOut,
          });
          delay_time += 0.02;
        });
        return 0;
      }
    });
  };

  return (
    <>
      <div className="navbarContainer">
        <div className="logo">
          <span>APARUP GANGULY</span>
          <span style={{ marginBottom: "12px" }}>©</span>
        </div>

        <div
          id="hamburger"
          onClick={handleClick}
          className={status === 1 ? "open" : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navLinks">
          <Link to="/tech" style={{ textDecoration: "none" }}>
            <p>Tech I know</p>
          </Link>
          <Link to="/products" style={{textDecoration: "none" }}>
            <p>Products</p>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>Works</p>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>Connect</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
