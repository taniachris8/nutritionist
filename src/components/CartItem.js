import React from "react";
import "./componentsCss/CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li className="cart-item-container">
      <img
        className="cart-item-image"
        src={`/images/${item.image}`}
        alt={item.title}
        style={{ maxWidth: "100px" }}
      />
      <div className="cart-item-details">
        <Link
          to={`${item.path}/${item.id.split("-")[0]}`}
          style={{ textDecoration: "none" }}
        >
          <div>{item.title}</div>
        </Link>
        <div className="cart-item-additional-details">Price: {item.price}</div>
        <div className="cart-item-additional-details">Size: {item.size}</div>
        <div className="cart-item-additional-details">
          Quantity: {item.count}
        </div>
      </div>
      <button className="remove-button" onClick={() => removeFromCart(item.id)}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default CartItem;
