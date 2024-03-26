import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "./componentsCss/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hero-cnt-title">С нутрициологом к счастью </h1>
      <h1 className="hero-cnt-title">через питание</h1>
      <p className="hero-cnt-prg">
        Помогу выстроить доверительные отношения между телом и пищей.
      </p>
      <div className="hero-btn-container">
        <Link to="/services">
          <button className="hero-btn">Подробнее об услугах</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
