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
  setCartProducts: (cartProducts: NewProduct[]) => void;
  createNewOrder: (orderData: NewOrderFormData) => void;
  handleUpdateProductQuantity: (productId: number, newQuantity: number) => void;
  handleNewProduct: (coffeeData: NewProduct) => void;
  handleRemoveProduct: (productId: number) => void;
}

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<NewProduct[]>([]);
  const [newOrder, setNewOrder] = useState<NewOrderFormData | null>(() => {
    const storedNewOrder = localStorage.getItem("newOrder");
    return storedNewOrder ? JSON.parse(storedNewOrder) : null;
  });

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("newOrder", JSON.stringify(newOrder));
  }, [newOrder]);

  useEffect(() => {
    const storedNewOrder = localStorage.getItem("newOrder");
    if (storedNewOrder) {
      setNewOrder(JSON.parse(storedNewOrder));
    }
  }, []);

  function handleNewProduct(coffeeData: NewProduct) {
    const existingProductIndex = cartProducts.findIndex(
      (product) => product.id === coffeeData.id
    );

    if (existingProductIndex >= 0) {
      const updatedProducts = [...cartProducts];
      updatedProducts[existingProductIndex].quantity += coffeeData.quantity;
      setCartProducts(updatedProducts);
    } else {
      const newCoffee = { ...coffeeData };
      setCartProducts([...cartProducts, newCoffee]);
    }
  }

  function handleRemoveProduct(productId: number) {
    const updatedProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedProducts);
  }

  function getTotalQuantity() {
    let totalQuantity = 0;
    cartProducts.forEach((product) => {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  }

  const totalQuantity = getTotalQuantity();

  function handleUpdateProductQuantity(productId: number, newQuantity: number) {
    const updatedProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCartProducts(updatedProducts);
  }

  const subtotal = cartProducts.reduce((acc, coffee) => {
    const coffeePrice = coffee.price * coffee.quantity;
    return acc + coffeePrice;
  }, 0);

  const deliveryPrice = 3;

  const totalPrice = subtotal + deliveryPrice;

  const subtotalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(subtotal);

  const deliveryPriceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(deliveryPrice);

  const totalPriceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  function createNewOrder(orderData: NewOrderFormData) {
    const newOrder = { ...orderData };
    setNewOrder(newOrder);

    location.href = "/success/";
  }
  console.log(newOrder);
  return (
    <CoffeeContext.Provider
      value={{
        cartProducts,
        totalQuantity,
        newOrder,
        createNewOrder,
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
    </CoffeeContext.Provider>
  );
}
