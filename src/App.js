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

axios.defaults.withCredentials = true;

function App() {
  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/collection/:id"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/collection"
            element={<AllProducts products={products} />}
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
