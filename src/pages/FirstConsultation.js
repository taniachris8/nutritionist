import React, { useState } from "react";
import "../App.css";
import "./css/FirstConsultation.css";
import Footer from "../components/Footer";
import BookConsultation from "../components/BookConsultation";

function FirstConsultation() {
  const [showBookConsultation, setShowBookConsultation] = useState(false);

  const handleCloseBookModal = () => setShowBookConsultation(false);
  const handleShowBookModal = () => setShowBookConsultation(true);

  return (
    <>
      {/* <div className="services-upper-banner">
        <img
          alt="banner"
          src="/images-food/this.jpg"
          className="services-upper-image"
        />
      </div> */}
      <div className="first-consultation-container">
        <div className="first-consultation-block">
          <div className="first-consult-image-wrapper">
            <img
              className="block-image"
              alt="first-consultation"
              src="/images-food/nutri2.jpg"
            />
          </div>
          <div className="first-consult-text-wrapper">
            <h1 className="first-consultation-title">Первая консультация</h1>
            <div className="first-consult-price">
              <p>Стоимость консультации: </p>
              <p className="price"> Бесплатно</p>
            </div>
            <div className="first-consult-price">
              <p>Длительность консультации: </p>
              <p className="price"> 1-2 часа</p>
            </div>
            <h1 className="block-title">Консультация включает:</h1>
            <div className="content-wrapper">
              <div className="block-text">
                <div className="first-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Оценку вашего текущего состояния здоровья
                  </p>
                </div>
                <div className="first-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Анализ текущего образа жизни: физических упражнений, сна,
                    стресса и всего, что может повлиять на общее здоровье
                  </p>
                </div>
                <div className="first-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Анализ вашего текущего рациона и пищевых пристрастий
                  </p>
                </div>
                <div className="first-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Определение возможного дефицита питательных веществ
                  </p>
                </div>
              </div>
            </div>
            <h1 className="block-title">После консультации:</h1>
            <p className="after-consult-prg">
              После первой консультации я создам для вас персональный
              нутрицевтический отчёт, который будет выслан вам в электронном
              виде. Персональный нутрицевтический отчёт будет содержать:
            </p>
            <div className="content-wrapper">
              <div className="block-text">
                <div className="first-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Персональные рекомендации по питанию и образу жизни
                  </p>
                </div>
                <div className="first-consult-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Анализ вашего текущего рациона и пищевых пристрастий
                  </p>
                </div>
              </div>
            </div>
            <button className="first-consult-btn" onClick={handleShowBookModal}>
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
export default FirstConsultation;
