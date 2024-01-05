import React from "react";
import axios from "axios";

import "../css/Home.css";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { FeaturedWatches } from "./FeaturedWatches";
import { DownloadApp } from "./DownloadApp";
import { BestSellers } from "./BestSellers";
import { Footer } from "./Footer";

function Home(props) {
  console.log(props.products);
  return (
    <div className="wrapper">
      <Hero />
      <FeaturedWatches />
      <DownloadApp />
      <BestSellers />
    </div>
  );
}

export default Home;
