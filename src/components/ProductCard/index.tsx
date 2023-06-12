"use client";

import { CoffeeContext } from "@/context/CoffeeContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { Description } from "./Description";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

interface ProductCardProps {
  coffee: {
    id: number;
    src: string;
    alt: string;
    name: string;
    description: string;
    price: number;
    badges: string[];
  };
}

export function ProductCard({ coffee }: ProductCardProps) {
  const { handleNewProduct } = useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(coffee.price);

  function handleAddCoffee() {
    handleNewProduct({
      id: coffee.id,
      src: coffee.src,
      alt: coffee.alt,
      name: coffee.name,
      description: coffee.description,
      price: coffee.price,
      badges: coffee.badges,
      quantity: quantity,
    });
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    quantity > 1 ? setQuantity(quantity - 1) : null;
  }

  function handleClick() {
    handleAddCoffee();
    setIsClicked(true);
  }

  return (
    <article className="flex-col p-5 bg-base-card rounded-bl-3xl rounded-tr-3xl rounded-tl-md rounded-br-md mb-4 border border-transparent transition-[300] ease-out">
      <figure className="flex justify-center mt-[-45px]">
        <Image src={coffee.src} alt={coffee.alt} width={120} height={120} />
        <figcaption className="sr-only">{coffee.name}</figcaption>
      </figure>

      <Description name={coffee.name} description={coffee.description} />

      <div className="flex justify-between pt-8">
        <span className="font-extrabold text-xl text-base-text pt-0.5">
          {priceFormatted}
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

          <button
            onClick={handleClick}
            className="flex items-center justify-center text-white bg-brand-purple-dark hover:bg-brand-purple w-[2.375rem] h-[2.375rem] rounded-md"
            aria-label="Add to cart"
            aria-pressed={isClicked}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </div>
    </article>
  );
}
