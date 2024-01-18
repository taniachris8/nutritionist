import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useWishlist } from "../contexts/WishlistContext";
import "./componentsCss/ShopCardItem.css";
import SizeSelector from "./SizeSelector";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { Modal } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import LoginModal from "./LoginModal";

function ShopCardItem(props) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { addToCart, cart } = useCart();
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [isItemInWishlist, setIsItemInWishlist] = useState(
    user &&
      wishlist.some((item) => item.id === props.id && item.userId === user.id)
  );
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setErrorMessage(null);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleAddToCart = () => {
    if (user) {
      const showSizes = checkShowSize(props.path);
      if (showSizes && !selectedSize) {
        // Show error message only when sizes are required and no size is selected
        setErrorMessage("Please select a size before adding to the cart.");
        return;
      }
      const cartItemId = `${props.id}-${selectedSize}`;
      const existingCartItem = cart.find((item) => item.id === cartItemId);
      if (existingCartItem) {
        addToCart({ ...existingCartItem, count: existingCartItem.count + 1 });
      } else {
        const cartItem = {
          id: cartItemId,
          image: props.imageFile,
          title: props.title,
          price: props.price,
          size: selectedSize,
          count: props.count,
          userId: user.id,
          path: props.path,
        };
        addToCart(cartItem);
      }
      handleShowModal();
    } else {
      //if there is no user logged in
      setShowLoginModal(true);
    }
  };

  const handleAddToWishlist = () => {
    if (!user) {
      // If the user is not logged in, show the LoginModal
      setShowLoginModal(true);
    } else {
      // If the user is logged in, add the item to the wishlist
      const wishlistItem = {
        id: props.id,
        image: props.imageFile,
        title: props.title,
        price: props.price,
        path: props.path,
        userId: user.id,
        // Add other necessary properties
      };
      setIsItemInWishlist(true);
      addToWishlist(wishlistItem);
    }
  };

  const handleRemoveFromWishlist = () => {
    if (user) {
      setIsItemInWishlist(false);
      removeFromWishlist(props.id);
    }
  };

  const checkShowSize = (propsPath) => {
    let result;
    switch (propsPath) {
      case "/leggings":
        result = true;
        break;
      case "/accessories":
        result = false;
        break;
      case "/bras":
        result = true;
        break;
      case "/supplements":
        result = false;
        break;
      default:
        result = false;
    }
    return result;
  };

  const showSizes = checkShowSize(props.path);

  //Handling LoginModal
  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Card
        style={{
          display: "flex",
          margin: "1rem",
          width: "22rem",
          borderRadius: "0",
          border: "none",
        }}
      >
        <div
          className="shop-card-item-image-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to={`${props.path}/${props.id}`}>
            <Card.Img
              variant="top"
              src={props.src}
              title={props.title}
              text={props.text}
              price={props.price}
              style={{
                borderRadius: "0",
                objectFit: "cover",
                width: "22rem",
                height: "400px",
              }}
            />
          </Link>
          {isHovered && (
            <div className="quick-add-container" style={{}}>
              <div className="quick-add-content">
                {showSizes && (
                  <SizeSelector
                    sizes={["XS", "S", "M", "L", "XL", "XXL"]}
                    onSelectSize={handleSizeSelect}
                  />
                )}
                {errorMessage && (
                  <Alert
                    className="pb-0"
                    variant="danger"
                    onClose={() => setErrorMessage(null)}
                    dismissible
                  >
                    <p>{errorMessage}</p>
                  </Alert>
                )}
                <div className="quick-add-bottom">
                  <Button variant="dark" onClick={handleAddToCart}>
                    Quick Add
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="add-to-cart-modal">
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title className="modal-title">
                <div>
                  <i
                    style={{
                      color: "green",
                      paddingRight: "10px",
                    }}
                    class="fa-solid fa-circle-check"
                  ></i>
                </div>
                Item added to Cart!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-item-container d-flex align-items-center py-4">
              <img
                className="modal-item-image"
                src={`../images/${props.imageFile}`}
                alt={props.title}
                style={{ width: "150px" }}
              />
              <div className="modal-item-details">
                <div>{props.title}</div>
                <div>{props.price}</div>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal-buttons justify-content-between">
              <Link to="/shop">
                <Button
                  className="modal-continue-shopping-button"
                  variant="primary"
                >
                  &lt; Continue Shopping
                </Button>
              </Link>
              <Link to="/cart">
                <Button className="modal-view-cart-button" variant="dark">
                  View Cart &gt;
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>

        {!isItemInWishlist && (
          <button
            onClick={handleAddToWishlist}
            className="add-to-wishlist-heart-button"
          >
            <i
              style={{
                margin: "0",
                fontSize: "16px",
                color: "rgb(61 61 61)",
              }}
              className="fa-regular fa-heart"
            ></i>
          </button>
        )}

        {isItemInWishlist && (
          <button
            className="remove-from-wishlist-heart-button"
            onClick={handleRemoveFromWishlist}
          >
            <i
              style={{
                margin: "0",
                fontSize: "16px",
                color: "rgb(61 61 61)",
              }}
              className="fa-solid fa-heart"
            ></i>
          </button>
        )}

        <Card.Body>
          <Link
            style={{ textDecoration: "none" }}
            to={`${props.path}/${props.id}`}
          >
            <Card.Title>{props.title}</Card.Title>
          </Link>
          <div>{props.price}</div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <LoginModal
        show={showLoginModal}
        onHide={handleLoginModalClose}
        title="Login is required"
        firstLine="Log in or create an account to add your favourite pieces to your Wishlist or to your Cart."
        secondLine="Plus, you can checkout faster and start collecting Pulse Active Points"
      />
    </>
  );
}
export default ShopCardItem;
