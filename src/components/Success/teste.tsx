import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
export function Success2() {
  return (
    <article className="flex mt-10 w-full rounded-md bg-gradient-to-r from-brand-yellow to-brand-purple p-[0.8px] rounded-tr-[36px] rounded-bl-[36px]  ">
      <div className="flex h-full w-full bg-base-background p-10 rounded-tr-[36px] rounded-bl-[36px] rounded-md" >
        <ul className="grid gap-8">
          <li className="flex items-center gap-3 h-10 my-0.5 leading-5">
            <MapPin
              className="text-white rounded-full bg-brand-purple w-8 h-8 p-2"
              size={16}
              weight="fill"
            />
            <div className="grid font-roboto text-sm">
              <span>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </span>

              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </li>

          <li className="flex items-center gap-3 h-10 my-0.5 leading-5">
            <Timer
              className="text-white rounded-full bg-brand-yellow w-8 h-8 p-2"
              size={16}
              weight="fill"
            />
            <div className="grid font-roboto text-sm">
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
            <div className="grid font-roboto text-sm">
              <span>Pagamento na entrega</span>
              <span className="font-bold">Cartão de Crédito</span>
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
}
