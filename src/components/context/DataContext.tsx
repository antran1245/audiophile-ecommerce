import React, { ReactNode, useReducer } from "react";
import file from "../../data/data.json";
import ShopContext from "./ShopContext";
import { ProductInterface } from "../../interfaces/ProductInterface";
import { CartReducer, ProductKind } from "./CartReducer";

export default function DataContext({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(CartReducer, { cart: [] }, () => {
    let localData = localStorage.getItem("cart");
    return { cart: localData ? localData : [] };
  });

  // adding # amount of the selected product (a json array object) to the cart
  const addToCart = (product: ProductInterface, quantity: number) => {
    setTimeout(() => {
      // Interact with CartReducer.tsx ProductAction interface
      dispatch({
        type: ProductKind.ADD_PRODUCT,
        product: product,
        quantity: quantity,
      });
    }, 700);
  };

  // removing # or all the selected product (a json array object) from the cart
  const removeFromCart = (productID: number, quantity: number) => {
    setTimeout(() => {
      // Interact with CartReducer.tsx ProductAction interface
      dispatch({
        type: ProductKind.REMOVE_PRODUCT,
        productID: productID,
        quantity: quantity,
      });
    }, 200);
  };

  const removeAll = () => {
    setTimeout(() => {
      dispatch({
        type: ProductKind.REMOVE_ALL,
      });
    }, 200);
  };
  return (
    // pass the value to other components for access
    <ShopContext.Provider
      value={{
        data: file, // json file
        cart: cartState.cart, //the initial cart to be updated
        addToCart: addToCart, //reference with the function above.
        removeFromCart: removeFromCart, //reference with the function above.
        removeAll: removeAll,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
