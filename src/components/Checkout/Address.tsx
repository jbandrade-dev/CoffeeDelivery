import { useFormContext } from "react-hook-form";
import { MapPinLine } from "@phosphor-icons/react";

export function Address() {
  const { register } = useFormContext();

  return (
    <article className="grid p-10 gap-4 rounded bg-base-card">
      <header className="flex gap-2 items-start font-roboto text-base-subtitle">
        <MapPinLine className="text-brand-yellow" size={22} />

        <div className="">
          <p className="text-lg">Endereço de Entrega</p>
          <p className="text-sm ">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <label htmlFor="cep" className="sr-only">
          CEP
        </label>
        <input
          id="cep"
          className="pc:col-span-1 mob:col-span-3 tablet:col-span-3 bg-base-input rounded-md p-2 h-10"
          placeholder="CEP"
          {...register("address.cep", { valueAsNumber: true, required: true })}
        />

        <label htmlFor="rua" className="sr-only">
          Rua
        </label>
        <input
          id="rua"
          className="col-span-3 bg-base-input rounded-md p-2 h-10"
          placeholder="Rua"
          {...register("address.rua", { required: true })}
        />

        <label htmlFor="numero" className="sr-only">
          Número
        </label>
        <input
          id="numero"
          className="col-span-1 bg-base-input rounded-md p-2 h-10"
          placeholder="Número"
          {...register("address.numero", {
            valueAsNumber: true,
            required: true,
          })}
        />

        <label htmlFor="complemento" className="sr-only">
          Complemento
        </label>
        <input
          id="complemento"
          className="pc:col-span-1 mob:col-span-2 tablet:col-span-2 bg-base-input rounded-md p-2 h-10"
          placeholder="Complemento"
          {...register("address.complemento", { valueAsNumber: true })}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <label htmlFor="bairro" className="sr-only">
          Bairro
        </label>
        <input
          id="bairro"
          className="pc:col-span-1 mob:col-span-3 tablet:col-span-3 bg-base-input rounded-md p-2 h-10"
          placeholder="Bairro"
          {...register("address.bairro", { required: true })}
        />

        <div className="grid grid-cols-5 pc:col-span-2 mob:col-span-3 tablet:col-span-3 gap-4 h-10">
          <input
            id="cidade"
            className="flex w-full pc:col-span-4 mob:col-span-3 tablet:col-span-3 bg-base-input rounded-md p-2 h-10"
            placeholder="Cidade"
            {...register("address.cidade", { required: true })}
          />
          <input
            id="UF"
            className="pc:col-span-1 mob:col-span-2 tablet:col-span-2 bg-base-input rounded-md p-2 h-10"
            placeholder="UF"
            {...register("address.uf", { required: true })}
          />
        </div>
      </div>
    </article>
  );
}
