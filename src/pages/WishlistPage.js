import React, { useState, useEffect } from "react";
import { useWishlist } from "../contexts/WishlistContext";
import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ShopCardItem from "../components/ShopCardItem";
import "./css/WishlistPage.css";
import { useUser } from "../contexts/UserContext";

function WishlistPage() {
  const { wishlist } = useWishlist();
  const { user } = useUser();

  const filteredWishList = wishlist.filter((item) => item.userId === user.id);

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <>
      <div className="wishlist-container">
        <div className="wishlist-wrapper">
          <h2 className="wishlist-title">Your Wishlist</h2>
          <div className="wishlist-item-wrapper">
            {filteredWishList.length === 0 ? (
              <div className="wishlist-empty-wrapper">
                <p className="wishlist-empty">Your wishlist is empty</p>
                <p className="no-products">
                  Any items that you save while browsing, will be added here, to
                  your wishlist
                </p>
                <div className="wishlist-icon">
                  <i
                    class="fa-regular fa-heart"
                    style={{ fontSize: "100px" }}
                  ></i>
                </div>
                <Link to="/shop">
                  <Button
                    variant="primary"
                    className="wishlist-button-shop-now"
                  >
                    Shop now
                  </Button>
                </Link>
              </div>
            ) : (
              <ul className="wishlist-item-list">
                {filteredWishList.map((item) => (
                  <li key={item.id} className="wishlist-item">
                    <ShopCardItem
                      id={item.id}
                      key={item.id}
                      src={`images/${item.image}`}
                      path={item.path}
                      title={item.title}
                      price={item.price}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WishlistPage;
