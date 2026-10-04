"use client"
import React from 'react'
import { useCart } from '@/src/context/CartContext';

export default function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart();
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}
