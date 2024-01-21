import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "./componentsCss/Navbar.css";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const [totalItemCount, setTotalItemCount] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    // Check for the user's login status when the component mounts
    const userCookie = Cookies.get("user");

    if (userCookie) {
      // User is logged in
      setIsLoggedIn(true);
    } else {
      // User is not logged in
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Calculate total item count for the current user's cart when cart changes
    const count = cart
      .filter((item) => item.userId === user?.id)
      .reduce((total, item) => total + item.count, 0);
    setTotalItemCount(count);
  }, [cart, user]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = useCallback(() => {
    if (window.innerWidth <= 960) {
      // Handle logic for smaller screens
      setClick(false); // You may also want to setClick to false based on your logic
    } else {
      // Handle logic for larger screens
      setClick(true); // You may also want to setClick to true based on your logic
    }
  }, []); // Empty dependency array since showButton doesn't depend on external variables

  useEffect(() => {
    // Initial call on mount
    showButton();

    // Event listener for resize
    window.addEventListener("resize", showButton);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [showButton]); // Include showButton in the dependencies array

  window.addEventListener("resize", showButton);

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      navigate("/wishlist");
    }
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      navigate("/cart");
    }
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            PulseActive
            <i className="fa-solid fa-heart-pulse"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavDropdown
                href="/shop"
                title="SHOP"
                id="basic-nav-dropdown"
                className="nav-links"
                bg="dark"
                data-bs-theme="dark"
              >
                <Link className="shop-menu-item" to="/leggings">
                  <NavDropdown.Item href="#action/3.1">
                    Leggings
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link className="shop-menu-item" to="/bras">
                  <NavDropdown.Item href="#action/3.2">
                    Sports Bras
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link className="shop-menu-item" to="/accessories">
                  <NavDropdown.Item href="#action/3.3">
                    Accessories
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link className="shop-menu-item" to="/supplements">
                  <NavDropdown.Item href="#action/3.3">
                    Supplements
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link className="shop-menu-item" to="/shop">
                  <NavDropdown.Item href="#action/3.3">
                    All Products
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <Link
                to="/loyalty_club"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                LOYALTY CLUB
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about_us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign_up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN UP
              </Link>
            </li>
          </ul>
          <div className="icons-wrapper">
            <Link to="/search">
              <i
                class="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </Link>
            {isLoggedIn ? (
              <Link to="/wishlist" onClick={handleWishlistClick}>
                <i class="fa-solid fa-heart" style={{ color: "#ffffff" }}></i>
              </Link>
            ) : (
              <Link to="/login">
                <i
                  className="fa-solid fa-heart"
                  style={{ color: "#ffffff", cursor: "pointer" }}
                  onClick={() => setShowLoginModal(true)}
                ></i>
              </Link>
            )}
            {isLoggedIn ? (
              // Display a logout button when the user is logged in
              <Link to="/account">
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            ) : (
              // Display a link to the login page when the user is not logged in
              <Link to="/login">
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            )}
            {isLoggedIn ? (
              <Link to="/cart" onClick={handleCartClick}>
                <div className="navigation-cart-icon">
                  <i
                    class="fa-solid fa-bag-shopping"
                    style={{ color: "#ffffff", cursor: "pointer" }}
                  ></i>
                  {totalItemCount > 0 && (
                    <div className="cart-count-notification">
                      {totalItemCount}
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ color: "#ffffff", cursor: "pointer" }}
                  onClick={() => setShowLoginModal(true)}
                ></i>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <LoginModal
        show={showLoginModal}
        onHide={handleLoginModalClose}
        title="Login is required"
        firstLine="Log in or create an account to add your favourite pieces to your Wishlist or to your Cart."
        secondLine="Plus, you can checkout faster and start collecting Pulse Active Points"
      />
    </>
  );
}

export default Navbar;
