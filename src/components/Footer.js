import React from "react";
import Button from "react-bootstrap/Button";
import "./componentsCss/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-subscription-and-links">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About us</h2>
              <Link className="text-links" to="/sign-up">
                How it works
              </Link>
              <Link className="text-links" to="/sign-up">
                Our clients
              </Link>
              <Link className="text-links" to="/sign-up">
                Careers
              </Link>
              <Link className="text-links" to="/sign-up">
                Investors
              </Link>
              <Link className="text-links" to="/sign-up">
                Terms and conditions
              </Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact us</h2>
              <Link className="text-links" to="/sign-up">
                How it works
              </Link>
              <Link className="text-links" to="/sign-up">
                Our clients
              </Link>
              <Link className="text-links" to="/sign-up">
                Careers
              </Link>
              <Link className="text-links" to="/sign-up">
                Investors
              </Link>
              <Link className="text-links" to="/sign-up">
                Terms and conditions
              </Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link className="text-links" to="/sign-up">
                How it works
              </Link>
              <Link className="text-links" to="/sign-up">
                Our clients
              </Link>
              <Link className="text-links" to="/sign-up">
                Careers
              </Link>
              <Link className="text-links" to="/sign-up">
                Investors
              </Link>
              <Link className="text-links" to="/sign-up">
                Terms and conditions
              </Link>
            </div>
            <div className="footer-link-items">
              <h2>Rewards</h2>
              <Link className="text-links" to="/sign-up">
                How it works
              </Link>
              <Link className="text-links" to="/sign-up">
                Our clients
              </Link>
              <Link className="text-links" to="/sign-up">
                Careers
              </Link>
              <Link className="text-links" to="/sign-up">
                Investors
              </Link>
              <Link className="text-links" to="/sign-up">
                Terms and conditions
              </Link>
            </div>
          </div>
        </div>
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join PulseActive newsletter to receive our best deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="footer-input"
              />
              <Button variant="outline-light" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              PulseActive
              <i className="fa-solid fa-heart-pulse" />
            </Link>
          </div>
          <small className="website-rights">® 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
