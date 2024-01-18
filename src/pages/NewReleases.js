import React, { useEffect, useState } from "react";
import "../../App.css";
import ShopCardItem from "../ShopCardItem";
import "../css/LeggingsPage.css";
import Banner from "../Banner";
import Footer from "../Footer";
import data from "../../services/db.json";

function NewReleasesPage() {
  const [newReleasesItems, setNewReleasesItems] = useState([]);

  useEffect(() => {
    // Concatenate items from different categories and filter by date
    const allItems = [
      ...data.leggings,
      ...data.accessories,
      ...data.bras,
      ...data.supplements,
    ];
    const filteredItems = allItems.filter((item) => item.date === "2023-12-10");

    setNewReleasesItems(filteredItems);
  }, []);

  const renderShopItems = () => {
    const itemsChunks = [];
    const chunkSize = 4;

    for (let i = 0; i < newReleasesItems.length; i += chunkSize) {
      const chunk = newReleasesItems.slice(i, i + chunkSize);
      itemsChunks.push(chunk);
    }

    return itemsChunks.map((chunk, chunkIndex) => (
      <div key={chunkIndex} className="cards-container">
        {chunk.map((item, index) => (
          <ShopCardItem
            key={index}
            src={`images/${item.imageFile}`}
            path={item.path}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    ));
  };

  return newReleasesItems.length > 0 ? (
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
    <div>Loading...</div>
  );
}

export default NewReleasesPage;
