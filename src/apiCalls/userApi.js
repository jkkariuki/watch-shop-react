import React, { useState, useEffect } from "react";
import axios from "axios";

export const getUser = async () => {
  let response;

  try {
    response = await axios.get(
      "https://watch-shop-server.onrender.com/api/users"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMe = async () => {
  let response;

  try {
    response = await axios.get(
      `https://watch-shop-server.onrender.com/api/users/me`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
