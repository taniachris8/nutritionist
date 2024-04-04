import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./componentsCss/MobileShop.css";

const MobileShop = ({ slides, closeMobileMenu }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    objectFit: "cover",
    display: "flex",
    position: "relative",
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

  return (
    <div className="slider">
      <div className="left-arrow" onClick={goToPrevious}>
        &lt;
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &gt;
      </div>
      <div style={slideStyles}>
        <Link to={`/${slides[currentIndex].link}`} onClick={closeMobileMenu}>
          <h3 className="title">{slides[currentIndex].title}</h3>
        </Link>
      </div>
    </div>
  );
};

export default MobileShop;
