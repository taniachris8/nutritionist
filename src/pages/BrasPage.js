import React, { useEffect, useState, useMemo } from "react";
import "../App.css";
import ShopCardItem from "../components/ShopCardItem";
import "./css/LeggingsPage.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { ShopService } from "../services/ShopService";

function BrasPage() {
  const [brasItems, setBrasItems] = useState([]);
  // Memoize the creation of shopService
  const shopService = useMemo(
    () => new ShopService("http://localhost:8080"),
    []
  );

  useEffect(() => {
    shopService.getAllBras().then((response) => {
      setBrasItems(response.data);
    });
  }, [shopService]);

  const renderShopItems = () => {
    const itemsChunks = [];
    const chunkSize = 4;

    for (let i = 0; i < brasItems.length; i += chunkSize) {
      const chunk = brasItems.slice(i, i + chunkSize);
      itemsChunks.push(chunk);
    }

    return itemsChunks.map((chunk, chunkIndex) => (
      <div key={chunkIndex} className="cards-container">
        {chunk.map((item, index) => (
          <ShopCardItem
            id={item.id}
            key={index}
            src={`images/${item.imageFile}`}
            imageFile={item.imageFile}
            path={item.path}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    ));
  };

  return brasItems.length > 0 ? (
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
export default BrasPage;
