import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { ShopService } from "../services/ShopService";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  // Memoize the creation of shopService
  const shopService = useMemo(
    () => new ShopService("http://localhost:8080"),
    []
  );

  useEffect(() => {
    shopService.getWishlistItems().then((response) => {
      setWishlist(response);
    });
  }, [shopService]);

  const addToWishlist = async (item) => {
    try {
      const response = await shopService.addToWishlistDb(item);
      let updatedWishList = wishlist;
      updatedWishList.push(response.data);
      setWishlist(updatedWishList);
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  const removeFromWishlistDb = async (itemId) => {
    try {
      await shopService.deleteWishlistItem(itemId);
    } catch (error) {
      console.error("Error removing from wishlist in the database", error);
    }
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
    removeFromWishlistDb(itemId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, setWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
