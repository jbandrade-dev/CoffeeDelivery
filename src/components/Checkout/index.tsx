import {
  CoffeeContext,
  NewOrderFormData,
  newOrderFormValidationSchema,
} from "@/context/CoffeeContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Address } from "./Address";
import { PaymentMethod } from "./PaymentMethod";
import { Cart } from "./Cart";

export function Checkout() {
  const { setNewOrderData, newOrderData } = useContext(CoffeeContext);

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: undefined,
      bairro: "",
      cidade: "",
      complemento: undefined,
      numero: "",
      rua: "",
      uf: "",
      paymentMethod: undefined,
      ...newOrderData,
    },
  });

  const { watch, getValues } = newOrderForm;

  console.log("formValues:", getValues());

  function handleSubmitNewOrder(event: FormEvent) {
    event.preventDefault()

    const data = watch()

    const {...info} = data

    console.log("handleSubmitNewOrder called with data:", info);
    setNewOrderData(info);
    location.href = "/success/";
  }

  return (
    <article>
      <form
        className="pc:flex mob:grid tablet:grid my-10 max-w-[1120px] w-full mx-auto pc:px-0 mob:px-6 tablet:px-6"
        onSubmit={(handleSubmitNewOrder)}
      >
        <section className="grid gap-3 max-w-[40rem]">
          <h3 className="text-lg font-bold mb-1 ml-1">Complete seu pedido</h3>

          <FormProvider {...newOrderForm}>
            <Address />
            <PaymentMethod />
          </FormProvider>
        </section>

        <section className="pc:pl-8 mob:pl-0 tablet:pl-0 w-full">
          <h3 className="text-lg font-bold mb-4 ml-1 pc:pt-0 mob:pt-16 tablet:pt-16">
            Cafés selecionados
          </h3>

          <div className="grid p-10 bg-base-card rounded-tr-[44px] rounded-bl-[44px] rounded-md">
            <FormProvider {...newOrderForm}>
              <Cart />
            </FormProvider>

            <button
              className="flex w-full mt-6 items-center justify-center uppercase font-roboto font-bold bg-brand-yellow h-11 text-white text-xs py-3 rounded hover:bg-brand-yellow-dark transition-[300] ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow-dark"
              type="submit"
              // disabled={!formState.isValid}
              onClick={() => console.log("Submit button clicked")}
            >
              Confirmar pedido
            </button>
          </div>
        </section>
      </form>
    </article>
  );
}
