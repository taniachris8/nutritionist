import axios from "axios";

export class ShopService {
  baseurl;

  constructor(serviceUrl) {
    this.baseurl = serviceUrl;
  }

  getAllLeggings = async () => {
    return await axios.get(`${this.baseurl}/leggings`);
  };

  getAllAccessories = async () => {
    return await axios.get(`${this.baseurl}/accessories`);
  };

  getAllBras = async () => {
    return await axios.get(`${this.baseurl}/bras`);
  };

  getAllSupplements = async () => {
    return await axios.get(`${this.baseurl}/supplements`);
  };

  getCartItems = async () => {
    return await axios.get(`${this.baseurl}/cart`);
  };

  addToCartDb(item) {
    return axios.post(`${this.baseurl}/cart`, item);
  }

  updateCartDb(item) {
    return axios.put(`${this.baseurl}/cart/${item.id}`, item);
  }
  deleteCartItem(itemId) {
    return axios.delete(`${this.baseurl}/cart/${itemId}`);
  }

  getWishlistItems = async () => {
    try {
      const response = await axios.get(`${this.baseurl}/wishlist`);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
      return [];
    }
  };

  addToWishlistDb(item) {
    return axios.post(`${this.baseurl}/wishlist`, item);
  }

  updateWishlistDb(item) {
    return axios.put(`${this.baseurl}/wishlist/${item.id}`, item);
  }
  deleteWishlistItem(itemId) {
    return axios.delete(`${this.baseurl}/wishlist/${itemId}`);
  }
}
