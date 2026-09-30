import React from 'react'

export default function Shop() {
  return (
    <div className='w-full min-h-screen pt-40 flex justify-center'>
        <div className='w-4/5'>
            <div className='w-full flex justify-between'>
                <h1 className='text-5xl text-primary font-dynapuff font-medium'>Shop</h1>

                <div className='flex'>
                    <button>Filters</button>
                    <input placeholder='Search...' />

                </div>
            </div>

        </div>
    </div>
  )
}
