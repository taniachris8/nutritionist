import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./componentsCss/Navbar.css";
import MobileShop from "./MobileShop";
import NavDropdown from "./NavDropdown";
import "./componentsCss/NavDropdown.css";
import AskQuestionModal from "./AskQuestionModal";

function Navbar() {
  const [click, setClick] = useState(false);
  const [showNavbarButton, setShowNavbarButton] = useState(false);
  const [showNavbarDropDown, setShowNavbarDropDown] = useState(true);
  const [showMobileShop, setShowMobileShop] = useState(false);
  const [isNavDropdownVisible, setNavDropdownVisible] = useState(false);
  const [showAskQuestion, setShowAskQuestion] = useState(false);

  const handleCloseAskQuestion = () => setShowAskQuestion(false);
  const handleShowAskQuestion = () => setShowAskQuestion(true);

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
    const innerWidth = window.innerWidth;
    if (innerWidth <= 768) {
      // Handling logic for smaller screens
      setShowNavbarButton(true);
      setShowNavbarDropDown(false);
      setShowMobileShop(true);
      setClick(false);
    } else if (innerWidth <= 820) {
      // Handling logic for 768 < innerWidth <= 820
      setShowNavbarButton(true);
      setShowNavbarDropDown(false);
      setShowMobileShop(true);
      setClick(false);
    } else if (innerWidth <= 375) {
      // Handling logic for 820 < innerWidth <= 375
      setShowNavbarButton(true);
      setShowNavbarDropDown(false);
      setShowMobileShop(true);
      setClick(false);
    } else if (innerWidth <= 390) {
      // Handling logic for 375 < innerWidth <= 390
      setShowNavbarButton(true);
      setShowNavbarDropDown(false);
      setShowMobileShop(true);
      setClick(false);
    } else if (innerWidth <= 430) {
      // Handling logic for 390 < innerWidth <= 430
      setShowNavbarButton(true);
      setShowNavbarDropDown(false);
      setShowMobileShop(true);
      setClick(false);
    } else {
      // Handling logic for larger screens
      setShowNavbarButton(false);
      setShowNavbarDropDown(true);
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

  const slides = [
    {
      url: "/images-food/this.jpg",
      title: "Первая консультация",
      link: "first_consultation",
    },
    {
      url: "/images-food/this2.jpg",
      title: "Индивидуальная консультация",
      link: "personal_consultation",
    },
    {
      url: "/images-food/this3.jpg",
      title: "Персональная программа",
      link: "personal_plan",
    },
  ];

  const handleMouseEnter = () => {
    // eslint-disable-next-line
    const temp = showNavbarDropDown;
    // setNavDropdownVisible(true);
    const innerWidth = window.innerWidth;
    if (innerWidth > 820) {
      // Adjust this threshold according to your needs
      setNavDropdownVisible(true);
    }
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
            onClick={() => {
              closeMobileMenu(); // Close mobile menu when logo is clicked
              window.scrollTo(0, 0); // Scroll to the top of the page
            }}
          >
            ЕВГЕНИЯ НЕСТЕРОВА
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </div>
          <ul
            className={
              showNavbarButton && click ? "nav-menu active" : "nav-menu"
            }
          >
            <li className="test">
              {showMobileShop && (
                <div className="slides-styles">
                  <MobileShop
                    slides={slides}
                    closeMobileMenu={closeMobileMenu}
                  />
                </div>
              )}
            </li>

            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  handleMouseLeave();
                }}
              >
                УСЛУГИ
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about_me"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ОБО МНЕ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/feedback"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ОТЗЫВЫ
              </Link>
            </li>
          </ul>
          <li className="nav-item nav-icons-and-btn-container">
            <div className="navbar-social-icons">
              <a
                className="social-icon-link vk"
                href="https://vk.com/club225153257"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VK"
              >
                <i className="fab fa-vk"></i>
              </a>
              <a
                className="social-icon-link instagram"
                href="https://www.instagram.com/evgeniianesterova6770/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <button className="nav-btn" onClick={handleShowAskQuestion}>
              Задать вопрос
            </button>
            <AskQuestionModal
              showAskQuestion={showAskQuestion}
              onHide={handleCloseAskQuestion}
              handleCloseAskQuestion={handleCloseAskQuestion}
            />
          </li>
        </div>
        {isNavDropdownVisible && (
          <NavDropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
