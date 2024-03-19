import React from "react";
import "../App.css";
import "./css/Home.css";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Nutritionology from "../components/Nutritionology";
import Consultations from "../components/Consultations";
import Help from "../components/Help";
import RequestForm from "../components/RequestForm";

function Home() {
  return (
    <>
      <div className="home">
        <HeroSection />
        <Nutritionology />
        <Consultations />
        <Help />
        <RequestForm />
        <Footer />
      </div>
    </>
  );
}
export default Home;
