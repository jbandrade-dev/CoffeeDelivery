"use client"

import { Success } from "@/components/Success";
import { CoffeeContext } from "@/context/CoffeeContext";
import Image from "next/image";
import { useContext } from "react";

export default function SuccessPage() {
  const {newOrder} = useContext(CoffeeContext)

  return (
    <section className="pc:flex pc:justify-between mob:grid tablet:grid pc:pt-44 max-w-[70rem] mx-auto pc:px-0 mob:px-6 tablet:px-6">
      <article className="pc:order-1 mob:order-2">
        <header className="">
          <h2 className="font-extrabold pc:text-2xl mob:text-[1.875rem] tablet:text-xl text-brand-yellow-dark">
            Uhu! Pedido confirmado
          </h2>
          <span className="text-lg font-roboto text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>
        </header>
        <Success />
      </article>
      <Image
        className="flex max-w-[492px] w-full pc:py-24 mob:py-16 tablet:py-16 mt-4 pc:order-2 mob:order-1"
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
