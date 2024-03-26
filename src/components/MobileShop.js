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

//slider 2
// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import "./componentsCss/MobileShop.css";

// const MobileShop = ({ slides, closeMobileMenu }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef(null);

//   const slideStyles = {
//     width: "100%",
//     height: "100%",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundImage: `url(${slides[currentIndex].url})`,
//     objectFit: "cover",
//     display: "flex",
//     position: "relative",
//     transition: "transform 0.3s ease",
//     transform: `translateX(-${currentIndex * 100}%)`,
//   };

//   const handleTouchStart = (event) => {
//     touchStartX.current = event.touches[0].clientX;
//   };

//   const handleTouchMove = (event) => {
//     if (touchStartX.current === null) return;
//     const touchEndX = event.touches[0].clientX;
//     const deltaX = touchStartX.current - touchEndX;

//     if (Math.abs(deltaX) > 50) {
//       if (deltaX > 0) goToNext();
//       else goToPrevious();
//     }

//     touchStartX.current = null;
//   };

//   const goToPrevious = () => {
//     const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div
//       className="slider"
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//     >
//       <div style={slideStyles}>
//         {slides.map((slide, index) => (
//           <div key={index} className="slide">
//             <Link to={`/${slide.link}`} onClick={closeMobileMenu}>
//               <h3 className="title">{slide.title}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobileShop;
