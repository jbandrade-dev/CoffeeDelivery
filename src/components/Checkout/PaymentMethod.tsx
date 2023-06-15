import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";

export function PaymentMethod() {
  const { register, watch } = useFormContext();

  const paymentMethod = watch("paymentMethod");

  return (
    <section className="grid pc:grid-cols-3 mob:grid-cols-1 p-10 gap-4 rounded bg-base-card">
      <header className="flex col-span-3 gap-2 items-start font-roboto text-base-subtitle">
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
      </header>

      <div className="grid pc:grid-cols-3 mob:grid-cols-1 gap-4 col-span-3">
        <label
          className={`flex uppercase rounded-md text-xs text-base-text font-roboto gap-2 items-center cursor-pointer py-4 pl-4 col-span-1 bg-base-button hover:bg-base-hover ${
            paymentMethod === "credit"
              ? "border border-brand-purple"
              : "border border-transparent"
          }`}
        >
          <input value="credit" className="hidden" type="radio" {...register("paymentMethod")} />
          <CreditCard
            alt="Ícone de pagamento com cartão de crédito"
            size={16}
            className="text-brand-purple"
          />
          <span>Cartão de crédito</span>
        </label>

        <label
          className={`flex uppercase rounded-md text-xs text-base-text font-roboto gap-2 items-center cursor-pointer py-4 pl-4 col-span-1 bg-base-button hover:bg-base-hover ${
            paymentMethod === "debit"
              ? "border border-brand-purple"
              : "border border-transparent"
          }`}
        >
          <input value="debit" className="hidden" type="radio" {...register("paymentMethod")} />
          <Bank
            alt="Ícone de pagamento em débito"
            size={16}
            className="text-brand-purple"
          />
          <span>Cartão de débito</span>
        </label>

        <label
          className={`flex uppercase rounded-md text-xs text-base-text font-roboto gap-2 items-center cursor-pointer py-4 pl-4 col-span-1 bg-base-button hover:bg-base-hover ${
            paymentMethod === "cash"
              ? "border border-brand-purple"
              : "border border-transparent"
          }`}
        >
          <input value="cash" className="hidden" type="radio" {...register("paymentMethod")} />
          <Money
            alt="Ícone de pagamento em dinheiro"
            size={16}
            className="text-brand-purple"
          />
          <span>Dinheiro</span>
        </label>
      </div>
    </section>
  );
}
