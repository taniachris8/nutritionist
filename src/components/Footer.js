import React, { useEffect } from "react";
import "./componentsCss/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts or updates
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="footer-container">
      <div className="footer-subscription-and-links">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <div className="footer-left-container">
                <Link to="/" className="footer-logo">
                  <h2>ЕВГЕНИЯ НЕСТЕРОВА</h2>
                </Link>

                <div className="contact-details">
                  <div className="contact-details-email">
                    <i class="fa-solid fa-envelope"></i>
                    <p className="contact-email">nutriconsult@mail.ru</p>
                  </div>
                  {/* <div className="contact-details-phone">
                    <i class="fa-solid fa-phone"></i>
                    <p className="contact-phone">+79115271587</p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="footer-link-items">
              <h2>ИНФОРМАЦИЯ</h2>
              <Link className="text-links" to="/about_me">
                Обо мне
              </Link>
              <Link className="text-links" to="/nutritionology">
                Что такое нутрициология
              </Link>
              <Link className="text-links" to="/services">
                Консультации
              </Link>
              <Link className="text-links" to="/feedback">
                Отзывы
              </Link>
            </div>
            <div className="footer-link-items">
              <h2>УСЛУГИ</h2>
              <Link className="text-links" to="/first_consultation">
                Первая консультация
              </Link>
              <Link className="text-links" to="/personal_consultation">
                Индивидуальная консультация
              </Link>
              <Link className="text-links" to="/personal_plan">
                Персональная программа
              </Link>
            </div>
            <div className="footer-link-items">
              <h2>СОЦИАЛЬНЫЕ СЕТИ</h2>
              <div className="social-footer-wrapper">
                <a
                  className="social-footer-link vk"
                  href="https://vk.com/club225153257"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VK"
                >
                  <i class="fab fa-vk"></i>
                </a>
                <a
                  className="social-footer-link instagram"
                  href="https://www.instagram.com/evgeniianesterova6770/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="website-rights">
        <p className="website-year">® 2024</p>
        <p className="website-rights-text">
          Любое использование, либо копирование материалов или подборки
          материалов сайта, элементов дизайна и оформления, допускается лишь с
          разрешения правообладателя.
        </p>
      </div>
    </div>
  );
}

export default Footer;
