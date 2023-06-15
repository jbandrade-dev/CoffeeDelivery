import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { CoffeeContext } from "@/context/CoffeeContext";
import { FormatCurrency } from "../FormatCurrency";
import { CartProductCard } from "./CartProductCard";

export function Cart() {
  const { formState } = useFormContext();

  const { cartProducts } = useContext(CoffeeContext);

  const subtotal = cartProducts.reduce(
    (acc, cartItem) => acc + cartItem.coffee.price * cartItem.quantity,
    0
  );

  const deliveryPrice = 3;

  const totalPrice = subtotal + deliveryPrice;

  return (
    <div>
      {cartProducts.map(({ coffee, quantity }) => (
        <CartProductCard key={coffee.id} coffee={coffee} quantity={quantity} />
      ))}

      <div>
        <ul className="grid gap-3 font-roboto">
          <li className="flex justify-between h-4">
            <span className="text-sm">Total de itens</span>
            <span>{FormatCurrency(subtotal)}</span>
          </li>

          <li className="flex justify-between h-4">
            <span className="text-sm">Entrega</span>
            <span>{FormatCurrency(deliveryPrice)}</span>
          </li>

          <li className="flex justify-between h-5 font-bold">
            <span className="text-lg">Total</span>
            <span className="text-lg">{FormatCurrency(totalPrice)}</span>
          </li>
        </ul>


      </div>
    </div>
  );
}
