"use client"
import ProductCard from '@/src/components/ProductCard'
import {useState} from 'react'

interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
}

export default function Shop() {

    const products = [
        {
            id: 1,
            name: "Pink Flower",
            slug: "pink-flower",
            price: 128,
            image: "/images/best_seller1.png",
        },
        {
            id: 2,
            name: "Yellow Flower",
            slug: "yellow-flower",
            price: 158,
            image: "/images/best_seller2.png",
        },
        {
            id: 3,
            name: "Orange Flower",
            slug: "orange-flower",
            price: 138,
            image: "/images/best_seller3.png",
        },
        {
            id: 4,
            name: "Purple Flower",
            slug: "purple-flower",
            price: 188,
            image: "/images/best_seller4.png",
        },
        {
            id: 5,
            name: "Orange Flower",
            slug: "orange-flower",
            price: 138,
            image: "/images/best_seller3.png",
        },
        {
            id: 6,
            name: "Purple Flower",
            slug: "purple-flower",
            price: 188,
            image: "/images/best_seller4.png",
        },
        
    ]

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(0);

    if (selectedFilter === 0) {
        filteredProducts.sort((a, b) => a.id - b.id);
    }
    if (selectedFilter === 1) {
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (selectedFilter === 2) {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

  return (
    <div className='w-full min-h-screen pt-40 flex justify-center'>
        <div className='w-4/5'>
            <div className='w-full flex justify-between'>
                <h1 className='text-5xl text-primary font-dynapuff font-medium'>Shop</h1>

                <div className='flex gap-2'>
                    <div className='relative'>
                        <button
                            className="text-black transition-colors duration-300 hover:text-secondary bg-[#E8E8E8] px-4 py-3 rounded-full"
                            aria-label="Filter products"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
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

                            <div className={`absolute bg-[#E8E8E8] shadow-lg rounded-lg left-0 mt-2 z-10 w-77 ${isFilterOpen ? 'block' : 'hidden'}`}>
                                <ul className="text-gray-800">
                                    <li onClick={() => {
                                        setSelectedFilter(1);
                                        setIsFilterOpen(false);
                                    }} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Price: Low to High</li>
                                    <li onClick={() => {
                                        setSelectedFilter(2);
                                        setIsFilterOpen(false);
                                    }} className="px-4 py-3 hover:bg-gray-100 cursor-pointer">Price: High to Low</li>
                                    
                                </ul>
                            </div>
                    </div>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-[#E8E8E8] focus:outline-none rounded-full px-4 py-1' placeholder='Search...' />


                </div>

                
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12'>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                        
            </div>

        </div>
    </div>
  )
}
