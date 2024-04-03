import React, { useState } from "react";
import "../App.css";
import "./css/PersonalPlan.css";
import Footer from "../components/Footer";
import BookConsultation from "../components/BookConsultation";

function PersonalPlan() {
  const [showBookConsultation, setShowBookConsultation] = useState(false);

  const handleCloseBookModal = () => setShowBookConsultation(false);
  const handleShowBookModal = () => setShowBookConsultation(true);

  return (
    <>
      <div className="personal-plan-container">
        <div className="personal-plan-block">
          <div className="personal-plan-image-wrapper">
            <img
              className="block-image"
              alt="personal-plan"
              src="/images-food/nutri1.jpg"
            />
          </div>
          <div className="personal-plan-text-wrapper">
            <h1 className="personal-plan-title">Персональная программа</h1>
            <div className="personal-plan-price">
              <p>Стоимость:</p>
              <p className="price"> 8000/15000 рублей</p>
            </div>
            <div className="personal-plan-price">
              <p>Длительность сопровождения: </p>
              <p className="price"> 14 дней/30 дней</p>
            </div>
            <h1 className="block-title">Программа включает:</h1>
            <div className="content-wrapper">
              <div className="block-text">
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Оценку вашего текущего состояния здоровья
                  </p>
                </div>
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Определение возможного дефицита питательных веществ
                  </p>
                </div>
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Предоставление основополагающих рекомендаций по здоровому
                    питанию
                  </p>
                </div>
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Разработка индивидуального плана питания, учитывающего ваши
                    потребности и цели
                  </p>
                </div>
              </div>
            </div>
            <h1 className="block-title">
              Что вы получите во время сопровождения:
            </h1>
            <div className="content-wrapper">
              <div className="block-text">
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Сопровождение профессионального нутрициолога – поддержка и
                    консультации в процессе следования рекомендациям
                  </p>
                </div>
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Постоянный контакт для контроля динамики изменений в вашем
                    питании и здоровье
                  </p>
                </div>
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Персональный план питания на месяц
                  </p>
                </div>
                <div className="personal-plan-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="check-prg">
                    Анализ результатов и корректировка программы в соответствии
                    с достигнутыми целями
                  </p>
                </div>
              </div>
            </div>
            <button className="personal-plan-btn" onClick={handleShowBookModal}>
              Записаться на сопровождение
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
export default PersonalPlan;
