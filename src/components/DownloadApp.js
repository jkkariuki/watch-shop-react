import React from "react";

export const DownloadApp = () => {
  return (
    <div className="row container appDiv">
      <h1 className="appSection downloadHeader">
        Keep Track of your Health and Wellness
      </h1>

      <div className="col-lg-7  ">
        <p className="downloadText">
          Download the VerveWatch mobile app to get started!
        </p>
        <img
          className="appStoreImg"
          src={require("../pages/imgs/google-play-badge.png")}
          alt="appStore"
        />
      </div>
      <div className=" phoneDiv col-lg-5">
        <img
          className="phoneImg"
          src={require("../pages/imgs/phoneImgNoBkg.png")}
          alt="phone"
        />
      </div>
    </div>
  );
};
