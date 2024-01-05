import React, { useState, useEffect } from "react";
import axios from "axios";

export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState();

  const types = ["image/png", "image/jpeg"];
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const getMe = async () => {
      let response;
      try {
        response = await axios.get(
          "https://watch-shop-server.onrender.com/api/users/me"
        );
        console.log(response.data);

        setAuthenticated(response.data);
        if (!response.data) {
          window.location.href = "/login";
        }
        console.log();
      } catch (error) {
        console.log(error);
      }
    };

    getMe();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("description", productDescription);
    console.log(formData);

    const result = await axios.post(
      "https://watch-shop-server.onrender.com/api/products/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div className="container">
      <br />
      <h2>Add Products</h2>
      <hr />
      <form
        action="/addproduct"
        method="post"
        className="form-group"
        onSubmit={submitImage}
        role="form"
        encType="multipart/form-data"
      >
        <label htmlFor="product-name"> Product Name</label>
        <br />
        <input
          type="text"
          className="form-control"
          id="product-name"
          placeholder="Enter Product Name"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor="product-price"> Product Price</label>
        <input
          type="number"
          className="form-control"
          id="product-price"
          placeholder="Enter Product Price"
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-description"> Product Description</label>
        <textarea
          type="number"
          className="form-control"
          id="product-description"
          placeholder="Enter Product Description"
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
        />
        <br />
        <label htmlFor="product-img"> Product Image</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          id="file"
          name="image"
          onChange={onInputChange}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          Add Product
        </button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};
