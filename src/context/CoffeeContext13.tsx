"use client";

import { ReactNode, createContext, useState, useEffect } from "react";
import * as z from "zod";

export const newOrderFormValidationSchema = z.object({
  address: z.object({
    cep: z.number().min(1, "CEP"),
    rua: z.string().min(1, "Rua"),
    numero: z.number().min(1, "Número"),
    complemento: z.number().optional(),
    bairro: z.string().min(1, "Bairro"),
    cidade: z.string().min(1, "Cidade"),
    uf: z.string().min(1, "Uf"),
  }),
  paymentMethod: z.enum(["credito", "debito", "dinheiro"]),
  cartProducts: z.array(
    z.object({
      id: z.number(),
      quantity: z.number(),
    })
  ),
});

export interface CreateNewOrderData {
  address: {
    cep: number;
    rua: string;
    numero: number;
    complemento?: number;
    bairro: string;
    cidade: string;
    uf: string;
  };
  paymentMethod: "credito" | "debito" | "dinheiro";
}

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>;

export interface Product {
  id: number;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  badges: string[];
}

export interface NewProduct extends Product {
  quantity: number;
}

interface CoffeeContextType {
  cartProducts: NewProduct[];
  totalQuantity: number;
  subtotal: string;
  deliveryPrice: string;
  totalPrice: string;
  newOrder: NewOrderFormData | null;
  handleSetLocalStorage: (value: NewProduct[]) => void;
  setCartProducts: (cartProducts: NewProduct[]) => void;
  createNewOrder: (orderData: NewOrderFormData) => void;
  handleUpdateProductQuantity: (productId: number, newQuantity: number) => void;
  handleNewProduct: (coffeeData: NewProduct) => void;
  handleRemoveProduct: (productId: number) => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext13 = createContext({} as CoffeeContextType);

export function CoffeeContextProvider13({
  children,
}: CoffeeContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<NewProduct[]>(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    return storedCartProducts ? JSON.parse(storedCartProducts) : [];
  });

  const [newOrder, setNewOrder] = useState<NewOrderFormData | null>(() => {
    if (typeof window !== "undefined") {
      const storedNewOrder = localStorage.getItem("newOrder");
      return storedNewOrder ? JSON.parse(storedNewOrder) : null;
    }
    return null;
  });

  const setLocalStorage = (key: string, value: NewProduct[]): void => {
    const storedValue = JSON.stringify(value);
    window.localStorage.setItem(key, storedValue);
  };

  function handleSetLocalStorage(value: NewProduct[]) {
    setLocalStorage("cartProducts", value);
  }

  // useEffect(() => {
  //   const storedCartProducts = localStorage.getItem("cartProducts");
  //   if (storedCartProducts) {
  //     setCartProducts(JSON.parse(storedCartProducts));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  // }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("newOrder", JSON.stringify(newOrder));
  }, [newOrder]);

  useEffect(() => {
    const storedNewOrder = localStorage.getItem("newOrder");
    if (storedNewOrder) {
      setNewOrder(JSON.parse(storedNewOrder));
    }
  }, []);

  useEffect(() => {
    setCartProducts([]);
  }, [newOrder]);

  function handleNewProduct(coffeeData: NewProduct) {
    const existingProductIndex = cartProducts.findIndex(
      (product) => product.id === coffeeData.id
    );

    if (existingProductIndex >= 0) {
      const updatedProducts = [...cartProducts];
      updatedProducts[existingProductIndex].quantity += coffeeData.quantity;
      setCartProducts(updatedProducts);
      handleSetLocalStorage(updatedProducts);
    } else {
      const newCoffee = { ...coffeeData };
      const updatedProducts = [...cartProducts, newCoffee];
      setCartProducts(updatedProducts);
      handleSetLocalStorage(updatedProducts);
    }
  }

  function handleRemoveProduct(productId: number) {
    const updatedProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedProducts);
  }

  function getTotalQuantity() {
    return cartProducts?.reduce((acc, product) => acc + product.quantity, 0);
  }

  const totalQuantity = getTotalQuantity();

  const handleUpdateProductQuantity = (
    productId: number,
    newQuantity: number
  ) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const subtotal = cartProducts?.reduce((acc, coffee) => {
    const coffeePrice = coffee.price * coffee.quantity;
    return acc + coffeePrice;
  }, 0);

  const deliveryPrice = 3;

  const totalPrice = subtotal + deliveryPrice;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const subtotalFormatted = formatCurrency(subtotal);
  const deliveryPriceFormatted = formatCurrency(deliveryPrice);
  const totalPriceFormatted = formatCurrency(totalPrice);

  function createNewOrder(formData: NewOrderFormData) {
    const newOrder = { ...formData };
    setNewOrder(newOrder);

    location.href = "/success/";
  }
  console.log(newOrder);

  return (
    <CoffeeContext13.Provider
      value={{
        cartProducts,
        totalQuantity,
        newOrder,
        createNewOrder,
        handleSetLocalStorage,
        handleNewProduct,
        handleRemoveProduct,
        handleUpdateProductQuantity,
        subtotal: subtotalFormatted,
        deliveryPrice: deliveryPriceFormatted,
        totalPrice: totalPriceFormatted,
        setCartProducts,
      }}
    >
      {children}
    </CoffeeContext13.Provider>
  );
}
