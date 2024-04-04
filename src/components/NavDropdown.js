import React from "react";
import { Link } from "react-router-dom";
import "./componentsCss/NavDropdown.css";

function NavDropdown({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="nav-dropdown-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="nav-dropdown-item">
        <img
          src="/images-food/this.jpg"
          alt="20% discount"
          className="nav-dropdown-image"
        />
        <Link to="first_consultation" onClick={onMouseLeave}>
          <div className="nav-dropdown-discount-text">Первая консультация</div>
        </Link>
      </div>
      <div className="nav-dropdown-item">
        <img
          src="/images-food/this2.jpg"
          alt="20% discount"
          className="nav-dropdown-image"
        />
        <Link to="personal_consultation" onClick={onMouseLeave}>
          <div className="nav-dropdown-discount-text">
            Индивидуальная консультация
          </div>
        </Link>
      </div>
      <div className="nav-dropdown-item">
        <img
          src="/images-food/this3.jpg"
          alt="20% discount"
          className="nav-dropdown-image"
        />
        <Link to="personal_plan">
          <div className="nav-dropdown-discount-text" onClick={onMouseLeave}>
            Персональная программа
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavDropdown;
