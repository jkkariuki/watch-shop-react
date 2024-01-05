import React, { useState, useEffect } from "react";
import axios from "axios";

export const getProducts = async () => {
  let response;

  try {
    response = await axios.get("http://localhost:5000/api/products");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async (id) => {
  let response;

  try {
    response = await axios.get(`http://localhost:5000/api/products/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
