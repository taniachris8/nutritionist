import React, { useEffect, useState } from "react";
import "../App.css";
import ShopCardItem from "../components/ShopCardItem";
import "./css/LeggingsPage.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import data from "../services/db.json";

function Shop() {
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

  const renderShopItems = () => {
    const itemsChunks = [];
    const chunkSize = 4;

    for (let i = 0; i < shopItems.length; i += chunkSize) {
      const chunk = shopItems.slice(i, i + chunkSize);
      itemsChunks.push(chunk);
    }

    return itemsChunks.map((chunk, chunkIndex) => (
      <div key={chunkIndex} className="cards-container">
        {chunk.map((item, index) => {
          return (
            <ShopCardItem
              id={item.id}
              key={index}
              src={`images/${item.imageFile}`}
              path={item.path}
              title={item.title}
              price={item.price}
              // showSizes={showSizes}
            />
          );
        })}
      </div>
    ));
  };

  return shopItems.length > 0 ? (
    <>
      <Banner
        title="STEP INTO YOUR POWER"
        text="IT'S ON YOU"
        src="images/image14Copy.jpg"
      />
      <div className="cards">{renderShopItems()}</div>

      <Footer />
    </>
  ) : (
    <div className="spinner">
      <i class="fa-solid fa-spinner"></i>
    </div>
  );
}

export default Shop;
