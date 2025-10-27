'use client';

import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
    const {
        isCartOpen,
        closeCart,
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        subtotal,
        cartCount,
    } = useCart();

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={closeCart}
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300
          ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Cart Drawer */}
            <div
                className={`fixed top-0 right-0 w-full max-w-md h-full bg-white dark:bg-gray-950 shadow-xl z-50
                    flex flex-col transition-transform duration-300 ease-in-out
                    ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* --- Header --- */}
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-semibold">
                        Your Cart ({cartCount})
                    </h2>
                    <button
                        onClick={closeCart}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Close cart"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* --- Cart Items Area --- */}
                {cartItems.length === 0 ? (
                    // ... (Empty cart view - no changes) ...
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <Image
                            src="/images/shopping-bag.svg"
                            alt="Empty cart"
                            width={80}
                            height={80}
                            className="opacity-30"
                        />
                        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                            Your cart is empty.
                        </p>
                    </div>
                ) : (
                    // ... (Items list - no changes) ...
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={100}
                                    className="rounded-lg object-cover border dark:border-gray-700 aspect-[4/5]"
                                />
                                <div className="flex-1 flex flex-col">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.color} / {item.storage}
                                    </p>
                                    <p className="font-medium mt-1">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        {/* Quantity Stepper */}
                                        <div className="flex items-center border rounded-lg dark:border-gray-700">
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="p-2 text-gray-600 hover:text-black dark:hover:text-white"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="px-3 text-sm font-medium">
                        {item.quantity}
                      </span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="p-2 text-gray-600 hover:text-black dark:hover:text-white"
                                                aria-label="Increase quantity"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 text-gray-500 hover:text-red-500"
                                            aria-label="Remove item"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- (MODIFIED) Footer / Checkout --- */}
                {cartItems.length > 0 && (
                    <div className="mt-auto p-4 border-t dark:border-gray-700 space-y-4">
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        {/* --- (NEW) Button Container --- */}
                        <div className="space-y-3">
                            {/* "View Cart" Button */}
                            <Link href="/cart" passHref>
                                <button
                                    onClick={closeCart} // Close drawer on click
                                    className="w-full py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                             text-gray-800 dark:text-white rounded-full font-semibold transition-all
                             hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                    View Cart
                                </button>
                            </Link>

                            {/* "Checkout" Button */}
                            <Link href="/checkout" passHref>
                                <button
                                    onClick={closeCart} // Close drawer on click
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
                                >
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>

                    </div>
                )}
            </div>
        </>
    );
}