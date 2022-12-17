import React from "react";
import { ProductInterface } from "../../interfaces/ProductInterface";
import file from "../../data/data.json";

export default React.createContext({
  data: file,
  cart: [],
  addToCart: (product: ProductInterface) => {},
  removeFromCart: (productID: number) => {},
});
