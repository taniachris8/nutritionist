import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { ShopService } from "../services/ShopService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Memoize the creation of shopService
  const shopService = useMemo(
    () => new ShopService("http://localhost:8080"),
    []
  );

  useEffect(() => {
    shopService.getCartItems().then((response) => {
      setCart(response.data);
    });
  }, [shopService]); // Include shopService in the dependencies array

  const setNewCart = (cart) => {
    setCart(cart);
  };

  const addToCart = async (item) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // Item already exists in the cart, update the count
      const updatedCart = cart.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );

      const updatedItem = { ...item, count: updatedCart[itemIndex].count };
      await shopService.updateCartDb(updatedItem);

      setCart(updatedCart);
    } else {
      // Item is not in the cart, add a new item
      const updatedCart = [...cart, { ...item, count: 1 }];
      // Add the new item to the database
      shopService.addToCartDb({ ...item, count: 1 });

      setCart(updatedCart);
    }

    // Add the item to the database with the same count logic
    try {
      if (itemIndex !== -1) {
        const updatedItem = { ...item, count: cart[itemIndex].count + 1 };
        shopService.updateCartDb(updatedItem);
      } else {
        shopService.addToCartDb({ ...item, count: 1 });
      }
      console.log("Item added to the database successfully.");
    } catch (error) {
      console.error("Error adding item to the database:", error);
      // If there's an error adding to the database, you might want to handle it accordingly.
    }

    console.log("Cart state:", cart);
  };

  const removeFromCartDb = (itemId) => {
    shopService
      .deleteCartItem(itemId)
      .then(() => {
        console.log("Item removed from the database successfully.");
      })
      .catch((error) => {
        console.error("Error removing item from the database:", error);
        // Handle the error as needed
      });
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    removeFromCartDb(itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setNewCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
