import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "./componentsCss/Consultations.css";

function Consultations() {
  return (
    <div className="consultations-container">
      <h1 className="consultation-hdr">Консультации</h1>
      <p className="consultation-prg">
        Услуги, которые помогут достичь желаемых результатов, основанных на
        ваших целях и индивидуальных потребностях организма
      </p>
      <div className="consultation-wrapper">
        <div className="consultation-item">
          <h2 className="consulation-title">Первая консультация</h2>
          <p className="consultation-price">Бесплатно</p>
          <div className="consultation-details">
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Знакомство</p>
            </div>
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
              <p className="check-prg">Рекомендации по питанию</p>
            </div>
          </div>
          <Link to="/first_consultation">
            <button className="consultation-btn">Подробнее</button>
          </Link>
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
              <p className="check-prg">Индивидуальные задания</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Рекомендации по питанию</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">План действий</p>
            </div>
          </div>
          <Link to="/personal_consultation">
            <button className="consultation-btn"> Подробнее</button>
          </Link>
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
              <p className="check-prg">Индивидуальные задания</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">Рекомендации по питанию</p>
            </div>
            <div className="check-container">
              <i class="fa-solid fa-check"></i>
              <p className="check-prg">План действий и сопровождение</p>
            </div>
          </div>
          <Link to="/personal_plan">
            {" "}
            <button className="consultation-btn"> Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Consultations;
