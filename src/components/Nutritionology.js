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
              Нутрициология – это наука о питании, предметом изучения которой
              является еда и её влияние на организм человека в целом и на
              отдельные его органы. Нутрициология изучает состав продуктов
              питания, процессы взаимодействия содержащихся в них пищевых
              веществ и других компонентов, способ употребления пищи, процессы
              усвоения. Большой упор делается на то, чем руководствуется
              человек, выбирая пищу и то, какое действие оказывает этот выбор на
              организм.
            </p>
            <p className="nutritionology-prg-add">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla.
            </p>
            <p className="nutritionology-prg-add">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla.
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
