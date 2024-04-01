import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "./componentsCss/Nutritionology.css";

function Nutritionology() {
  return (
    <>
      <h1 className="nutritionology-hdr">Что такое нутрициология?</h1>

      <div className="nutritionology-container">
        <div className="nutritionology-image-container">
          <img
            className="nutritionology-image"
            src="images-food/this3.jpg"
            alt="nutritionology"
          />
        </div>
        <div className="nutritionology-text">
          <div className="nutritionology-prgs">
            <p className="nutritionology-prg">
              Нутрициология - это область науки, посвященная изучению влияния
              питания на здоровье человека.
            </p>
            <p className="nutritionology-prg-add">
              В ее основе лежит анализ питательных веществ, их воздействия на
              организм, а также определение оптимального питания для поддержания
              здоровья и профилактики болезней.
            </p>
            <p className="nutritionology-prg-add">
              Нутрициологи исследуют различные аспекты питания, включая влияние
              различных продуктов на организм, рекомендации по составлению
              рационов и диет, а также принципы здорового образа жизни,
              основанные на питании.
            </p>
            <p className="nutritionology-prg-add">
              Эта наука играет важную роль в повседневной жизни людей, помогая
              им принимать осознанные решения о своем питании и улучшать свое
              общее здоровье.
            </p>
          </div>
          <Link to="/nutritionology">
            <button className="nutritionology-btn">Узнать больше</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nutritionology;
