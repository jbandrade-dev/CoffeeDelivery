/* eslint-disable @next/next/no-img-element */
import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeeListProps } from "@/utils/coffeeList";
import { useContext, useState } from "react";
import { CoffeeContext } from "@/context/CoffeeContext";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { FormatCurrency } from "../FormatCurrency";
import { Description } from "./Description";
import Image from "next/image";

interface CoffeeCardProps {
  coffee: CoffeeListProps;
  selected?: boolean;
}

export function ProductCard({ coffee, selected = false }: CoffeeCardProps) {
  const {
    handleNewProduct,
    handleRemoveProduct,
    handleDecrementQuantity,
    handleIncrementQuantity,
  } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(1);

  function handleSubmitProduct(coffee: CoffeeListProps, quantity: number) {
    const item = {
      coffee,
      quantity,
    };

    handleNewProduct(item);
  }

  function handleDecrease() {
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  return (
    <article className="flex-col p-5 bg-base-card rounded-bl-3xl rounded-tr-3xl rounded-tl-md rounded-br-md mb-4 border border-transparent transition-[300] ease-out">
      <div className="flex justify-center mt-[-45px]">
        <Image src={coffee.image} alt={coffee.alt} width={120} height={120} />
      </div>

      <div className="flex">
        {coffee.tags?.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>

      <Description name={coffee.name} description={coffee.description} />

      <div className="flex justify-between pt-8">
        <span className="font-extrabold text-xl text-base-text pt-0.5">
          {FormatCurrency(coffee.price)}
        </span>

        <div className="flex gap-2 h-[2.375rem]">
          <div className="relative flex justify-center items-center p-2 bg-base-button rounded-md w-[4.5rem] ">
            <button
              type="button"
              onClick={handleDecrease}
              className="absolute left-2 text-brand-purple hover:text-brand-purple-dark"
              aria-label="Diminuir quantidade"
            >
              <Minus
                alt="Ícone de menos, clique para diminuir o número de unidades desse item"
                size={14}
              />
            </button>
            <output className="mx-auto font-roboto text-sm" aria-live="polite">
              {quantity}
            </output>
            <button
              type="button"
              onClick={handleIncrement}
              className="absolute flex justify-center items-center right-2 text-brand-purple hover:text-brand-purple-dark"
              aria-label="Aumentar quantidade"
            >
              <Plus
                alt="Ícone de mais, clique para acrescentar mais unidades desse item"
                size={14}
              />
            </button>
          </div>
        </div>
        <button
          className="flex items-center justify-center text-white bg-brand-purple-dark hover:bg-brand-purple w-[2.375rem] h-[2.375rem] rounded-md"
          onClick={() => handleSubmitProduct(coffee, quantity)}
        >
          <ShoppingCart
            weight="fill"
            aria-label="Adiciona ao carrinho"
            size={22}
          />
        </button>
      </div>
    </article>
  );
}
