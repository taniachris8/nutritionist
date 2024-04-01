import React from "react";
import "../App.css";
import "./css/WhatIsNutritionology.css";
import Footer from "../components/Footer";

function WhatIsNutritionology() {
  return (
    <>
      <div className="what-is-nutri-container">
        <div className="what-is-nutri-block">
          <div className="nutri-img-container-upper">
            <img
              alt="what-is-nutri"
              src="/images-food/nutri-together.jpg"
              className="what-is-nutri-img"
            />
          </div>
          <div className="nutri-defi-wrapper">
            <h1 className="what-is-nutri-title">Что такое нутрициология?</h1>
            <h1 className="nutri-defi-title">Определение</h1>
            <p className="definition">
              Нутрициология - это область науки, посвященная изучению влияния
              питания на здоровье человека.
            </p>
            <p className="definition">
              В ее основе лежит анализ питательных веществ, их воздействия на
              организм, а также определение оптимального питания для поддержания
              здоровья и профилактики болезней.
            </p>
            <p className="definition">
              Нутрициологи исследуют различные аспекты питания, включая влияние
              различных продуктов на организм, рекомендации по составлению
              рационов и диет, а также принципы здорового образа жизни,
              основанные на питании.
            </p>
            <p className="definition">
              Эта наука играет важную роль в повседневной жизни людей, помогая
              им принимать осознанные решения о своем питании и улучшать свое
              общее здоровье.
            </p>
          </div>
        </div>
        <div className="what-is-nutri-block">
          <div className="nutri-facts-wrapper">
            <h1 className="nutri-facts-title">
              Навыки и компетенции нутрициолога
            </h1>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Составление рационов и персонифицированные назначения
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Нутриенты в питании и пищевая ценность рациона
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">Работа с БАД и коррекции дефицитов</p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">КБЖУ, состав пищи и её влияние на здоровье</p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Терапевтические свойства отдельных продуктов
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">Технологии приготовления и хранения пищи</p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Профилактика и поддержание здоровья с помощью нутрициологической
                поддержки и коррекции рациона
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">Нутрициологический менеджмент стресса</p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Выявление пищевых непереносимостей, персональный подбор рациона
              </p>
            </div>
          </div>
          <div className="nutri-img-container">
            <img
              alt="what-is-nutri"
              src="/images-food/aboutme - Copy.jpg"
              className="what-is-nutri-img"
            />
          </div>
        </div>
        <div className="what-is-nutri-block">
          <div className="nutri-img-container">
            <img
              alt="what-is-nutri"
              src="/images-food/smart-watch.jpg"
              className="what-is-nutri-img"
            />
          </div>
          <div className="nutri-defi-wrapper">
            <h1 className="nutri-defi-title">
              Что не входит в компетенции нутрициолога
            </h1>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">Постановка медицинского диагноза</p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Назначение процедур медицинского характера и лекарств
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Назначение лечебных диет при заболеваниях, даже связанных с
                питанием ( диабет, панкреатит, синдром раздраженного кишечника и
                пр)
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Назначение пищевых добавок для похудения с дозировками и схемами
                приёма
              </p>
            </div>
            <div className="fact-check">
              <i class="fa-solid fa-check"></i>
              <p className="fact">
                Рекомендации, которые направлены на достижение желательных для
                клиента результатов, но представляющие риск для его здоровья
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default WhatIsNutritionology;
