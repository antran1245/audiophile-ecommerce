import { ProductInterface } from "../../interfaces/ProductInterface";

// enum on types of actions to use in the reducer
export enum ProductKind {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
// interface for the action
interface ProductAction {
  type: ProductKind;
  productID?: number;
  product?: ProductInterface;
}
// interface for state
type ProductsState = {
  cart: [];
};

const addToCart = (product: ProductInterface | undefined, state: any) => {
  const updatedCart = [...state.cart];
  const productIndex = updatedCart.findIndex((item) => item.id === product?.id);
  if (productIndex <= 0) {
    updatedCart.push({ ...product, cartQuantity: 1 });
  } else {
    const updateItem = { ...updatedCart[productIndex] };
    updateItem.cartQuantity++;
    updatedCart[productIndex] = updateItem;
  }
  return { ...state, cart: updatedCart };
};

const removeFromCart = (productID: number | undefined, state: any) => {
  const updatedCart = [...state.cart];
  const removeItem = updatedCart.findIndex((item) => item.id === productID);
  updatedCart.splice(removeItem, 1);
  return { ...state, cart: updatedCart };
};

export const CartReducer = (state: ProductsState, action: ProductAction) => {
  const { type, productID, product } = action;
  switch (type) {
    case ProductKind.ADD_PRODUCT:
      return addToCart(product, state);
    case ProductKind.REMOVE_PRODUCT:
      return removeFromCart(productID, state);
    default:
      return state;
  }
};
