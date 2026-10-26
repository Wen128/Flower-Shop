import Footer from '@/src/components/Footer'
import { Navbar } from '@/src/components/Navbar'
import React from 'react'

export default function Profile() {
  return (
    <div className='bg-[#F7F7F7] w-full '>
        <Navbar />

        <div className='w-11/12 sm:w-4/5 pt-28 sm:pt-32 py-8 sm:py-12 mx-auto'>
        <div className='bg-white shadow-lg rounded-2xl p-6 sm:p-12'>

            <h1 className='text-3xl sm:text-4xl mb-8 font-el-messiri font-semibold'>Profile</h1>

            <h1 className='text-gray-400 text-lg '>Name:</h1>
            <h1 className='text-gray-700 text-xl font-semibold'>Ali</h1>
            <br/>
            <h1 className='text-gray-400 text-lg'>Email:</h1>
            <h1 className='text-gray-700 text-xl  font-semibold'>ali@gmail.com</h1>
            <br/>
            <h1 className='text-gray-400 text-lg'>Phone Number:</h1>
            <h1 className='text-gray-700 text-xl font-semibold'>012-345 6789</h1>
            <br/>
            <h1 className='text-gray-400 text-lg'>Address:</h1>
            <h1 className='text-gray-700 text-xl font-semibold'>No.8, Jalan ABC, Taman DEF, 54321 Selangor</h1>
            <br/>
        </div>
        </div>

        <Footer />
    </div>
  )
}
