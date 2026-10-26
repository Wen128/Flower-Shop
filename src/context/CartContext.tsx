
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

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
  addToCart: (
    item: Omit<CartItem, "quantity">,
    quantity: number
  ) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load the saved cart when the app starts
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 2. Save cart whenever it changes
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems, isLoaded]);

  // 3. Add a product to the cart
  const addToCart = (
    item: Omit<CartItem, "quantity">,
    quantity: number
  ) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.slug === item.slug
      );

      if (existingItem) {
        return prevItems.map((i) =>
          i.slug === item.slug
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...prevItems, { ...item, quantity }];
    });
  };

  // 4. Remove a product
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.id !== id)
    );
  };

  // 5. Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
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