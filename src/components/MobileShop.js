import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileShop = ({ slides, closeMobileMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "30px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "30px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const titleStyles = {
    color: "white",
    fontSize: "19px",
    position: "absolute",
    bottom: "10%",
    left: "10%",
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &lt;
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        &gt;
      </div>
      <div style={slideStyles}>
        <Link to={`/${slides[currentIndex].link}`} onClick={closeMobileMenu}>
          <h3 style={titleStyles}>{slides[currentIndex].title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default MobileShop;
