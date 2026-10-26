"use client"
import React, { useState } from 'react'
import { useCart } from '@/src/context/CartContext';


export default function Cart() {
    const { cartItems, removeFromCart, clearCart, addToCart } = useCart();
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [shipping, setShipping] = useState(0);
    const total = subtotal + shipping;

    const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === 'free') {
            setShipping(0);
        } else if (event.target.value === 'delivery') {
            setShipping(5);
        }
    };

  return (
    <div className="w-full flex flex-col min-h-screen pt-28 sm:pt-40 pb-10 items-center">
        <div className="w-11/12 sm:w-4/5 flex flex-col h-full">
            <h1 className="text-3xl sm:text-4xl mb-4 text-primary font-dynapuff font-medium">My Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[620px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-gray-200 my-2 text-gray-500">
                                    <th className='py-4'></th>
                                    <th className='py-4'>Product</th>
                                    <th className='py-4'>Price</th>
                                    <th className='py-4'>Quantity</th>
                                    <th className='py-4'>Total</th>
                                    <th className='py-4'></th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="">
                                        <td className='py-4'><img src={item.image} alt={item.name} className="h-20 w-20 sm:h-28 sm:w-28 rounded-lg object-cover" /></td>
                                        <td className='py-4'>{item.name}</td>
                                        <td className='py-4'>RM{item.price.toFixed(2)}</td>
                                        <td className='py-4'>

                                            <button className=' text-gray-800 py-1 px-3' onClick={() => {
                                                // Implement quantity decrease logic here
                                                if(item.quantity > 1) {
                                                    addToCart(item, -1);
                                                }
                                            }}>
                                                -
                                            </button>
                                            <p className='inline-block mx-2 text-gray-800 py-1 px-3'>

                                            {item.quantity}
                                            </p>
                                            <button className=' text-gray-800 py-1 px-3' onClick={() => {
                                                // Implement quantity increase logic here
                                                addToCart(item, 1);
                                            }}>
                                                +
                                            </button>
                                        </td>
                                        <td className='py-4'>RM{(item.price * item.quantity).toFixed(2)}</td>
                                        <td className='py-4'>
                                            <button className='text-red-600' onClick={() => removeFromCart(item.id)}>x</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-8 my-10 sm:my-16 bg-gray-100 p-5 sm:p-8 rounded-lg">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl font-bold">Choose Shipping Method:</h1>
                                <div>
                                    <input defaultChecked type="radio" id="standard" name="shipping" value="free" className='mr-2' onChange={handleShippingChange} />
                                    <label htmlFor="standard">Pickup at store - FREE</label>
                                </div>
                                <div>
                                    <input type="radio" id="express" name="shipping" value="delivery" className='mr-2' onChange={handleShippingChange} />
                                    <label htmlFor="express">Delivery to home - RM5.00</label>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 w-full lg:w-1/3">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col items-start gap-4 text-gray-500 font-light">
                                        <h1>Subtotal</h1>
                                        <h1>Shipping</h1>
                                        <h1>Total</h1>
                                    </div>
                                    <div className="flex flex-col items-end gap-4">
                                        <h1>RM{subtotal.toFixed(2)}</h1>
                                        <h1>RM{shipping.toFixed(2)}</h1>
                                        <h1>RM{total.toFixed(2)}</h1>
                                    </div>
                                </div>

                                <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-tertiary transition-colors duration-300">Proceed to Checkout</button>

                            </div>

                        </div>
                </div>
            )}
      </div>
    </div>
  )
}
