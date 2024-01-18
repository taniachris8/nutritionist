import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { UserProvider } from "./contexts/UserContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <CartProvider>
    <WishlistProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </WishlistProvider>
  </CartProvider>
);
