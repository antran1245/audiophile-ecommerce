import React from "react";
import { ProductInterface } from "../../interfaces/ProductInterface";
import file from "../../data/data.json";
import { DataInterface } from "../../interfaces/DataInterface";

interface Cart extends ProductInterface {
  cartQuantity: number;
}

interface ContextShop {
  data: DataInterface;
  cart: Cart[];
  addToCart(product: ProductInterface, quantity: number): void;
  removeFromCart(productID: number, quantity: number): void;
  removeAll(): void;
}

export default React.createContext<ContextShop>({
  data: file,
  cart: [],
  addToCart: (product: ProductInterface, quantity: number) => {},
  removeFromCart: (productID: number, quantity: number) => {},
  removeAll: () => {},
});
