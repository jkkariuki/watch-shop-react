import React, { useEffect, useState } from "react";
import "../css/ProductPg.css";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { getProductById } from "../apiCalls/productApi";

function ProductPage(props) {
  const productId = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [img, setImg] = useState("");
  const [showFeatures, setShowFeatures] = useState(false);
  const [gridRule, setGridRule] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  const transitionProps = startAnimation ? { marginLeft: "0px" } : {};

  useEffect(() => {
    getProductById(productId.id)
      .then((product) => {
        setSingleProduct(product);
        console.log(singleProduct);
        // setProductDescription(product.description);
        // setProductName(product.name);
        // setProductPrice(product.price);
        // setImg(product.image);
        // console.log(JSON.stringify(product.image));
        // console.log(img);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleShowFeatures = () => {
  //   setShowFeatures(!showFeatures);
  //   // setGridRule(showFeatures ? "col-lg-5 offset-lg-3" : "col-lg-5");
  // };

  return (
    <div>
      <div className="row container productPgContainer justify-content-center">
        {/* {showFeatures ? ( */}

        {/* ) : ( */}
        {/* <div className="col-lg-3"></div>
        )} */}
        {/* "col-lg-5 offset-lg-3" */}
        <div className="col-lg-6 offset-lg-2">
          <img
            className="prdImg"
            src={`http://localhost:5000/images/${singleProduct.image}`}
          />
        </div>

        <div className="col-lg-4 namePriceDiv">
          <h3>{singleProduct.name}</h3>
          <h4>${singleProduct.price}</h4>
          <p className="description">30% Off Use Code: GIFT30</p>
          <p className="productDesc">{singleProduct.description}</p>
          <button type="button" className="btn btn-dark btn-lg addCartBtn">
            Add to Cart <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => setStartAnimation(!startAnimation)}
            // onClick={handleShowFeatures}
          >
            Features
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
