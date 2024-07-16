import React from "react";
import "../Styles/Works.css";

const ProductSection = () => {
  return (
    <div className="productsContianer">
      <div
        style={{ paddingTop: "3em", paddingBottom: "3em" }}
        className="WorkHeadingContainer"
      >
        <p>PRODUCTS & GUIDES</p>
      </div>
      <div className="worksContianer">
        <div className="workFirstRow">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTteiktyb0UEcalsm0TK6tqoGZpa1UC8J4VVTphRfc1F5DJl85PBPTz3kHYX5vRaxKxwg&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTteiktyb0UEcalsm0TK6tqoGZpa1UC8J4VVTphRfc1F5DJl85PBPTz3kHYX5vRaxKxwg&usqp=CAU" />
        </div>
        <div className="workSecondRow">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTteiktyb0UEcalsm0TK6tqoGZpa1UC8J4VVTphRfc1F5DJl85PBPTz3kHYX5vRaxKxwg&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTteiktyb0UEcalsm0TK6tqoGZpa1UC8J4VVTphRfc1F5DJl85PBPTz3kHYX5vRaxKxwg&usqp=CAU" />
        </div>
        <div className="workSecondRow">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTteiktyb0UEcalsm0TK6tqoGZpa1UC8J4VVTphRfc1F5DJl85PBPTz3kHYX5vRaxKxwg&usqp=CAU" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTteiktyb0UEcalsm0TK6tqoGZpa1UC8J4VVTphRfc1F5DJl85PBPTz3kHYX5vRaxKxwg&usqp=CAU" />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
