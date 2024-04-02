import React, { useState } from "react";
import "../App.css";
import "./componentsCss/TestimonialSlider.css";

function TestimonialSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="testimonial">
        <div className="left-arrow" onClick={goToPrevious}>
          &lt;
        </div>
        <div className="right-arrow" onClick={goToNext}>
          &gt;
        </div>
        <div className="testi-slide">
          <img
            alt="slide"
            src={slides[currentIndex].url}
            className="testi-image"
          />
          <p className="testi-prg">{slides[currentIndex].feedback}</p>
          <p className="testi-prg">{slides[currentIndex].feedbackSecond}</p>
          <i class="fa-solid fa-quote-left"></i>

          <div className="testi-details">
            <span className="testi-name">{slides[currentIndex].name}</span>
            <span className="testi-job"> {slides[currentIndex].job}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialSlider;
