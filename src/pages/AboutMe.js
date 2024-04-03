import React from "react";
import "../App.css";
import "./css/AboutMe.css";
import RequestForm from "../components/RequestForm";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-up">
          <div className="about-me-image-wrapper">
            <img
              src="/images-food/facts.jpg"
              alt="your-pic"
              className="about-me-image"
            />
          </div>
          <div className="about-me-text">
            <h1 className="about-me-title">Рада приветствовать вас!</h1>
            <div className="my-story">
              <h1 className="about-me-hdr">Моя история</h1>
              <p className="info-text">
                Меня зовут Евгения. Я дипломированный нутрициолог / консультант
                по питанию (выпускница Московского Института Психологии).
              </p>
              <p className="info-text">
                Пять лет посвятила изучению филологии, а затем приняла решение
                сменить профессию. Педагогические и психологические навыки,
                полученные за это время, помогают мне устанавливать
                доверительные и поддерживающие отношения со своими клиентами.
              </p>

              <p className="info-text">
                В процессе профессионального становления я испытала различные
                методы коррекции питания, став наставником для самой себя.
                Проект саморазвития, над которым я работала много месяцев, помог
                мне улучшить внутреннее состояние, избавиться от ложных
                убеждений и определить истинные потребности.
              </p>
              <p className="info-text">
                В настоящее время я активно участвую в различных курсах,
                осваивая новые образовательные программы и стремлюсь к
                постоянному росту и совершенствованию своих знаний. Я готова
                поделиться своим опытом с вами, помочь в достижении целей в
                области здорового питания.
              </p>
            </div>
            <div className="about-me-values">
              <h1 className="about-me-hdr">Чем я могу вам помочь</h1>
              <div className="upper-block">
                <div className="block-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="block-check-prg">
                    Сформулировать выполнимые цели
                  </p>
                </div>
                <div className="block-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="block-check-prg">
                    Выработать мотивацию к здоровому питанию без жестких
                    запретов, провоцирующих сбои пищевого поведения
                  </p>
                </div>
                <div className="block-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="block-check-prg">
                    Действовать, несмотря на критику близких
                  </p>
                </div>
                <div className="block-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="block-check-prg">
                    Преодолевать застои, когда видимого прогресса нет
                  </p>
                </div>
                <div className="block-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="block-check-prg">Полюбить здоровое питание</p>
                </div>
                <div className="block-check">
                  <i class="fa-solid fa-check"></i>
                  <p className="block-check-prg">Закрепить достигнутое</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-me-education">
          <h1 className="about-me-hdr">Образование</h1>
          <div className="education-text">
            <p className="info-text">
              5 декабря 2023 года я успешно завершила программу обучения "Основы
              нутрициологии" в Московском институте психологии, одном из лучших
              образовательных учреждений страны.
            </p>
          </div>

          <div className="certificates-container">
            <div className="certificate-image-wrapper">
              <img
                src="/images-food/diploma (2).jpg"
                alt="diploma"
                className="certificate-image"
              />
            </div>
            <div className="certificate-image-wrapper">
              <img
                src="/images-food/certificate2.jpg"
                alt="diploma"
                className="certificate-image"
              />
            </div>
            <div className="certificate-image-wrapper">
              <img
                src="/images-food/certificate1.jpg"
                alt="diploma"
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      </div>
      <RequestForm />
      <Footer />
    </>
  );
}
export default AboutMe;
