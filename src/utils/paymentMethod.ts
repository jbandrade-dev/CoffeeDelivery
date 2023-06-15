import { ReactNode } from "react";

export type paymentMethodType = "credit" | "debit" | "cash";

interface paymentMethodDataProps {
  text: string;
  method: paymentMethodType;
}

export const paymentMethodData = [
  {
    text: "Cartão de crédito",
    method: "credit",
  },
  {
    text: "Cartão de débito",
    method: "debit",
  },
  {
    text: "Dinheiro",
    method: "cash",
  },
] as paymentMethodDataProps[];
