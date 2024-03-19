import React from "react";
import "../App.css";
import "./css/WhatIsNutritionology.css";
import Footer from "../components/Footer";

function WhatIsNutritionology() {
  return (
    <>
      <div className="services-upper-banner">
        <img
          alt="banner"
          src="/images-food/half2 - Copy.jpeg"
          className="services-upper-image"
        />
      </div>
      <div className="what-is-nutri-container">
        <h1 className="what-is-nutri-title">
          Что такое нутрициология простыми словами?
        </h1>
        <div className="what-is-nutri-block">
          <div className="what-is-nutri-img-container">
            <img
              alt="what-is-nutri"
              src="/images-food/this2.jpeg"
              className="what-is-nutri-img"
            />
          </div>
          <div className="nutri-defi-wrapper">
            <h1 className="nutri-defi-title">Определение</h1>
            <p className="definition">
              Нутрициология - это область науки, посвященная изучению влияния
              питания на здоровье человека. В ее основе лежит анализ питательных
              веществ, их воздействия на организм, а также определение
              оптимального питания для поддержания здоровья и профилактики
              болезней.
            </p>
            <p className="definition">
              Нутрициологи исследуют различные аспекты питания, включая влияние
              различных продуктов на организм, рекомендации по составлению
              рационов и диет, а также принципы здорового образа жизни,
              основанные на питании. Эта наука играет важную роль в повседневной
              жизни людей, помогая им принимать осознанные решения о своем
              питании и улучшать свое общее здоровье.
            </p>
          </div>
        </div>
        <div className="what-is-nutri-lower-block">
          <div className="lower-img-container float-right">
            <img
              alt="what-is-nutri"
              src="/images-food/this3.jpeg"
              className="lower-img"
            />
          </div>
          <div className="nutri-facts-wrapper">
            <h1 className="nutri-facts-title">Какие-то полезные факты</h1>
            <p className="fact">
              Нутрициология - это область науки, посвященная изучению влияния
              питания на здоровье человека. В ее основе лежит анализ питательных
              веществ, их воздействия на организм, а также определение
              оптимального питания для поддержания здоровья и профилактики
              болезней.
            </p>
            <p className="fact">
              Нутрициологи исследуют различные аспекты питания, включая влияние
              различных продуктов на организм, рекомендации по составлению
              рационов и диет, а также принципы здорового образа жизни,
              основанные на питании. Эта наука играет важную роль в повседневной
              жизни людей, помогая им принимать осознанные решения о своем
              питании и улучшать свое общее здоровье.
            </p>
            <p className="fact">
              Нутрициологи исследуют различные аспекты питания, включая влияние
              различных продуктов на организм, рекомендации по составлению
              рационов и диет, а также принципы здорового образа жизни,
              основанные на питании. Эта наука играет важную роль в повседневной
              жизни людей, помогая им принимать осознанные решения о своем
              питании и улучшать свое общее здоровье.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default WhatIsNutritionology;
