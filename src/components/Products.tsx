import React from "react";

import { ProductCard } from "./ProductCard";
import { products } from "@/utils/products";

export function Products() {
  return (
    <div className="">
      <p className="text-2xl font-extrabold mb-16">Nossos cafés</p>
      <section className="grid grid-cols-4 gap-8">
        {products.map((coffee) => {
          return (
            <div key={coffee.id}>
              <ProductCard coffee={coffee} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
