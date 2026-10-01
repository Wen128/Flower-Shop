import ProductCard from '@/src/components/ProductCard'
import React from 'react'

export default function Shop() {
  return (
    <div className='w-full min-h-screen pt-40 flex justify-center'>
        <div className='w-4/5'>
            <div className='w-full flex justify-between'>
                <h1 className='text-5xl text-primary font-dynapuff font-medium'>Shop</h1>

                <div className='flex gap-2'>
                    <button
                        className="text-black transition-colors duration-300 hover:text-secondary bg-[#E8E8E8] px-4 py-2 rounded-full"
                        aria-label="Filter products"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 7h16" />
                            <path d="M7 12h10" />
                            <path d="M10 17h4" />
                        </svg>
                        </button>
                    <input className='bg-[#E8E8E8] focus:outline-none rounded-full px-4 py-1' placeholder='Search...' />


                </div>

                
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12'>
                    <ProductCard product={{
                            name: "Pink Flower",
                            price: 128,
                            image: "/images/best_seller1.png",
                        }}/>
                        <ProductCard product={{
                            name: "Yellow Flower",
                            price: 158,
                            image: "/images/best_seller2.png",
                        }}/>
                        <ProductCard product={{
                            name: "Orange Flower",
                            price: 138,
                            image: "/images/best_seller3.png",
                        }}/>
                        <ProductCard product={{
                            name: "Purple Flower",
                            price: 188,
                            image: "/images/best_seller4.png",
                        }}/>
                        <ProductCard product={{
                            name: "Orange Flower",
                            price: 138,
                            image: "/images/best_seller3.png",
                        }}/>
                        <ProductCard product={{
                            name: "Purple Flower",
                            price: 188,
                            image: "/images/best_seller4.png",
                        }}/>
                        <ProductCard product={{
                            name: "Orange Flower",
                            price: 138,
                            image: "/images/best_seller3.png",
                        }}/>
                        <ProductCard product={{
                            name: "Purple Flower",
                            price: 188,
                            image: "/images/best_seller4.png",
                        }}/>
                        <ProductCard product={{
                            name: "Orange Flower",
                            price: 138,
                            image: "/images/best_seller3.png",
                        }}/>
                        <ProductCard product={{
                            name: "Purple Flower",
                            price: 188,
                            image: "/images/best_seller4.png",
                        }}/>
                                </div>

        </div>
    </div>
  )
}
