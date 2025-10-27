"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import Image from "next/image";
// --- (NEW) Import the useCart hook and CartDrawer component ---
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer'; // Import the new component

const navItems = [
    { name: 'iPhones', href: '/iphones' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // --- (NEW) Get cart functions and state ---
    const { openCart, cartCount } = useCart();

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    return (
        // Add relative positioning here to be an anchor for the cart badge
        <header className="w-full bg-white dark:bg-gray-950 sticky top-0 z-50 relative">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-3 md:px-6 pt-3 md:pt-7 relative z-50">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="IDG Logo"
                        width={100}
                        height={40}
                        className="h-auto"
                    />
                </Link>

                <div className="flex items-center space-x-1 md:space-x-4">
                    {/* ... (Nav Links Desktop - no changes) ... */}
                    <nav
                        className="hidden md:block rounded-2xl px-6 py-4"
                        style={{
                            backgroundColor: '#f8f5ee',
                        }}
                    >
                        <ul className="flex space-x-8 text-[15px] font-medium" style={{ color: '#a08d53' }}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="px-3 py-2 rounded-lg cursor-pointer hover:text-[#f1eee7] hover:bg-[#ae8b3b] transition-colors duration-150"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* ... (Right Icons - container) ... */}
                    <div className="flex items-center space-x-3">
                        {/* ... (Login Button - no changes) ... */}
                        <a
                            href="/login"
                            className="hidden md:block px-4 py-4 rounded-2xl "
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                                fontWeight: 'bold' // This will bold any text, but not the icon
                            }}
                            aria-label="Login"
                        >
                            {/* Add strokeWidth here to make the icon bolder */}
                            <User
                                className="h-5 w-5 cursor-pointer ease-in-out transition-transform duration-200 hover:scale-110"
                                strokeWidth={2.5}
                            />
                        </a>

                        {/* ... (Theme Toggle - no changes) ... */}
                        <div
                            className="hidden md:block p-3 rounded-2xl transition duration-150 ease-in-out cursor-pointer"
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                        >
                            <ThemeToggle />
                        </div>

                        {/* --- (MODIFIED) Cart Button --- */}
                        <button
                            // --- (NEW) Add onClick handler ---
                            onClick={openCart}
                            className="relative px-3 py-3 rounded-2xl transition duration-150 ease-in-out" // Added 'relative'
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                            aria-label="Open cart"
                        >
                            <Image
                                src="/images/shopping-bag.svg"
                                alt="Shopping Bag"
                                width={20}
                                height={20}
                                className="cursor-pointer ease-in-out  transition-transform duration-200 hover:scale-110"
                            />
                            {/* --- (NEW) Cart Count Badge --- */}
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center
                                                 rounded-full bg-blue-600 text-white text-xs font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* ... (Hamburger/Close Button - no changes) ... */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="px-4 py-4 rounded-2xl transition duration-150 ease-in-out"
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* ... (Mobile Menu Overlay - no changes) ... */}
            <div
                className={`
                    fixed top-0 left-0 w-full h-dvh pt-32 px-6 bg-[#f8f5ee] dark:bg-gray-950 z-40
                    flex flex-col items-center
                    transition-transform duration-300 ease-in-out
                    md:hidden
                    ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <nav>
                    <ul className="flex flex-col items-center space-y-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-3xl font-medium hover:text-[#ae8b3b] transition-colors duration-150"
                                    style={{ color: '#a08d53' }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a
                                href="/login"
                                className="text-3xl font-medium hover:text-[#ae8b3b] transition-colors duration-150"
                                style={{ color: '#a08d53' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Login
                            </a>
                        </li>

                        {/*<li className="pt-6">*/}
                        {/* <ThemeToggle />*/}
                        {/*</li>*/}

                        <li
                            className="p-3 rounded-2xl cursor-pointer" // Use 'p-3' instead of 'pt-3' to center
                            style={{
                                backgroundColor: '#ffffff', // White
                                color: '#a08d53',
                            }}
                        >
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </div>

            {/* --- (NEW) Render the Cart Drawer --- */}
            {/* It will be invisible by default and controlled by context state */}
            <CartDrawer />
        </header>
    );
};

export default Navbar;