"use client";

import Link from "next/link";
import { CoffeeContext } from "@/context/CoffeeContext";
import { useContext } from "react";
import { Logo } from "./Logo";
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";

export function Navbar() {
  const { cartProducts } = useContext(CoffeeContext);

  const totalQuantity = cartProducts.reduce(
    (acc, value) => acc + value.quantity,
    0
  );

  return (
    <nav className="w-full pc:px-0 mob:px-4 tablet:px-4" id="home">
      <div className="flex justify-between items-center max-w-[1120px] mx-auto h-[104px] py-8">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center h-[2.375rem] bg-brand-purple-light text-brand-purple-dark rounded-md px-2 py-2">
            <MapPin size={22} className="" weight="fill" />
            <span className="flex gap-1 text-sm mr-0.5">
              Rio de Janeiro, Rj
            </span>
          </div>

          <Link href="/checkout" aria-label="Página de checkout">
            <div className="relative bg-brand-yellow-light text-brand-yellow-dark p-2 rounded-lg cursor-pointer w-[2.375rem] h-[2.375rem]">
              <ShoppingCartSimple
                alt="Ícone de carrinho de compras, clique para ir para página de checkout e completar seu pedido"
                size={22}
                weight="fill"
              />
              {totalQuantity === 0 ? null : (
                <span className="absolute top-[-7px] left-7 text-white flex items-center justify-center rounded-full bg-brand-yellow-dark w-5 h-5 text-xs font-roboto font-bold">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
