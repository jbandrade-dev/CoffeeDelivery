"use client";

import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  handleDecrementQuantityAction,
  handleIncrementQuantityAction,
  handleNewProductAction,
  handleRemoveProductAction,
  resetCoffeeContextAction,
  setNewOrderDataAction,
} from "../reducers/orders/actions";
import { CartProductsProps, OrderReducer } from "../reducers/orders/reducers";
import * as z from "zod";

export const newOrderFormValidationSchema = z.object({
  cep: z.number(),
  rua: z.string().min(1),
  numero: z.string().min(1),
  complemento: z.number().optional(),
  bairro: z.string().min(1),
  cidade: z.string().min(1),
  uf: z.string(),
  paymentMethod: z.enum(["credit", "debit", "cash"]),
  cartProducts: z.array(
    z.object({
      id: z.number(),
      quantity: z.number(),
    })
  ),
});

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>;

interface CoffeeContextType {
  cartProducts: CartProductsProps[];
  newOrderData?: NewOrderFormData;
  handleNewProduct: (CartProductsProps: CartProductsProps) => void;
  handleIncrementQuantity: (CartProductsPropsId: string) => void;
  handleDecrementQuantity: (CartProductsPropsId: string) => void;
  handleRemoveProduct: (CartProductsPropsId: string) => void;
  handleSetCartLocalStorage: (value: CartProductsProps[]) => void;
  setNewOrderData: (info: NewOrderFormData) => void;
  resetCoffeeContext: () => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [state, dispatch] = useReducer(
    OrderReducer,
    { cartProducts: [], newOrderData: undefined },
    (initialState) => {
      if (typeof window !== "undefined") {
        const storedCartProducts = localStorage.getItem("cartProducts");
        const storedNewOrderData = localStorage.getItem("newOrderData");
        try {
          return {
            ...initialState,
            cartProducts: storedCartProducts
              ? JSON.parse(storedCartProducts)
              : [],
            newOrderData: storedNewOrderData!
              ? JSON.parse(storedNewOrderData)
              : null,
          };
        } catch (error) {
          console.error(error);
          return initialState;
        }
      }
      return initialState;
    }
  );

  const { cartProducts, newOrderData } = state;

  const setCartLocalStorage = (
    key: string,
    value: CartProductsProps[]
  ): void => {
    const storedCartProducts = JSON.stringify(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, storedCartProducts);
    }
  };

  function handleSetCartLocalStorage(value: CartProductsProps[]) {
    setCartLocalStorage("cartProducts", value);
  }

  const setOrderLocalStorage = (key: string, value: NewOrderFormData): void => {
    const storedCartProducts = JSON.stringify(value);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, storedCartProducts);
    }
  };

  function handleSetOrderLocalStorage(value: NewOrderFormData) {
    setOrderLocalStorage("newOrderData", value);
  }

  function handleNewProduct(item: CartProductsProps) {
    dispatch(handleNewProductAction(item));
  }

  function handleIncrementQuantity(CartProductsPropsId: string) {
    dispatch(handleIncrementQuantityAction(CartProductsPropsId));
  }

  function handleDecrementQuantity(CartProductsPropsId: string) {
    dispatch(handleDecrementQuantityAction(CartProductsPropsId));
  }

  function handleRemoveProduct(CartProductsPropsId: string) {
    dispatch(handleRemoveProductAction(CartProductsPropsId));
  }

  function setNewOrderData(info: NewOrderFormData) {
    dispatch(setNewOrderDataAction(info));
    handleSetOrderLocalStorage(newOrderData!);
  }

  function resetCoffeeContext() {
    dispatch(resetCoffeeContextAction());
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartProducts,
        newOrderData,
        handleNewProduct,
        handleIncrementQuantity,
        handleDecrementQuantity,
        handleRemoveProduct,
        handleSetCartLocalStorage,
        setNewOrderData,
        resetCoffeeContext,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
