"use client"

import { Success } from "@/components/Success";
import { CoffeeContext } from "@/context/CoffeeContext";
import Image from "next/image";
import { useContext } from "react";

export default function SuccessPage() {
  const {newOrder} = useContext(CoffeeContext)

  return (
    <section className="flex justify-between pt-44 max-w-[70rem] mx-auto">
      <article className="">
        <header className="">
          <h2 className="font-extrabold text-2xl text-brand-yellow-dark">
            Uhu! Pedido confirmado
          </h2>
          <span className="text-lg font-roboto text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </header>
        <Success />
      </article>
      <Image
        className="flex max-w-[492px] w-full pt-24 pb-24 mt-4"
        src="/moto-illustration.png"
        alt="Ilustração de uma moto pronta pra entregar seu pedido!"
        width={492}
        height={293}
        role="presentation"
        priority
      />
    </section>
  );
}
