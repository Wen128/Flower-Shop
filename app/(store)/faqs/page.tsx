import FaqList from '@/src/components/FaqList'
import Image from 'next/image'
import React from 'react'

export default function Faqs() {
    const faqs = [
        {
            question: "How can I place an order?",
            answer: "You can place an order by browsing our online store, selecting the products you want, and adding them to your cart. Once you're ready, proceed to checkout and follow the instructions to complete your purchase."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order by browsing our online store, selecting the products you want, and adding them to your cart. Once you're ready, proceed to checkout and follow the instructions to complete your purchase."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order by browsing our online store, selecting the products you want, and adding them to your cart. Once you're ready, proceed to checkout and follow the instructions to complete your purchase."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order by browsing our online store, selecting the products you want, and adding them to your cart. Once you're ready, proceed to checkout and follow the instructions to complete your purchase."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order by browsing our online store, selecting the products you want, and adding them to your cart. Once you're ready, proceed to checkout and follow the instructions to complete your purchase."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order by browsing our online store, selecting the products you want, and adding them to your cart. Once you're ready, proceed to checkout and follow the instructions to complete your purchase."
        },
    ]
  return (
    <div>
        <div className="relative">
            <Image src="/images/about_bg.jpg" width={800} height={300} alt='About Flower Shop' className='w-full h-[40vh] sm:h-[50vh] object-cover object-[100%_75%] brightness-60'/>
            <h1 className="text-3xl sm:text-5xl px-4 font-dynapuff text-white text-center absolute inset-x-0 top-[18vh] sm:top-[25vh] flex justify-center">Frequently Asked Questions</h1>
        </div>

        <div className='min-h-screen flex justify-center py-16'>
            <FaqList faqs={faqs} />

        </div>
    </div>
  )
}
