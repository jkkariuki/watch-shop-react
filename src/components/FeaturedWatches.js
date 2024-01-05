import React from "react";
import smartWatch1 from "../pages/imgs/smartWatch1.png";
import smartWatch2 from "../pages/imgs/smartWatch2.png";
import smartWatch3 from "../pages/imgs/smartWatch3.png";

export const FeaturedWatches = () => {
  return (
    <div className="container featuredWatches">
      <h1 className="featuredHeader">VerveWatch Featured Watches</h1>
      <div class="row featuredRow">
        <div className="col-lg-3 featured">
          <img src={smartWatch1} alt="Snow" />
        </div>
        <div className="col-lg-3 featured">
          <img src={smartWatch2} alt="Forest" />
        </div>
        <div className="col-lg-3 featured">
          <img src={smartWatch3} alt="Mountains" />
        </div>
        <div className="col-lg-3 featured">
          <img src={smartWatch3} alt="Mountains" />
        </div>
        =
      </div>
    </div>
  );
};
