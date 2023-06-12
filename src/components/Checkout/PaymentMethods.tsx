import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Bank, Money, CreditCard, CurrencyDollar } from "@phosphor-icons/react";

export function PaymentMethod() {
  const { register, setValue } = useFormContext();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  useEffect(() => {
    setValue("paymentMethod", selectedPaymentMethod);
  }, [selectedPaymentMethod, setValue]);

  return (
    <section className="grid grid-cols-3 p-10 gap-4 rounded bg-base-card">
      <div className="flex col-span-3 gap-2 items-start font-roboto text-base-subtitle">
        <CurrencyDollar
          className="text-brand-purple"
          alt="Ícone de carrinho com dinheiro"
          size={22}
        />
        <div>
          <p className="text-lg ">Pagamento</p>
          <p className="text-sm ">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-3 gap-4 col-span-3">
        <li>
          <input
            id="credito"
            className="bg-base-input rounded-md p-2 h-10 hidden"
            type="checkbox"
            value="credito"
            {...register("paymentMethod", { required: true })}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          />
          <label
            htmlFor="credito"
            className={`flex uppercase rounded-md text-xs text-base-text font-roboto gap-2 items-center cursor-pointer py-4 pl-4 col-span-1 bg-base-button hover:bg-base-hover ${
              selectedPaymentMethod === "credito"
                ? "border border-brand-purple"
                : "border border-transparent"
            }`}
          >
            <CreditCard
              alt="Ícone de pagamento com cartão de crédito"
              size={16}
              className="text-brand-purple"
            />
            Cartão de crédito
          </label>
        </li>

        <li>
          <input
            id="debito"
            className="bg-base-input rounded-md p-2 h-10 hidden"
            type="checkbox"
            value="debito"
            {...register("paymentMethod", { required: true })}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          />
          <label
            htmlFor="debito"
            className={`flex uppercase rounded-md text-xs text-base-text font-roboto gap-2 items-center cursor-pointer py-4 pl-4 col-span-1 bg-base-button hover:bg-base-hover ${
              selectedPaymentMethod === "debito"
                ? "border border-brand-purple"
                : "border border-transparent"
            }`}
          >
            <Bank
              alt="Ícone de pagamento em débito"
              size={16}
              className="text-brand-purple"
            />
            Cartão de débito
          </label>
        </li>

        <li>
          <input
            id="dinheiro"
            className="bg-base-input rounded-md p-2 h-10 hidden"
            type="checkbox"
            value="dinheiro"
            {...register("paymentMethod", { required: true })}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          />
          <label
            htmlFor="dinheiro"
            className={`flex uppercase rounded-md text-xs text-base-text font-roboto gap-2 items-center cursor-pointer py-4 pl-4 col-span-1 bg-base-button hover:bg-base-hover ${
              selectedPaymentMethod === "dinheiro"
                ? "border border-brand-purple"
                : "border border-transparent"
            }`}
          >
            <Money
              alt="Ícone de pagamento em dinheiro"
              size={16}
              className="text-brand-purple"
            />
            Dinheiro
          </label>
        </li>
      </ul>
    </section>
  );
}
