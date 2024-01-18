import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LeggingsPage from "./pages/LeggingsPage.js";
import LoyaltyClub from "./pages/LoyaltyClub.js";
import AboutUs from "./pages/AboutUs";
import AccessoriesPage from "./pages/AccessoriesPage.js";
import BrasPage from "./pages/BrasPage.js";
import SupplementsPage from "./pages/Supplements.js";
import Login from "./pages/Login.js";
import Shop from "./pages/Shop.js";
import ItemLeggings from "./pages/ItemLeggings.js";
import ItemBra from "./pages/ItemBra.js";
import ItemAccessories from "./pages/ItemAccessories.js";
import ItemSupplements from "./pages/ItemSupplements.js";
import Cart from "./pages/Cart.js";
import WishlistPage from "./pages/WishlistPage.js";
import Signup from "./pages/Signup.js";
import AccountPage from "./pages/AccountPage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchModal from "./components/SearchModal.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/leggings" element={<LeggingsPage />} />
        <Route path="/loyalty_club" element={<LoyaltyClub />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/bras" element={<BrasPage />} />
        <Route path="/supplements" element={<SupplementsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/leggings/:id" element={<ItemLeggings />} />
        <Route path="/bras/:id" element={<ItemBra />} />
        <Route path="/accessories/:id" element={<ItemAccessories />} />
        <Route path="/supplements/:id" element={<ItemSupplements />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/search" element={<SearchModal />} />
      </Routes>
    </Router>
  );
}

export default App;
