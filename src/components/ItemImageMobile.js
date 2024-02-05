import React, { useState } from "react";

const ItemImageMobile = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("Slides in ItemImageMobile:", slides);
  // Check if slides is null or an empty array
  console.log(slides);

  const itemSliderStyles = {
    height: "100%",
    position: "relative",
  };

  const itemSlideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  console.log("Current Slide URL:", itemSlideStyles.backgroundImage);

  const leftArrowContainer = {
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "20px",
    height: "40px",
    width: "40px",
    borderRadius: "80px",
    backgroundColor: "rgb(211, 211, 211, 0.446)",
    zIndex: 1,
    cursor: "pointer",
    transform: "translate(0, -50%)",
    alignItems: "center",
    justifyContent: "center",
  };
  const rightArrowContainer = {
    display: "flex",
    position: "absolute",
    top: "50%",
    right: "20px",
    height: "40px",
    width: "40px",
    borderRadius: "80px",
    backgroundColor: "rgba(211, 211, 211, 0.446)",
    zIndex: 1,
    cursor: "pointer",
    transform: "translate(0, -50%)",
    alignItems: "center",
    justifyContent: "center",
  };

  const itemLeftArrowStyles = {
    position: "absolute",
    fontSize: "30px",
    color: "white",
    zIndex: 1,
    paddingBottom: "4px",
    paddingRight: "2px",
  };
  const itemRightArrowStyles = {
    position: "absolute",
    fontSize: "30px",
    color: "white",
    zIndex: 1,
    paddingBottom: "4px",
    paddingLeft: "2px",
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
    <div style={itemSliderStyles}>
      <div style={leftArrowContainer} onClick={goToPrevious}>
        <div style={itemLeftArrowStyles}>&lt;</div>
      </div>
      <div style={rightArrowContainer} onClick={goToNext}>
        <div style={itemRightArrowStyles}>&gt;</div>
      </div>
      <div style={itemSlideStyles}></div>
    </div>
  );
};

export default ItemImageMobile;
