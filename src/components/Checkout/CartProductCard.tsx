import { useContext } from "react";

import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { FormatCurrency } from "../FormatCurrency";
import { CoffeeListProps } from "@/utils/coffeeList";
import { CoffeeContext } from "@/context/CoffeeContext";
import Image from "next/image";

interface CartProductCardProps {
  coffee: CoffeeListProps;
  quantity: number;
}

export function CartProductCard({ coffee, quantity }: CartProductCardProps) {
  const {
    cartProducts,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleRemoveProduct,
  } = useContext(CoffeeContext);

  return (
    <section>
      <div className="pc:flex pc:order-1 mob:order-2 pc:justify-between items-start pr-1">
        <div className="flex items-center gap-4">
          <Image src={coffee.image} alt={coffee.alt} width={64} height={64} />

          <div className="grid gap-2">
            <span className="text-sm font-roboto">{coffee.name}</span>

            <div className="flex gap-2 h-8">
              <div className="relative flex justify-center items-center p-2 bg-base-button rounded-md w-[4.5rem]">
                <button
                  type="button"
                  onClick={() => handleDecrementQuantity(coffee.id)}
                  className="absolute left-2 text-brand-purple hover:text-brand-purple-dark"
                  aria-label="Diminuir quantidade"
                >
                  <Minus
                    alt="Ícone de menos, clique para diminuir o número de unidades desse item"
                    size={14}
                  />
                </button>
                <output
                  className="mx-auto font-roboto text-sm"
                  aria-live="polite"
                >
                  {quantity}
                </output>
                <button
                  type="button"
                  onClick={() => handleIncrementQuantity(coffee.id)}
                  className="absolute right-2 text-brand-purple hover:text-brand-purple-dark"
                  aria-label="Aumentar quantidade"
                >
                  <Plus
                    alt="Ícone de mais, clique para acrescentar mais unidades desse item"
                    size={14}
                  />
                </button>
              </div>

              <button
                type="button"
                className="flex w-fit gap-1 uppercase text-2xs font-roboto items-center bg-base-button text-base-text px-2 py-2 rounded hover:bg-base-hover transition-[300] ease-out"
                onClick={() => handleRemoveProduct(coffee.id)}
              >
                <Trash
                  className="text-brand-purple"
                  size={16}
                  alt="Ícone de lixeira, clique para remover esse item do carrinho "
                />
                <span className="mr-0.5">Remover</span>
              </button>
            </div>
          </div>
        </div>
        
        <span className="flex justify-center font-roboto font-bold text-sm text-gray-700 pc:flex tablet:flex mob:hidden">
          {FormatCurrency(coffee.price * quantity)}
        </span>
      </div>

      <hr className="border-base-hr w-full my-6" />
    </section>
  );
}
