"use client";
import Link from "next/link"
import { useCart } from "@/src/context/CartContext";

export const Navbar = () => {
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="w-full flex justify-center fixed z-50">
        <div className="w-4/5 px-8 rounded-full mt-4 h-16 flex justify-between items-center bg-[#F7DCDC] shadow-md">
            {/* Logo */}
            <div>
                <h1 className="text-xl text-[#FF7979] font-dynapuff">Flower<span className="text-tertiary">Shop</span></h1>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-16 font-el-messiri text-xl">
                <Link href="/" className="text-tertiary hover:text-[#FF7979]">Home</Link>
                <Link href="/shop" className="text-tertiary hover:text-[#FF7979]">Shop</Link>
                <Link href="/about" className="text-tertiary hover:text-[#FF7979]">About</Link>
                <Link href="/faqs" className="text-tertiary hover:text-[#FF7979]">FAQs</Link>
            </div>

            {/* Cart and Profile Icon */}
            <div className="flex">
                <Link href="/cart" className="text-tertiary hover:text-[#FF7979] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartItemCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-[#FF7979] rounded-full">
                            {cartItemCount}
                        </span>
                    )}
                </Link>
                <a href="#" className="text-tertiary hover:text-[#FF7979] ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}
