"use client";   
import {createContext, useContext, useState, ReactNode} from "react";


interface CartItem {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]); 

    const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.slug === item.slug);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.slug === item.slug ? { ...i, quantity: i.quantity + quantity } : i
                );
            }
            return [...prevItems, { ...item, quantity: quantity }];
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    const removeFromCart = (id: string) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
