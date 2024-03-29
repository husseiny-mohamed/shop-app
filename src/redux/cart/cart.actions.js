import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const deleteCartItem = (item) => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
