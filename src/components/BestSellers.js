import React from "react";

export const BestSellers = () => {
  return (
    <div>
      <div className="row container blogContainer">
        <div className="col-lg-6 mensBest bestSellers">
          {/* <img
            className=""
            src={require("../imgs/youngGuywatch.png")}
            alt="blog"
          /> */}
          <h1 className="bestSellerText">Men's Best Sellers</h1>
        </div>
        <div className="col-lg-6 womensBest bestSellers">
          {/* <img
            className=""
            src={require("../imgs/youngLadywatch.png")}
            alt="blog"
          /> */}
          <h1 className="bestSellerText">Women's Best Sellers</h1>
        </div>
      </div>
    </div>
  );
};
