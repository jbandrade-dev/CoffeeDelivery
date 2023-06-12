"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[1120px] mx-auto">
      <Navbar />
      <Hero />
      <Products />
    </main>
  );
}
