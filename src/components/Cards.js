import React from "react";
import CardItem from "./CardItem";
import "./componentsCss/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out our products </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image11Copy.jpg"
              text="Leggings"
              path="/leggings"
            />
            <CardItem
              src="images/image12Copy.jpg"
              text="Sports Bras"
              path="/bras"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image13Copy.jpg"
              text="All Products"
              path="/shop"
            />
            <CardItem
              src="images/image15Copy.jpg"
              text="Accessories"
              path="/accessories"
            />
            <CardItem
              src="images/image14Copy.jpg"
              text="Supplements"
              path="/supplements"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
