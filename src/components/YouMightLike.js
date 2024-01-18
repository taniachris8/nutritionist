import React, { useEffect, useState } from "react";
import ShopCardItem from "./ShopCardItem";
import "./componentsCss/YouMightLike.css";
import "../App.css";
import data from "../services/db.json";

function YouMightLike() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const allItems = [
      ...data.leggings,
      ...data.bras,
      ...data.accessories,
      ...data.supplements,
    ];

    setShopItems(allItems);
  }, []);

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const renderShopItems = () => {
    // Shuffle the array and take the first 4 items
    const shuffledItems = shuffleArray(shopItems);
    const limitedItems = shuffledItems.slice(0, 4);

    return (
      <div key={0} className="cards-container">
        {limitedItems.map((item, index) => (
          <ShopCardItem
            id={item.id}
            key={index}
            src={`/images/${item.imageFile}`}
            path={item.path}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    );
  };
  return shopItems.length > 0 ? (
    <div className="you-might-like-container">
      <div>
        <h3 style={{ fontSize: "34px" }}>You might also like</h3>
      </div>
      <div className="you-might-like-cards">{renderShopItems()}</div>
    </div>
  ) : (
    <div className="spinner">
      <i class="fa-solid fa-spinner"></i>
    </div>
  );
}
export default YouMightLike;
