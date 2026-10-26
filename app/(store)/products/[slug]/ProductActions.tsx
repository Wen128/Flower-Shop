"use client";
import { useCart } from "@/src/context/CartContext";

import { useState } from "react";

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
    };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(1);

  const decreaseAmount = () => {
    setAmount((prev) => Math.max(1, prev - 1));
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };


  return (
    <div className="flex items-center gap-4 my-4">
      {/* Choose Amount */}
      <div className="flex items-center space-x-4 rounded-full border border-gray-100 p-1 text-xl shadow-sm">
        <button
          className="rounded-md px-4 py-2 transition-colors duration-300 cursor-pointer"
          onClick={decreaseAmount}
        >
          -
        </button>

        <span>{amount}</span>

        <button
          className="rounded-md px-4 py-2 transition-colors duration-300 cursor-pointer"
          onClick={increaseAmount}
        >
          +
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product, amount)}
        className="rounded-full  text-primary px-8 py-4 transition-colors duration-300 border border-primary hover:bg-primary hover:text-white cursor-pointer"
      >
        Add to Cart
      </button>

      {/* Buy Now */}
      <button className="rounded-full bg-primary px-8 py-4 text-white transition-colors duration-300 hover:bg-tertiary cursor-pointer">
        Buy Now
      </button>
    </div>
  );
}