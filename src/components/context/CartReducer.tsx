import { ProductInterface } from "../../interfaces/ProductInterface";

// enum on types of actions to use in the reducer
export enum ProductKind {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  REMOVE_ALL = "REMOVE_ALL",
}
// interface for the action
interface ProductAction {
  type: ProductKind;
  productID?: number;
  product?: ProductInterface;
  quantity?: number;
}
// interface for state
type ProductsState = {
  cart: [];
};

// Dispatch function to add to cart
const addToCart = (
  product: ProductInterface | undefined,
  state: any,
  quantity: number | undefined
) => {
  // Current Cart to updated
  const updatedCart = [...state.cart];
  if (product) {
    const productIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex < 0) {
      updatedCart.push({ ...product, cartQuantity: quantity });
    } else {
      const updateItem = { ...updatedCart[productIndex] };
      updateItem.cartQuantity += quantity;
      updatedCart[productIndex] = updateItem;
    }
  }
  return { ...state, cart: updatedCart };
};

// Dispatch function to remove from cart
const removeFromCart = (
  productID: number | undefined,
  state: any,
  quantity: number | undefined
) => {
  const updatedCart = [...state.cart];
  if (productID) {
    const removeIndex = updatedCart.findIndex((item) => item.id === productID);
    if (updatedCart[removeIndex].cartQuantity <= 1) {
      updatedCart.splice(removeIndex, 1);
    } else {
      const updateItem = { ...updatedCart[removeIndex] };
      updateItem.cartQuantity--;
      updatedCart[removeIndex] = updateItem;
    }
  }
  return { ...state, cart: updatedCart };
};

// Remove all from cart
const removeAll = () => {
  return { cart: [] };
};

export const CartReducer = (state: ProductsState, action: ProductAction) => {
  const { type, productID, product, quantity } = action;
  switch (type) {
    case ProductKind.ADD_PRODUCT:
      return addToCart(product, state, quantity);
    case ProductKind.REMOVE_PRODUCT:
      return removeFromCart(productID, state, quantity);
    case ProductKind.REMOVE_ALL:
      return removeAll();
    default:
      return state;
  }
};
