import React from "react";
import "../App.css";
import "./componentsCss/HeroSection.css";

function HeroSection() {
  const handleClick = () => {
    window.location.href = "/services";
  };
  return (
    <div className="hero-container">
      {/* <h1>Нутрициолог, который </h1>
      <h1>поможет вам</h1>
      <h1>стать счастливым</h1> */}
      <h1>С нутрициологом к счастью </h1>
      <h1>через питание</h1>
      <p>Помогу выстроить доверительные отношения между телом и пищей.</p>
      <div className="hero-btn-container">
        <button onClick={handleClick} className="hero-btn">
          Подробнее об услугах
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
