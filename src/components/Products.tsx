import React from "react";

import { ProductCard } from "./ProductCard";
import { products } from "@/utils/products";

export function Products() {
  return (
    <div className="pc:px-0 mob:px-6 tablet:px-6">
      <p className="pc:text-2xl mob:text-xl tablet:text-xl font-extrabold mb-16 pc:text-left tablet:text-center mob:text-center">Nossos cafés</p>
      <section className="grid pc:grid-cols-4 gap-8">
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
