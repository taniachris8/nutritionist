import React from "react";
import "../App.css";
import "./css/Feedback.css";
import Footer from "../components/Footer";
import TestimonialSlider from "../components/TestimonialSlider";

function Feedback() {
  const slides = [
    {
      url: "/images-food/people/tania.jpg",
      feedback: (
        <p>
          Я хотела бы выразить благодарность нутрициологу Евгении за её
          профессионализм и внимание к моим потребностям. Сотрудничество с ней
          принесло мне огромную пользу в области здорового питания и в
          достижении моих целей (набор мышечной массы, улучшение настроения и
          общего состояния здоровья). Евгения помогла мне провести анализ моего
          рациона питания, выявить "ненужные" продукты и внести коррективы. Её
          глубокие знания в области нутрициологии позволили точно определить,
          какие продукты следует исключить из моего рациона, а какие добавить
          для достижения желаемых результатов.
        </p>
      ),
      feedbackSecond: (
        <p>
          Я очень довольна нашей работой. Спасибо, Евгения, за ваше ценное
          руководство и помощь в моем путешествии к здоровому образу жизни. Я
          рекомендую вас всем, кто ищет квалифицированного и заботливого
          нутрициолога.
        </p>
      ),
      name: "Татьяна Орански",
      job: "front-end developer",
    },
    {
      url: "/images-food/people/person2.jpg",
      feedback: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
        </p>
      ),
      name: "Сергей Кузнецов",
      job: "программист",
    },
    {
      url: "/images-food/people/person3.jpg",
      feedback: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
        </p>
      ),
      name: "Сергей Кузнецов",
      job: "программист",
    },
    {
      url: "/images-food/people/person4.jpg",
      feedback: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
        </p>
      ),
      name: "Сергей Кузнецов",
      job: "программист",
    },
    {
      url: "/images-food/people/person5.jpg",
      feedback: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
        </p>
      ),
      name: "Сергей Кузнецов",
      job: "программист",
    },
  ];
  return (
    <>
      {/* <div className="feedback-upper-banner">
        <img
          alt="banner"
          src="/images-food/half1 - Copy.jpeg"
          className="feedback-upper-image"
        />
      </div> */}
      <div className="feedback-container">
        <h1 className="feedback-title">Отзывы клиентов</h1>
        <p className="feedback-hrd">
          Отзывы публикуются только с разрешения клиента
        </p>
        <TestimonialSlider slides={slides} />
      </div>

      <Footer />
    </>
  );
}
export default Feedback;
