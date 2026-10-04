import type { Metadata } from "next";
import {
  DynaPuff,
  El_Messiri,
  Inter,
  Inspiration,
} from "next/font/google";

import "./globals.css";
import { CartProvider } from "@/src/context/CartContext";

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dynapuff",
  display: "swap",
});

const elMessiri = El_Messiri({
  subsets: ["latin"],
  variable: "--font-el-messiri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inspiration = Inspiration({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inspiration",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flower Shop",
  description: "Beautiful flowers for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dynaPuff.variable} ${elMessiri.variable} ${inter.variable} ${inspiration.variable}`}
    >
      <CartProvider>
        <body>{children}</body>
      </CartProvider>
    </html>
  );
}