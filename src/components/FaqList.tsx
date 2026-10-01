'use client'
import React, { useState } from 'react'

interface FaqProps {
  question: string;
  answer: string;
}

interface FaqListProps {
  faqs: FaqProps[];
}

export default function FaqList({ faqs }: FaqListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} onClick={() => toggleFaq(index)} className="mb-8 transition-all z-20 cursor-pointer font-el-messiri w-3/5 mx-auto bg-[#FFEFEF] border border-tertiary text-tertiary p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center cursor-pointer z-20">
            <h3 className="text-xl font-bold z-20">{faq.question}</h3>
            <div className="flex justify-between items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 z-20 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          </div>
          
          <div className={`h-0 overflow-hidden transition-all duration-300 ${openIndex === index ? 'h-auto mt-4' : ''}`}>
            <p className="text-lg">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
