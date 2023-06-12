

import Image from "next/image";

import { Header } from "./Header";

import { HeroList } from "./HeroList";

export function Hero() {
  return (
    <section className="flex w-full justify-between max-h-[544px]">
      <main className="grid pt-24 max-w-[580px]">
        <Header />
        <HeroList />
      </main>

      <Image
        className="max-w-[476px] w-full pt-24 pb-24"
        src="/copo-de-cafe-da-coffee-delivery-com-fundo-amarelo-e-graos-variados.png"
        alt="Imagem de um copo de cafe da Coffee Delivery com um fundo amarelo e grãos variados ao redor"
        width={476}
        height={352}
        role="presentation"
        priority
      />
    </section>
  );
}
