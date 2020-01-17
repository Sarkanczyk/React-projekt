import React, { useContext } from "react";
import ProductsService from "../services/products.service";
import ManuContext from "./ManuContext";
import NameContext from "./NameContext";

const products = ProductsService.getProducts();

const ManuItems = () => {
  const manu = useContext(ManuContext);
  const name = useContext(NameContext);
  return (
    <div class="column-right">
      <div class="products">
        {products.map(e => {
          if (manu === "all") {
            if (name === "") {
              return (
                <div class="product">
                  <img src={e.image} alt={e.name} />
                  <p class="price">{e.amount}</p>
                  <h3>{e.name}></h3>
                </div>
              );
            } else if (e.name.indexOf(`${name}`) !== -1) {
              return (
                <div class="product">
                  <img src={e.image} alt={e.name} />
                  <p class="price">{e.amount}</p>
                  <h3>{e.name}></h3>
                </div>
              );
            }
          } else if (e.manufacture === manu) {
            if (name === "") {
              return (
                <div class="product">
                  <img src={e.image} alt={e.name} />
                  <p class="price">{e.amount}</p>
                  <h3>{e.name}></h3>
                </div>
              );
            } else if (e.name.indexOf(`${name}`) !== -1) {
              return (
                <div class="product">
                  <img src={e.image} alt={e.name} />
                  <p class="price">{e.amount}</p>
                  <h3>{e.name}></h3>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default ManuItems;
