import React from "react";
import "../Styles/Works.css";
import "../Styles/MoreWorksSection.css";

const MoreWorksSection = () => {
  const images = [
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
    "https://i.pinimg.com/564x/49/f9/cb/49f9cbdf84e2ec3f685e41dde6fc2da1.jpg",
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
    "https://i.pinimg.com/564x/49/f9/cb/49f9cbdf84e2ec3f685e41dde6fc2da1.jpg",
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
    "https://i.pinimg.com/564x/49/f9/cb/49f9cbdf84e2ec3f685e41dde6fc2da1.jpg",
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
    "https://i.pinimg.com/564x/49/f9/cb/49f9cbdf84e2ec3f685e41dde6fc2da1.jpg",
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
    "https://i.pinimg.com/564x/49/f9/cb/49f9cbdf84e2ec3f685e41dde6fc2da1.jpg",
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
    "https://i.pinimg.com/564x/49/f9/cb/49f9cbdf84e2ec3f685e41dde6fc2da1.jpg",
    "https://i.pinimg.com/564x/1a/2e/64/1a2e64ec22fc678e40e06a79f637614c.jpg",
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
