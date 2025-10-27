'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

// Import Navbar and Footer as per your app structure
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function CartPage() {
    const {
        cartItems,
        subtotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    return (
        <main className="overflow-x-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
                 style={{ fontFamily: 'Poppins, sans-serif' }}>

                {cartItems.length === 0 ? (
                    // --- Empty Cart View ---
                    <div className="flex flex-col items-center justify-center text-center py-20 px-6
                                    border border-gray-200 dark:border-gray-800 rounded-lg">
                        <ShoppingBag className="w-28 h-28 text-gray-300 dark:text-gray-700" />
                        <h1 className="mt-6 text-2xl font-semibold">
                            Your cart is empty
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Looks like you haven&#39;t added anything yet.
                        </p>
                        <Link href="/" passHref>
                            <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white
                                             rounded-full font-semibold transition-all shadow-lg hover:shadow-xl
                                             flex items-center gap-2">
                                <ArrowLeft className="w-5 h-5" />
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    // --- Cart View with Items ---
                    <>
                        {/* Title */}
                        <h1 className="text-3xl font-bold text-center md:text-left mb-10">
                            Your Shopping Cart
                        </h1>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">

                            {/* Column 1: Item List */}
                            <div className="lg:col-span-2">
                                {/* --- (MODIFIED) Using border-b on each item --- */}
                                <div className="border-t border-gray-200 dark:border-gray-800">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            // --- (MODIFIED) This is the new flex layout ---
                                            className="flex gap-4 sm:gap-6 py-8 border-b border-gray-200 dark:border-gray-800"
                                        >
                                            {/* --- Image --- */}
                                            <div className="flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={96} // 96px (w-24)
                                                    height={120} // 120px (h-30)
                                                    className="rounded-lg object-contain border border-gray-200 dark:border-gray-700
                                                               aspect-[4/5] bg-white sm:w-32 sm:h-40"
                                                />
                                            </div>

                                            {/* --- Details & Controls --- */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                {/* Top: Details */}
                                                <div>
                                                    <h3 className="font-semibold text-base sm:text-lg">{item.name}</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                        {item.color} / {item.storage}
                                                    </p>
                                                    {/* Mobile Price: This shows total price for the item */}
                                                    <p className="font-semibold text-base sm:text-lg mt-2 md:hidden">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>

                                                {/* Bottom: Controls */}
                                                <div className="flex items-center justify-between mt-4">
                                                    {/* Quantity Stepper */}
                                                    <div className="flex items-center border rounded-lg dark:border-gray-700">
                                                        <button
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            className="p-2.5 text-gray-600 hover:text-black dark:hover:text-white"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="px-4 text-sm font-medium">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => increaseQuantity(item.id)}
                                                            className="p-2.5 text-gray-600 hover:text-black dark:hover:text-white"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors"
                                                        aria-label="Remove item"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                        <span className="hidden sm:block">Remove</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* --- Desktop-Only Price --- */}
                                            <div className="hidden md:block flex-shrink-0">
                                                <p className="font-semibold text-xl text-right">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Column 2: Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm sticky top-28">
                                    <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                ${subtotal.toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                            <span>Shipping</span>
                                            <span className="text-sm">Calculated at checkout</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                            <span>Taxes</span>
                                            <span className="text-sm">Calculated at checkout</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 my-5"></div>

                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>

                                    <Link href="/checkout" passHref>
                                        <button className="mt-6 w-full py-3.5 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                                            Proceed to Checkout
                                        </button>
                                    </Link>

                                    <div className="text-center mt-4">
                                        <Link href="/" passHref>
                                            <span className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:underline cursor-pointer">
                                                <ArrowLeft className="w-4 h-4" />
                                                Continue Shopping
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </div>

            <Footer />
        </main>
    );
}