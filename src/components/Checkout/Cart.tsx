import { useContext } from "react";
import { CoffeeContext } from "@/context/CoffeeContext";
import { CartProductCard } from "./CartProductCard";

export function Cart() {
  const { cartProducts, subtotal, deliveryPrice, totalPrice } =
    useContext(CoffeeContext);

  return (
    <article className="">
      {cartProducts?.map((cartProduct) => (
        <CartProductCard key={cartProduct.id} cartProduct={cartProduct} />
      ))}

      <section>
        <ul className="grid gap-3 font-roboto">
          <li className="flex justify-between h-4">
            <span className="text-sm">Total de itens</span>
            <span className="">{subtotal}</span>
          </li>

          <li className="flex justify-between h-4">
            <span className="text-sm">Entrega</span>
            <span className="">{deliveryPrice}</span>
          </li>

          <li className="flex justify-between h-5 font-bold">
            <span className="text-lg">Total</span>
            <span className="text-lg">{totalPrice}</span>
          </li>
        </ul>
      </section>
    </article>
  );
}
