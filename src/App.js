import React from "react";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import ProductPage from "./pages/ProductPage";
import { AddProducts } from "./pages/AddProducts";
import AllProducts from "./pages/AllProducts";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import axios from "axios";

import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import Cart from "./pages/Cart";
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);

axios.defaults.withCredentials = true;

function App() {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    console.log(cartItems);
    const jsonCart = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", jsonCart);

    const getProducts = async () => {
      let response;
      try {
        response = await axios.get(
          "https://watch-shop-server.onrender.com/api/products"
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [cartItems]);

  function onAdd(product) {
    console.log(product);
    const exist = cartItems.find((item) => item._id === product._id);

    if (exist) {
      //if the added products exists in the cart increase the quantity by one.
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      //if the added product is not in cart, add it to cart and set qty to 1
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  function onRemove(product) {
    const exist = cartItems.find((item) => item._id === product._id);

    if (exist.qty === 1) {
      //if the cart qty of the removed product is equal to 1. Return all cartItem besides the deleted product.

      setCartItems(cartItems.filter((item) => item._id != product._id));
    } else {
      //if the cart qty of the removed product is greater than 1. Decrease the cart qty of the product by 1.
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  }

  function onDelete(product) {
    const exist = cartItems.find((item) => item._id === product._id);

    if (exist) {
      //find the cart item and delete it from the cart regardless of qty. Return all other products
      setCartItems(cartItems.filter((item) => item._id != product._id));
    }
  }

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/collection/:id"
            element={<ProductPage products={products} onAdd={onAdd} />}
          />
          <Route
            path="/collection"
            element={<AllProducts products={products} onAdd={onAdd} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                products={products}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                cartItems={cartItems}
              />
            }
          />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
