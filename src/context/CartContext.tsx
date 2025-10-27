'use client';

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

// ... (CartItem interface is the same) ...
export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    color: string;
    storage: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    isCartOpen: boolean;
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (itemId: string) => void;
    // --- (NEW) Add new quantity handlers ---
    increaseQuantity: (itemId: string) => void;
    decreaseQuantity: (itemId: string) => void;
    openCart: () => void;
    closeCart: () => void;
    cartCount: number;
    subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const addToCart = (itemToAdd: Omit<CartItem, 'quantity'>) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === itemToAdd.id);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === itemToAdd.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...itemToAdd, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId: string) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        );
    };

    // --- (NEW) Logic for increasing quantity ---
    const increaseQuantity = (itemId: string) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // --- (NEW) Logic for decreasing quantity ---
    const decreaseQuantity = (itemId: string) => {
        setCartItems((prevItems) => {
            // Find the item
            const targetItem = prevItems.find((item) => item.id === itemId);

            // If quantity is 1, remove it from the cart
            if (targetItem?.quantity === 1) {
                return prevItems.filter((item) => item.id !== itemId);
            }

            // Otherwise, just decrease quantity
            return prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const cartCount = useMemo(
        () => cartItems.reduce((total, item) => total + item.quantity, 0),
        [cartItems]
    );

    const subtotal = useMemo(
        () =>
            cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        [cartItems]
    );

    const value = useMemo(
        () => ({
            cartItems,
            isCartOpen,
            addToCart,
            removeFromCart,
            // --- (NEW) Expose new functions ---
            increaseQuantity,
            decreaseQuantity,
            openCart,
            closeCart,
            cartCount,
            subtotal,
        }),
        // --- (NEW) Add dependencies ---
        [cartItems, isCartOpen, subtotal, cartCount]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// ... (useCart hook is the same) ...
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};