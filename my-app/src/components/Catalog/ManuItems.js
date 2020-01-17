import React, { useContext } from "react";
import ProductsService from "../services/products.service";
import ManuContext from "./ManuContext";

const products = ProductsService.getProducts();

const ManuItems = () => {
  const manu = useContext(ManuContext);
  return (
    <div class="column-right">
      <div class="products">
        {products.map(e => {
          if (manu === "all") {
            return (
              <div class="product">
                <img src={e.image} alt={e.name} />
                <p class="price">{e.amount}</p>
                <h3>{e.name}></h3>
              </div>
            );
          } else if (
            e.manufacture === manu ||
            e.name.indexOf(`${manu}`) !== -1
          ) {
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
    </div>
  );
};

export default ManuItems;
