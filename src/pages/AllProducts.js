import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { getProducts } from "../apiCalls/productApi";
import { Navbar } from "../components/Navbar";
import "../css/AllProducts.css";

function AllProducts(props) {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setCollection(res);
    });
  }, []);

  return (
    <div>
      <div className="allProductsHero"></div>
      <div className="allProductsHeader">
        <h1>The Verve Collection</h1>
      </div>
      <div className="row container mainCollection">
        {collection.map((item, i) => {
          return (
            <div className="col-md-4 productCard" key={i}>
              <Link to={`/collection/${item._id}`}>
                <img
                  className="productImg"
                  src={`http://localhost:5000/images/${item.image}`}
                />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
