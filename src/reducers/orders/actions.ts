/* eslint-disable no-unused-vars */

import { CartProductsProps } from "./reducers";
import { NewOrderFormData } from "../../context/CoffeeContext";

export enum Actions {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM = "INCREMENT_ITEM",
  DECREMENT_ITEM = "DECREMENT_ITEM",
  SET_ORDER_DATA = "SET_ORDER_DATA",
  RESET_DATA = "RESET_DATA",
}

export function handleNewProductAction(cartItem: CartProductsProps) {
  return {
    type: Actions.ADD_ITEM,
    payload: cartItem,
  };
}

export function handleRemoveProductAction(cartItemId: string) {
  return {
    type: Actions.REMOVE_ITEM,
    payload: cartItemId,
  };
}

export function handleIncrementQuantityAction(cartItemId: string) {
  return {
    type: Actions.INCREMENT_ITEM,
    payload: cartItemId,
  };
}

export function handleDecrementQuantityAction(cartItemId: string) {
  return {
    type: Actions.DECREMENT_ITEM,
    payload: cartItemId,
  };
}

export function setNewOrderDataAction(info: NewOrderFormData) {
  return {
    type: Actions.SET_ORDER_DATA,
    payload: info,
  };
}

export function resetCoffeeContextAction() {
  return {
    type: Actions.RESET_DATA,
  };
}
