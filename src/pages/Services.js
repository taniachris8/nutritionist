import React from "react";
import "../App.css";
import "./css/Services.css";
import Footer from "../components/Footer";
import Consultations from "../components/Consultations";

function Services() {
  return (
    <>
      <div className="services-upper-banner">
        <img
          alt="banner"
          src="/images-food/half2 - Copy.jpeg"
          className="services-upper-image"
        />
      </div>
      <div className="services-container">
        <Consultations />
      </div>

      <Footer />
    </>
  );
}
export default Services;
