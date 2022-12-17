import React, { ReactNode, useReducer } from "react";
import file from "../../data/data.json";
import ShopContext from "./ShopContext";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { CartReducer, ProductKind } from "./CartReducer";

const initialState = {
  cart: [],
};
export default function DataContext({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product: ProductInterface) => {
    setTimeout(() => {
      dispatch({ type: ProductKind.ADD_PRODUCT, product: product });
    }, 700);
  };
  const removeFromCart = (productID: number) => {
    setTimeout(() => {
      dispatch({ type: ProductKind.REMOVE_PRODUCT, productID: productID });
    }, 700);
  };
  return (
    <ShopContext.Provider
      value={{
        data: file,
        cart: cartState.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
