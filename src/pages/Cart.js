// Cart.js
import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./css/Cart.css";
import { useUser } from "../contexts/UserContext";
import LoginModal from "../components/LoginModal";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const { user } = useUser();

  const filteredCart = cart.filter((item) => item.userId === user.id);

  // Calculate subtotal
  const subtotal = filteredCart.reduce((acc, item) => {
    // Extracting the price and count from the item
    const { price, count } = item;

    // Remove the currency symbol and convert the price to a number
    const numericPrice = Number(price.replace("€", "").trim());

    // Calculate the total price for the item (price * count)
    const itemTotal = numericPrice * count;

    // Accumulate the total in the accumulator
    return acc + itemTotal;
  }, 0);

  return (
    <>
      <div className="cart-container">
        <div className="cart-wrapper">
          <h2 className="cart-title">Your Shopping Cart</h2>
          <div className="cart-item-wrapper">
            {filteredCart.length === 0 ? (
              <div className="cart-empty-wrapper">
                <p className="cart-empty">Your cart is empty</p>
                <p className="no-products">
                  There are no products in your cart
                </p>
                <div className="cart-icon">
                  <i
                    class="fa-solid fa-bag-shopping"
                    style={{ fontSize: "100px" }}
                  ></i>
                </div>
                <Link to="/shop">
                  <Button variant="primary" className="cart-button-shop-now">
                    Shop now
                  </Button>
                </Link>
              </div>
            ) : (
              <ul className="cart-item-list">
                {filteredCart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="summary-container">
          <h2 className="summary-title">Summary</h2>
          <div className="summary-calculation">
            <div className="summary-calculation-wrapper">
              <div>Subtotal: </div>
              <div>{subtotal}€</div>
            </div>
          </div>
          <Button className="checkout-button" variant="primary">
            Checkout securely
          </Button>
          <Link to="/shop">
            <Button className="continue-shopping-button" variant="light">
              &lt; Continue shopping
            </Button>
          </Link>

          <div className="delivery-container">
            <h3 className="delivered-title">Delivered to your door</h3>
            <div className="returns">
              <i class="fa-solid fa-rotate-left"></i>
              <p className="returns-text">
                Orders made between 16/10/23 - 01/01/24 can be returned up until
                31/01/24.
              </p>
            </div>
            <div className="standard-delivery">
              <i class="fa-solid fa-truck"></i>
              <p className="free-shipping-text">
                Free Standard delivery over €75*
              </p>
            </div>
          </div>
          <div className="help-container">
            <h1 className="help-title">Need help?</h1>
            <Link
              to="/delivery"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p>Delivery information &#62;</p>
            </Link>
            <Link
              to="/return"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <p>Make a return &#62;</p>
            </Link>
          </div>
        </div>
      </div>
      <LoginModal
        title="Your Cart"
        firstLine="Log in or create an account to add products to your cart."
        secondLine="Plus, you can checkout faster and start collecting Oner Points."
      />

      <Footer />
    </>
  );
}

export default Cart;
