import {
  Coffee,
  Package,
  Timer,
  ShoppingCartSimple,
} from "@phosphor-icons/react";

export function HeroList() {
  return (
    <ul className="pc:flex pc:flex-wrap mob:grid pc:pb-28 mob:pb-8 text-base-text max-w-[567px] font-roboto">
      <li className="flex pc:w-1/2 tablet:w-full mob:w-full mb-6 gap-2 items-center">
        <ShoppingCartSimple
          className=" text-white rounded-full bg-brand-yellow-dark w-8 h-8 p-2"
          size={22}
          weight="fill"
        />
        <span className="">
          Compra simples e segura
        </span>
      </li>
      <li className="flex pc:w-1/2 tablet:w-full mob:w-full mb-6 gap-2 items-center">
        <Package
          className=" text-white rounded-full bg-base-text w-8 h-8 p-2"
          size={16}
          weight="fill"
        />
        <span className="">
          Embalagem mantém o café intacto
        </span>
      </li>
      <li className="flex pc:w-1/2 tablet:w-full mob:w-full mb-6 gap-2 items-center">
        <Timer
          className=" text-white rounded-full bg-brand-yellow w-8 h-8 p-2"
          size={16}
          weight="fill"
        />
        <span className="">
          Entrega rápida e rastreada
        </span>
      </li>
      <li className="flex pc:w-1/2 tablet:w-full mob:w-full mb-6 gap-2 items-center">
        <Coffee
          className=" text-white rounded-full bg-brand-purple w-8 h-8 p-2"
          size={16}
          weight="fill"
        />
        <span className="">
          O café chega fresquinho até você
        </span>
      </li>
    </ul>
  );
}
