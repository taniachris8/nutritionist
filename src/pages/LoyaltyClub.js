import React from "react";
import "../App.css";
import "./css/LoyaltyClub.css";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LoyaltyClub() {
  const handleClick = () => {
    window.location.href = "/sign-up";
  };
  return (
    <>
      <div className="banner-container">
        <h1>Loyalty Club</h1>
        <p>Welcome to the PulseActive Loyalty Club.</p>
        <p>
          Become a member, collect loyalty points and gain valuable benefits.
        </p>
        <div className="banner-btn">
          <Button variant="dark" size="lg" onClick={handleClick}>
            Join Now
          </Button>
        </div>
        <div className="log-in">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>

      <div className="loyalty-club-wrapper">
        <div className="loyalty-club-container">
          <h1>How it works.</h1>
          <p>
            Earn PulseActive Points and redeem them when making purchases, level
            up your member status to get exclusive perks, and benefit from
            referring friends.
          </p>

          <div className="loyalty-club-steps-container">
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-user" />
              </div>
              <h1>Step 1</h1>
              <p>Create an account</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-star" />
              </div>
              <h1>Step 2</h1>
              <p>Earn points for every $ spent</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-turn-up" />
              </div>
              <h1>Step 3</h1>
              <p>Level up for exclusive perks</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-coins" />
              </div>
              <h1>Step 4</h1>
              <p>Redeem points & shop for free</p>
            </div>
          </div>
        </div>

        <div className="loyalty-club-container">
          <h1>How to earn points.</h1>
          <p>
            There are many ways to earn Oner Points. Take a look! It‘s super
            easy.
          </p>

          <div className="loyalty-club-steps-container">
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-user" />
              </div>
              <h1>+350 Points</h1>
              <p>Create an account</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-star" />
              </div>
              <h1>Up to* 150 Points</h1>
              <p>Per $1 spent</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-cake-candles" />
              </div>
              <h1>+750 Points</h1>
              <p>Share your birthday</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-solid fa-user-group" />
              </div>
              <h1>+10,000 Points</h1>
              <p>Refer a friend</p>
            </div>
          </div>
          <div className="loyalty-club-steps-container">
            <div className="step">
              <div className="step-icon">
                <i className="fa-brands fa-facebook" />
              </div>
              <h1>+100 Points</h1>
              <p>Like us on Facebook</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-brands fa-instagram" />
              </div>
              <h1>+100 Points</h1>
              <p>Follow us on Instagram</p>
            </div>
            <div className="step">
              <div className="step-icon">
                <i className="fa-brands fa-twitter" />
              </div>
              <h1>+100 Points</h1>
              <p>Follow us on Twitter</p>
            </div>
          </div>
        </div>
        <div className="lower-button">
          <Button variant="dark" size="lg" onClick={handleClick}>
            Join Now
          </Button>
        </div>
        <div className="lower-text">
          <p>
            Already have an account? <Link to="/sign-up">Log in</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default LoyaltyClub;
