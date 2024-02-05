import React from "react";
import "./componentsCss/Banner.css";

function Banner(props) {
  const bannerStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "40vh",
    position: "relative",
  };
  return (
    <>
      <div className="banner-container" style={bannerStyle}>
        <div className="text">
          <h1 className="banner-title">{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}
export default Banner;
