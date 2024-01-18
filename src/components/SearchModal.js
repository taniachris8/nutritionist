import React, { useState } from "react";
import "./componentsCss/SearchModal.css";
import data from "../services/db.json";
import ShopCardItem from "./ShopCardItem";

function SearchModal() {
  const [searchResults, setSearchResults] = useState([]);
  const [isNoResults, setIsNoResults] = useState(false);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();

    const allItems = [
      ...data.leggings,
      ...data.bras,
      ...data.accessories,
      ...data.supplements,
    ];

    const results = query
      ? allItems.filter((item) => item.title.toLowerCase().includes(query))
      : [];
    setSearchResults(results);
    setIsNoResults(query.length > 0 && results.length === 0);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-header">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
        </div>
        <div className="search-body">
          {isNoResults ? (
            <p>We're sorry but no results could be found for your query</p>
          ) : (
            searchResults.map((item) => (
              <div key={item.id} className="search-result-items">
                <ShopCardItem
                  id={item.id}
                  src={`/images/${item.imageFile}`}
                  path={item.path}
                  title={item.title}
                  price={item.price}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SearchModal;
