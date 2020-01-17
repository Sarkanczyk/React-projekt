import React from "react";
import HeadOne from "../HeadOne";
import HeadTwo from "../HeadTwo";
import FeaturedItems from "./FeaturedItems";

const IndexPage = () => {
  return (
    <div class="container">
      <HeadOne title="Welcome to our store" />
      <HeadTwo title="Desktops" />
      <FeaturedItems element="desktop" />
      <HeadTwo title="Tablets" />
      <FeaturedItems element="tablet" />
    </div>
  );
};

export default IndexPage;
