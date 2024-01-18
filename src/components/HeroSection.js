import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import "./componentsCss/HeroSection.css";

function HeroSection() {
  const handleClick = () => {
    window.location.href = "/shop";
  };
  return (
    <div className="hero-container">
      <h1>Elevate Your Pulse</h1>
      <p>Unleash Your Active Lifestyle with PulseActive</p>
      <div className="hero-btn">
        <Button variant="outline-light" size="lg" onClick={handleClick}>
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
