import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./componentsCss/Navbar.css";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import MobileShop from "./MobileShop";
import NavDropdown from "./NavDropdown";
import "./componentsCss/NavDropdown.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavbarButton, setShowNavbarButton] = useState(false);
  const [showNavbarDropdown, setShowNavbarDropDowm] = useState(true);
  const [showMobileShop, setShowMobileShop] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const [totalItemCount, setTotalItemCount] = useState(0);
  const { user } = useUser();
  const [isNavDropdownVisible, setNavDropdownVisible] = useState(false);

  useEffect(() => {
    // Checking for the user's login status when the component mounts
    const userCookie = Cookies.get("user");

    if (userCookie) {
      // User is logged in
      setIsLoggedIn(true);
    } else {
      // User is not logged in
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    // Calculating total item count for the current user's cart when cart changes
    const count = cart
      .filter((item) => item.userId === user?.id)
      .reduce((total, item) => total + item.count, 0);
    setTotalItemCount(count);
  }, [cart, user]);

  const handleClick = () => {
    setClick(!click);
    // Toggling body scrolling based on the menu state
    document.body.style.overflow = click ? "auto" : "hidden";
  };
  const closeMobileMenu = () => {
    setClick(false);
    // Allowing body scrolling when the menu is closed
    document.body.style.overflow = "auto";
  };

  const showButton = useCallback(() => {
    if (window.innerWidth <= 960) {
      // Handling logic for smaller screens
      setShowNavbarButton(true);
      setShowNavbarDropDowm(false);
      setShowMobileShop(true);
      setClick(false);
    } else {
      // Handling logic for larger screens
      setShowNavbarButton(false);
      setShowNavbarDropDowm(true);
      setShowMobileShop(false);
      setClick(true);
    }
  }, []);

  useEffect(() => {
    showButton();
    // Event listener for resize
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [showButton]);

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

  const slides = [
    {
      url: "/images/image10Copy.jpg",
      title: "SHOP LEGGINGS",
      link: "leggings",
    },
    { url: "/images/image11Copy.jpg", title: "SHOP SPORT BRAS", link: "bras" },
    {
      url: "/images/image12Copy.jpg",
      title: "SHOP ACCESSORIES",
      link: "accessories",
    },
    {
      url: "/images/image13Copy.jpg",
      title: "SHOP SUPPLEMENTS",
      link: "supplements",
    },
  ];

  const handleMouseEnter = () => {
    setNavDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setNavDropdownVisible(false);
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
            <i className="fa-solid fa-heart-pulse heart-navbar"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {showNavbarDropdown && (
              <li
                className="nav-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/shop" className="nav-links">
                  SHOP
                </Link>
              </li>
            )}
            {showMobileShop && (
              <div className="slides-styles">
                <MobileShop slides={slides} closeMobileMenu={closeMobileMenu} />
              </div>
            )}
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
            {showNavbarButton && (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  LOG IN / SIGN UP
                </Link>
              </li>
            )}
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
              // Displaying a logout button when the user is logged in
              <Link to="/account">
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
            ) : (
              // Displaying a link to the login page when the user is not logged in
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
        {isNavDropdownVisible && (
          <NavDropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
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
