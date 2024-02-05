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
      <div className="item-categories">
        <h1 className="item-categories-title">Products</h1>
        <Link className="shop-menu-item" to="/leggings">
          Leggings
        </Link>
        <Link className="shop-menu-item" to="/bras">
          Sports Bras
        </Link>
        <Link className="shop-menu-item" to="/accessories">
          Accessories
        </Link>
        <Link className="shop-menu-item" to="/supplements">
          Supplements
        </Link>
        <Link className="shop-menu-item" to="/shop">
          All Products
        </Link>
      </div>
      <div className="navdropdown-pictures">
        <div className="nav-dropdown-item">
          <img
            src="/images/image12Copy.jpg"
            alt="20% discount"
            className="nav-dropdown-image"
          />
          <p className="nav-dropdown-discount-text">
            20% OFF for your first order
          </p>
        </div>
        <div className="nav-dropdown-item">
          <img
            src="/images/image11Copy.jpg"
            alt="20% discount"
            className="nav-dropdown-image"
          />
          <p className="nav-dropdown-discount-text">New releases</p>
        </div>
        <div className="nav-dropdown-item">
          <img
            src="/images/image13Copy.jpg"
            alt="20% discount"
            className="nav-dropdown-image"
          />
          <p className="nav-dropdown-discount-text">Last chance</p>
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;
