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
        <label htmlFor="cep" className="sr-only" />
        <input
          id="cep"
          className="pc:col-span-1 mob:col-span-3 tablet:col-span-3 bg-base-input rounded-md p-2 h-10"
          placeholder="CEP"
          {...register("cep", { valueAsNumber: true, required: true })}
        />

        <label htmlFor="rua" className="sr-only" />
        <input
          id="rua"
          className="col-span-3 bg-base-input rounded-md p-2 h-10"
          placeholder="Rua"
          {...register("rua", { required: true })}
        />

        <label htmlFor="numero" className="sr-only" />
        <input
          id="numero"
          className="col-span-1 bg-base-input rounded-md p-2 h-10"
          placeholder="Número"
          {...register("numero", { required: true })}
        />

        <label htmlFor="complemento" className="sr-only" />
        <input
          id="complemento"
          className="pc:col-span-1 mob:col-span-2 tablet:col-span-2 bg-base-input rounded-md p-2 h-10"
          placeholder="Complemento"
          {...register("complemento", { valueAsNumber: true, required: true })}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4">
        <label htmlFor="bairro" className="sr-only" />
        <input
          id="bairro"
          className="pc:col-span-1 mob:col-span-3 tablet:col-span-3 bg-base-input rounded-md p-2 h-10"
          placeholder="Bairro"
          {...register("bairro", { required: true })}
        />

        <div className="grid grid-cols-5 pc:col-span-2 mob:col-span-3 tablet:col-span-3 gap-4 h-10">
          <label htmlFor="cidade" className="sr-only" />
          <input
            id="cidade"
            className="flex w-full pc:col-span-4 mob:col-span-3 tablet:col-span-3 bg-base-input rounded-md p-2 h-10"
            placeholder="Cidade"
            {...register("cidade", { required: true })}
          />

          <label htmlFor="uf" className="sr-only" />
          <input
            id="uf"
            className="pc:col-span-1 mob:col-span-2 tablet:col-span-2 bg-base-input rounded-md p-2 h-10"
            placeholder="Uf"
            {...register("uf", { required: true })}
          />
        </div>
      </div>
    </article>
  );
}
