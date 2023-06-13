import { CoffeeContext } from "@/context/CoffeeContext";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";

export function Success() {
  const { newOrder } = useContext(CoffeeContext);

  return (
    <article className="max-w-[32.875rem] flex mt-10 rounded-md bg-gradient-to-r from-brand-yellow to-brand-purple p-[0.8px] rounded-tr-[36px] rounded-bl-[36px]  ">
      <div className="flex w-full bg-base-background pc:p-10 mob:p-6 rounded-tr-[36px] rounded-bl-[36px] rounded-md">
        <ul className="grid gap-8">
          <li className="flex items-center gap-3 h-10 my-0.5 leading-5">
            <MapPin
              className="text-white rounded-full bg-brand-purple w-8 h-8 p-2"
              size={16}
              weight="fill"
            />
            <div className="grid gap-1 font-roboto pc:text-sm mob:text-xs tablet:text-sm">
              <div className="pc:flex pc:gap-1 mob:grid">
                <span>Entrega em</span>
                <div className="flex">
                  <span className="font-bold">
                    Rua {newOrder?.address.rua} {newOrder?.address.numero}
                  </span>

                  <span className="font-bold">/</span>

                  <span className="font-bold">
                    {newOrder?.address.complemento}
                  </span>
                </div>
              </div>
              <div>
                <span>{newOrder?.address.bairro}</span>
                <span>-</span>
                <span>{newOrder?.address.uf}</span>
              </div>
            </div>
          </li>

          <li className="flex items-center gap-3 h-10 my-0.5 leading-5">
            <Timer
              className="text-white rounded-full bg-brand-yellow w-8 h-8 p-2"
              size={16}
              weight="fill"
            />
            <div className="grid font-roboto pc:text-sm mob:text-xs tablet:text-sm">
              <span>Previsão de entrega</span>
              <span className="font-bold">20 min - 30 min </span>
            </div>
          </li>

          <li className="flex items-center gap-3 h-10 my-0.5 leading-5">
            <CurrencyDollar
              className="text-white rounded-full bg-brand-purple w-8 h-8 p-2"
              size={16}
              weight="fill"
            />
            <div className="grid font-roboto pc:text-sm mob:text-xs tablet:text-sm">
              <span>Pagamento na entrega</span>
              <span className="font-bold">
                {(() => {
                  switch (newOrder?.paymentMethod) {
                    case "credito":
                      return "Cartão de Crédito";
                    case "debito":
                      return "Cartão de Débito";
                    default:
                      return "Dinheiro";
                  }
                })()}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}
