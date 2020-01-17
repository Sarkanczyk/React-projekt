import React from "react";
import ProductsService from "../services/products.service";

const products = ProductsService.getProducts();

const FeaturedItems = props => {
  return (
    <div class="products">
      {products.map(e => {
        if (e.featured && e.category === props.element) {
          return (
            <div class="product">
              <img src={e.image} alt={e.name} />
              <p class="price">{e.amount}</p>
              <h3>{e.name}></h3>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FeaturedItems;
