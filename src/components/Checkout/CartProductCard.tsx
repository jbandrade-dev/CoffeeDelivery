import Image from "next/image";
import { useContext, useState } from "react";
import { CoffeeContext, NewProduct } from "@/context/CoffeeContext";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

interface CartProductCardProps {
  cartProduct: NewProduct;
}

export function CartProductCard({ cartProduct }: CartProductCardProps) {
  const { handleRemoveProduct, handleUpdateProductQuantity } =
    useContext(CoffeeContext);
  const [quantity, setQuantity] = useState(cartProduct.quantity);

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartProduct.price);

  function handleIncrement() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleUpdateProductQuantity(cartProduct.id, newQuantity);
  }

  function handleDecrease() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleUpdateProductQuantity(cartProduct.id, newQuantity);
    }
  }

  return (
    <section>
      <div className="flex justify-between items-start pr-1">
        <div className="flex items-center gap-4">
          <Image
            src={cartProduct.src}
            alt={cartProduct.alt}
            width={64}
            height={64}
          />

          <div className="grid gap-2">
            <h3 className="text-sm font-roboto">{cartProduct.name}</h3>

            <div className="flex gap-2 h-8">
              <div className="relative flex justify-center items-center p-2 bg-base-button rounded-md w-[4.5rem]">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="absolute left-2 text-brand-purple hover:text-brand-purple-dark"
                  aria-label="Diminuir quantidade"
                >
                  <Minus
                    alt="Ícone de menos, clique para diminuir o número de unidades desse item"
                    size={14}
                  />
                </button>
                <output
                  className="mx-auto font-roboto text-sm"
                  aria-live="polite"
                >
                  {quantity}
                </output>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="absolute right-2 text-brand-purple hover:text-brand-purple-dark"
                  aria-label="Aumentar quantidade"
                >
                  <Plus
                    alt="Ícone de mais, clique para acrescentar mais unidades desse item"
                    size={14}
                  />
                </button>
              </div>

              <button
                type="button"
                className="flex w-fit gap-1 uppercase text-2xs font-roboto items-center bg-base-button text-base-text px-2 py-2 rounded hover:bg-base-hover transition-[300] ease-out"
                onClick={() => handleRemoveProduct(cartProduct.id)}
              >
                <Trash
                  className="text-brand-purple"
                  size={16}
                  alt="Ícone de lixeira, clique para remover esse item do carrinho "
                />
                <span className="mr-0.5">Remover</span>
              </button>
            </div>
          </div>
        </div>

        <p className="flex justify-center font-roboto font-bold text-sm text-gray-700">
          {priceFormatted}
        </p>
      </div>

      <hr className="border-base-hr w-full my-6" />
    </section>
  );
}
