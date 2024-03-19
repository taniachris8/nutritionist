import React, { useState } from "react";
import "../App.css";
import "./css/PersonalConsultation.css";
import Footer from "../components/Footer";
import BookConsultation from "../components/BookConsultation";

function PersonalConsultation() {
  const [showBookConsultation, setShowBookConsultation] = useState(false);

  const handleCloseBookModal = () => setShowBookConsultation(false);
  const handleShowBookModal = () => setShowBookConsultation(true);

  return (
    <>
      <div className="services-upper-banner">
        <img
          alt="banner"
          src="/images-food/this2.jpg"
          className="services-upper-image"
        />
      </div>
      <div className="personal-consultation-container">
        <div className="personal-consultation-block">
          <div className="personal-consult-image-wrapper">
            <img
              className="block-image"
              alt="personal-consultation"
              src="/images-food/beetroot.jpg"
            />
          </div>
          <div className="personal-consult-text-wrapper">
            <h1 className="personal-consultation-title">
              Индивидуальная консультация
            </h1>
            <div className="personal-consult-price">
              <p>Стоимость консультации:</p>
              <p className="price">
                {" "}
                1 500 (первая беседа) / 1200 - последующие{" "}
              </p>
            </div>
            <div className="personal-consult-price">
              <p>Длительность консультации: </p>
              <p className="price"> 1,5-2 часа</p>
            </div>
            <h1 className="block-title">Консультация включает:</h1>
            <div className="content-wrapper">
              <div className="block-text">
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Оценку вашего текущего состояния здоровья
                  </p>
                </div>
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">Постановку цели</p>
                </div>
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Предоставление основополагающих рекомендаций по здоровому
                    питанию
                  </p>
                </div>
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Обучение работы с новой информацией
                  </p>
                </div>
              </div>
            </div>
            <h1 className="block-title">После консультации:</h1>
            <p className="after-consult-prg">
              После индивидуальной консультации я создам для вас
              нутрицевтический отчёт, который будет выслан вам в электронном
              виде. Нутрицевтический отчёт будет содержать:
            </p>
            <div className="content-wrapper">
              <div className="block-text">
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    План действий для корректировки текущего состояния
                  </p>
                </div>
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Персональные рекомендации по питанию и образу жизни
                  </p>
                </div>
                <div className="personal-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Анализ вашего текущего рациона и пищевых пристрастий
                  </p>
                </div>
              </div>
            </div>
            <button
              className="personal-consult-btn"
              onClick={handleShowBookModal}
            >
              Записаться на консультацию
            </button>
            <BookConsultation
              showBookConsultation={showBookConsultation}
              onHide={handleCloseBookModal}
              handleCloseBookModal={handleCloseBookModal}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default PersonalConsultation;
