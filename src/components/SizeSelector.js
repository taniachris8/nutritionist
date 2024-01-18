import React, { useState } from "react";
import "./componentsCss/SizeSelector.css";

const SizeSelector = ({ sizes, onSelectSize }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    onSelectSize(size);
  };

  return (
    <div className="size-selector-wrapper">
      <div>
        {sizes.map((size) => (
          <button
            style={{ marginRight: "3px" }}
            key={size}
            onClick={() => handleSizeClick(size)}
            className={selectedSize === size ? "selected" : ""}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
