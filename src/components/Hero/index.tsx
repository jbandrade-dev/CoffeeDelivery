import Image from "next/image";

import { Header } from "./Header";

import { HeroList } from "./HeroList";

export function Hero() {
  return (
    <section className="w-full pc:flex pc:justify-between mob:grid pc:max-h-[544px] mob:px-6 tablet:px-6 mob:h-full tablet:h-full">
      <main className="grid pc:order-1 mob:order-2 pc:pt-24 mob:pt-8 pc:max-w-[580px]">
        <Header />
        <HeroList />
      </main>

      <Image
        className="max-w-[476px] w-full pc:pt-24 pc:pb-24 mob:pt-6"
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
