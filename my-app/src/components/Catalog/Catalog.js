import React from "react";
import HeadOne from "../HeadOne";
import Search from "./Search";

const CatalogPage = () => {
  return (
    <div class="container">
      <HeadOne title="Catalog" />
      <div class="catalog">
        <Search />
      </div>
    </div>
  );
};

export default CatalogPage;
