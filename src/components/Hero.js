import React from "react";
import heroImg2 from "../pages/imgs/heroImg2.png";
export const Hero = () => {
  return (
    <div>
      <div className="row container hero">
        <div className="col-lg-6">
          <h1 className="tagLine">Time Redefined, Style Redesigned</h1>
        </div>
        <div className="col-lg-6">
          <img className="heroImg" src={heroImg2} alt="hero" />
        </div>
      </div>
    </div>
  );
};
