import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Feedback from "./pages/Feedback.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./pages/Services.js";
import FirstConsultation from "./pages/FirstConsultation.js";
import PersonalConsultation from "./pages/PersonalConsultation.js";
import PersonalPlan from "./pages/PersonalPlan.js";
import WhatIsNutritionology from "./pages/WhatIsNutritionology.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/services" element={<Services />} />
        <Route path="/first_consultation" element={<FirstConsultation />} />
        <Route
          path="/personal_consultation"
          element={<PersonalConsultation />}
        />
        <Route path="/personal_plan" element={<PersonalPlan />} />
        <Route path="/nutritionology" element={<WhatIsNutritionology />} />
      </Routes>
    </Router>
  );
}

export default App;
