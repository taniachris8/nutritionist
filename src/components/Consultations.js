import React from "react";
import "../App.css";
import "./componentsCss/Consultations.css";

function Consultations() {
  const handleClick = (path) => {
    window.location.href = path;
  };
  return (
    <div className="consultations-container">
      <h1 className="consultation-hdr">Консультации</h1>
      <p className="consultation-prg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="consultation-wrapper">
        <div className="consultation-item">
          <h2 className="consulation-title">Первая консультация</h2>
          <p className="consultation-price">Бесплатно</p>
          <div className="consultation-details">
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Обзор проблемы</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Индивидуальное задание</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Первоначальный диагноз</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Обзор проблемы</p>
            </div>
          </div>
          <button
            className="consultation-btn"
            onClick={() => handleClick("/first_consultation")}
          >
            Подробнее
          </button>
        </div>
        <div className="consultation-item">
          <h2 className="consulation-title">Индивидуальная консультация</h2>
          <p className="consultation-price">от 1200 рублей</p>
          <div className="consultation-details">
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Обзор проблемы</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Индивидуальное задание</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Первоначальный диагноз</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Обзор проблемы</p>
            </div>
          </div>

          <button
            className="consultation-btn"
            onClick={() => handleClick("/personal_consultation")}
          >
            Подробнее
          </button>
        </div>
        <div className="consultation-item">
          <h2 className="consulation-title">Персональная программа</h2>
          <p className="consultation-price">от 8000 рублей</p>
          <div className="consultation-details">
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Обзор проблемы</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Индивидуальное задание</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Первоначальный диагноз</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Обзор проблемы</p>
            </div>
          </div>
          <button
            className="consultation-btn"
            onClick={() => handleClick("/personal_plan")}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Consultations;
