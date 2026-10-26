"use client";
import Link from "next/link"
import { useCart } from "@/src/context/CartContext";

export const Navbar = () => {
  const { cartItems } = useCart();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/faqs", label: "FAQs" },
  ];
  return (
    <div className="w-full flex justify-center fixed z-50 px-3 sm:px-0">
        <div className="relative w-full sm:w-4/5 px-4 sm:px-8 rounded-2xl sm:rounded-full mt-3 sm:mt-4 min-h-14 sm:h-16 flex justify-between items-center bg-[#F7DCDC] shadow-md">
            {/* Logo */}
            <div>
                <h1 className="text-lg sm:text-xl text-[#FF7979] font-dynapuff">Flower<span className="text-tertiary">Shop</span></h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 lg:space-x-12 font-el-messiri text-lg lg:text-xl">
                {links.map((link) => <Link key={link.href} href={link.href} className="text-tertiary hover:text-[#FF7979]">{link.label}</Link>)}
            </div>

            {/* Cart and Profile Icon */}
            <div className="flex items-center">
                <details className="group relative mr-3 md:hidden">
                    <summary aria-label="Toggle navigation menu" className="flex h-10 w-10 cursor-pointer list-none items-center justify-center text-tertiary [&::-webkit-details-marker]:hidden">
                        <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </summary>
                    <nav id="mobile-navigation" className="absolute right-0 top-[calc(100%+0.75rem)] z-[60] w-52 rounded-2xl bg-[#F7DCDC] p-3 shadow-lg" aria-label="Mobile navigation">
                        {links.map((link) => <Link key={link.href} href={link.href} className="block rounded-xl px-4 py-3 font-el-messiri text-lg text-tertiary hover:bg-white/60">{link.label}</Link>)}
                    </nav>
                </details>
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
                <Link href="/profile" aria-label="Profile" className="text-tertiary hover:text-[#FF7979] ml-3 sm:ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  )
}
