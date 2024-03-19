import React, { useState } from "react";
import "../App.css";
import "./componentsCss/Help.css";
import AskQuestionModal from "./AskQuestionModal";

function Help() {
  const [showAskQuestion, setShowAskQuestion] = useState(false);

  const handleCloseAskQuestion = () => {
    setShowAskQuestion(false);
  };
  const handleShowAskQuestion = () => setShowAskQuestion(true);

  return (
    <div className="help-container">
      <div className="help-text">
        <h1 className="help-hdr">Нужна помощь в подборе здорового питания?</h1>
        <p className="help-prg">
          Мы поможем разработать для вас персональную программу питания,
          подходящую исключительно вам.
        </p>
        <div className="help-checks">
          <p className="help-checks-hdr">В ходе консультаций:</p>

          <div className="help-check-container">
            <i class="fa-solid fa-check"></i>
            <p className="help-check">
              Поговорим о значимости здорового образа жизни
            </p>
          </div>
          <div className="help-check-container">
            <i class="fa-solid fa-check"></i>
            <p className="help-check">
              Освоим основные принципы сбалансированного питания,
              обеспечивающего организм всеми необходимыми питательными
              веществами
            </p>
          </div>
          <div className="help-check-container">
            <i class="fa-solid fa-check"></i>
            <p className="help-check">
              Исследуем воздействие различных факторов (эмоций, энергии, сна) на
              выбор продуктов
            </p>
          </div>
          <div className="help-check-container">
            <i class="fa-solid fa-check"></i>
            <p className="help-check">
              Научимся рациональному выбору продуктов при покупках
            </p>
          </div>
          <div className="help-check-container">
            <i class="fa-solid fa-check"></i>
            <p className="help-check">
              Выясним, как отличать на прилавке полезный продукт от
              псевдополезного (Предлагаю оставить это предложение и предыдущее,
              т.к вижу в них разный смысл.)
            </p>
          </div>
          <div className="help-check-container">
            <i class="fa-solid fa-check"></i>
            <p className="help-check">
              Узнаем, как лучше всего готовить продукты для сохранения их
              пищевой ценности в максимальном объеме
            </p>
          </div>
        </div>

        <button className="help-btn" onClick={handleShowAskQuestion}>
          Связаться с нами
        </button>
        <AskQuestionModal
          showAskQuestion={showAskQuestion}
          onHide={handleCloseAskQuestion}
        />
      </div>
      <div className="help-image-container">
        <img className="help-image" src="images-food/this2.jpeg" alt="help" />
      </div>
    </div>
  );
}

export default Help;
