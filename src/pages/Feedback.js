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
      name: "Татьяна",
      job: "front-end developer",
    },
    {
      url: "/images-food/people/vlad.jpg",
      feedback: (
        <p>
          Моё сотрудничество с Евгенией началось с самых первых этапов её
          профессионального пути. Во время общения я ощущал внимание, заботу,
          поддержку нутрициолога. Программа сопровождения, разработанная ей,
          казалась мне чем-то вроде эксперимента, в который я хотел вступить
          из-за увлеченности темой питания. В современном мире вокруг нас
          собрано столько противоречивой информации, что порой сложно
          разобраться в ней. Я искал человека, который поможет мне с этим.
        </p>
      ),
      feedbackSecond: (
        <p>
          Сегодня я чувствую себя гораздо лучше, благодаря проделанной работе. В
          настоящее время я продолжаю внедрять изменения в свою жизнь и очень
          благодарен Евгении за то, что она проходит этот путь со мной.
        </p>
      ),
      name: "Влад",
      job: "инженер",
    },
    {
      url: "/images-food/people/yarin.jpg",
      feedback: (
        <p>
          Я долгое время откладывал визит к нутрициологу из-за страха перед
          строгим контролем, постоянными отчётами о съеденном, ограничениями в
          любимых продуктах. Очень тяжело менять привычный образ жизни. Однако,
          когда я встретился с Евгенией, все мои опасения исчезли. Оказалось,
          что под руководством специалиста можно достичь желаемых результатов -
          улучшить здоровье, снизить вес, не погружаясь при этом в состояние
          стресса.
        </p>
      ),
      feedbackSecond: <p>Благодарю Евгению за ее труд и поддержку.</p>,
      name: "Ярин",
      job: "программист",
    },
  ];
  return (
    <>
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
