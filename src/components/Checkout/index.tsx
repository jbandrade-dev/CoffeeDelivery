"use client";
import React, { FormEvent, useContext } from "react";
import { CoffeeContext, CreateNewOrderData } from "@/context/CoffeeContext";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Address } from "./Address";

import { Cart } from "./Cart";

import {
  NewOrderFormData,
  newOrderFormValidationSchema,
} from "@/context/CoffeeContext";
import { PaymentMethod } from "./PaymentMethods";

export function Checkout() {
  const { createNewOrder, cartProducts } = useContext(CoffeeContext);
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const { handleSubmit, watch } = newOrderForm;

  function handleSubmitOrder(event: FormEvent) {
    event.preventDefault();
    const formData = watch();
    const { address, paymentMethod } = formData;

    createNewOrder({
      address,
      paymentMethod,
      cartProducts,
    });
  }

  return (
    <main>
      <FormProvider {...newOrderForm}>
        <form
          autoComplete="off"
          className="flex my-10 max-w-[1120px] w-full mx-auto"
          onSubmit={handleSubmitOrder}
        >
          <div className="grid gap-3 max-w-[40rem]">
            <h3 className="text-lg font-bold mb-1 ml-1">Complete seu pedido</h3>
            <Address />
            <PaymentMethod />
          </div>

          <div className="pl-8 w-full">
            <h3 className="text-lg font-bold mb-4 ml-1">Cafés selecionados</h3>
            <div className="grid p-10 bg-base-card rounded-tr-[44px] rounded-bl-[44px] rounded-md">
              <Cart />
              <button
                className="flex w-full mt-6 items-center justify-center uppercase font-roboto font-bold bg-brand-yellow h-11 text-white text-xs py-3 rounded hover:bg-brand-yellow-dark transition-[300] ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow-dark"
                type="submit"
              >
                Confirmar pedido
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}
