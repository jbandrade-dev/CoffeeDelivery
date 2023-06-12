"use client";

import "./globals.css";
import { Baloo_2 } from "next/font/google";
import { Roboto } from "next/font/google";
import { CoffeeContextProvider } from "@/context/CoffeeContext";
import { Navbar } from "@/components/Navbar";
import type { NextWebVitalsMetric } from 'next/app'

export const baloo_2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo_2",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CoffeeContextProvider>
        <body
          className={`${baloo_2.variable} font-baloo bg-base-background min-h-screen`}
        >
          {children}
        </body>
      </CoffeeContextProvider>
    </html>
  );
}
