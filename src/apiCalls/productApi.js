import React, { useState, useEffect } from "react";
import axios from "axios";

export const getProducts = async () => {
  let response;

  try {
    response = await axios.get(
      "https://watch-shop-server.onrender.com/api/products"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async (id) => {
  let response;

  try {
    response = await axios.get(
      `https://watch-shop-server.onrender.com/api/products/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const checkout = async (cartItems) => {
  console.log(cartItems);
  let response;

  try {
    response = await axios
      .post("https://watch-shop-server.onrender.com/api/checkout", {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_KEY}`,
        },
        body: JSON.stringify({ items: cartItems }),
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        window.location.assign(response.url);
      });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addToCart = async (id) => {
  let response;

  try {
    response = await axios.post(
      `https://watch-shop-server.onrender.com/api/cart/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
