import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "./css/Item.css";
import SizeSelector from "../components/SizeSelector";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import YouMightLike from "../components/YouMightLike";
import { useCart } from "../contexts/CartContext";
import { Alert } from "react-bootstrap";
import { useWishlist } from "../contexts/WishlistContext";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import LoginModal from "../components/LoginModal";
import ItemImageMobile from "../components/ItemImageMobile";

function ItemBra() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart, cart } = useCart();
  const [errorMessage, setErrorMessage] = useState(null);
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [isItemInWishlist, setIsItemInWishlist] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [slides, setSlides] = useState([]); // Initialize slides state
  const [isMobileDevice, setIsMobileDevice] = useState(
    window.innerWidth <= 430
  );

  useEffect(() => {
    // Fetch item details from your API or JSON server
    axios
      .get(`http://localhost:8080/bras/${id}`)
      .then((response) => {
        setItem(response.data);
        setIsItemInWishlist(wishlist.some((w) => w.id === response.data.id));
        //Set slides based on item and mobile device status
        const newSlides = [
          { url: `/images/${response.data.imageLeft}` },
          { url: `/images/${response.data.imageRight}` },
          { url: `/images/${response.data.imageBottom1}` },
          { url: `/images/${response.data.imageBottom2}` },
          { url: `/images/${response.data.imageBottom3}` },
        ];
        setSlides(newSlides);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id, wishlist]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setErrorMessage(null);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      if (user) {
        // User is logged in
        const cartItemId = `${item.id}-${selectedSize}`;
        const existingCartItem = cart.find((item) => item.id === cartItemId);

        if (existingCartItem) {
          addToCart({ ...existingCartItem, count: existingCartItem.count + 1 });
        } else {
          const cartItem = {
            id: cartItemId,
            image: item.imageFile,
            title: item.title,
            price: item.price,
            size: selectedSize,
            count: item.count,
            userId: user.id,
            path: item.path,
            // Add other necessary properties
          };

          addToCart(cartItem);
        }

        handleShowModal(); // Show success modal
      } else {
        // User is not logged in
        setShowLoginModal(true); // Show login modal
      }
    } else {
      setErrorMessage("Please select a size before adding to the cart.");
    }
  };

  const handleAddToWishlist = () => {
    if (!user) {
      // If the user is not logged in, show the LoginModal
      setShowLoginModal(true);
    } else {
      // If the user is logged in, add the item to the wishlist
      const wishlistItem = {
        id: item.id,
        image: item.imageFile,
        title: item.title,
        price: item.price,
        path: item.path,
        userId: user.id,
        // Add other necessary properties
      };

      setIsItemInWishlist(true);
      addToWishlist(wishlistItem);
    }
  };

  const handleRemoveFromWishlist = () => {
    setIsItemInWishlist(false);
    removeFromWishlist(item.id);
  };

  //Handling Added to Cart Popup Modal:

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  //Handling LoginModal
  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  if (!item) {
    return (
      <div className="spinner">
        <i class="fa-solid fa-spinner"></i>
      </div>
    );
  }

  return (
    <>
      <div className="item-container">
        {isMobileDevice ? (
          <div className="item-slides-styles">
            <ItemImageMobile slides={slides} />
          </div>
        ) : (
          <div className="image-container">
            <div className="top-images">
              <div className="top-photo">
                <img src={`/images/${item.imageLeft}`} alt="Left Leggings" />
              </div>
              <div className="top-photo">
                <img src={`/images/${item.imageRight}`} alt="Left Leggings" />
              </div>
            </div>
            <div className="bottom-images">
              <div className="bottom-photo">
                <img
                  style={{ objectFit: "cover" }}
                  src={`/images/${item.imageBottom1}`}
                  alt="Bottom Leggings 1"
                />
              </div>
              <div className="bottom-photo">
                <img
                  style={{ objectFit: "cover" }}
                  src={`/images/${item.imageBottom2}`}
                  alt="Bottom Leggings 2"
                />
              </div>
              <div className="bottom-photo">
                <img
                  style={{ objectFit: "cover" }}
                  src={`/images/${item.imageBottom3}`}
                  alt="Bottom Leggings 3"
                />
              </div>
            </div>
          </div>
        )}
        <div className="left-container">
          <h2>{item.title}</h2>
          <p>{item.shortDescription}</p>
          <p>{item.price}</p>
          <SizeSelector
            sizes={["XS", "S", "M", "L", "XL", "XXL"]}
            onSelectSize={handleSizeSelect}
          />
          <div className="details">
            <h1 className="description-title">DESCRIPTION</h1>
            <p>{item.description}</p>
            <h1 className="description-title">SIZE & FIT</h1>
            <p>{item.sizeAndFit}</p>
            <h1 className="description-title">MATERIALS & CARE</h1>
            <p>{item.materialAndCare}</p>
          </div>
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
          <Button
            style={{ marginTop: "20px" }}
            className="item-button"
            variant="primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
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
                  src={`../images/${item.imageFile}`}
                  alt={item.title}
                  style={{ maxWidth: "130px" }}
                />
                <div className="modal-item-details">
                  <div>{item.title}</div>
                  <div>{item.price}</div>
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
            <Button
              className="add-to-wishlist-button"
              variant="light"
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </Button>
          )}
          {isItemInWishlist && (
            <Button
              className="remove-from-wishlist-button"
              variant="secondary"
              onClick={handleRemoveFromWishlist}
            >
              Remove from Wishlist
            </Button>
          )}
        </div>
      </div>
      <LoginModal
        show={showLoginModal}
        onHide={handleLoginModalClose}
        title="Login is required"
        firstLine="Log in or create an account to add your favourite pieces to your Wishlist or to your Cart."
        secondLine="Plus, you can checkout faster and start collecting Pulse Active Points"
      />
      <YouMightLike />
      <Footer />
    </>
  );
}
export default ItemBra;
