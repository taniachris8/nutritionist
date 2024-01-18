import React, { useEffect, useState } from "react";
import "../App.css";
import ShopCardItem from "../components/ShopCardItem";
import "./css/LeggingsPage.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { ShopService } from "../services/ShopService";

function AccessoriesPage() {
  const [accessoriesItems, setAccessoriesItems] = useState([]);
  const shopService = new ShopService("http://localhost:8080");

  useEffect(() => {
    shopService.getAllAccessories().then((response) => {
      setAccessoriesItems(response.data);
    });
  }, []);

  const renderShopItems = () => {
    const itemsChunks = [];
    const chunkSize = 4;

    for (let i = 0; i < accessoriesItems.length; i += chunkSize) {
      const chunk = accessoriesItems.slice(i, i + chunkSize);
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

  return accessoriesItems.length > 0 ? (
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
export default AccessoriesPage;
