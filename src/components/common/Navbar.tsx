"use client";

import React, { useState, useEffect } from 'react';
// FIX 1: Removed ShoppingBag from lucide-react import
import { Menu, X, User } from 'lucide-react';

import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: 'iPhones', href: '/iphones' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <header className="w-full bg-white dark:bg-gray-950 sticky top-0 z-50">
            {/* FIX 2: Changed padding to px-3 md:px-6 and py-3 md:py-7 */}
            <div className="flex justify-between items-center max-w-7xl mx-auto px-3 md:px-6 pt-3 md:pt-7 relative z-50">

                <Link href="/" className="flex items-center">
                    {/* Replaced Image with img */}
                    <Image
                        src="/images/logo.png"
                        alt="IDG Logo"
                        width={100}
                        height={40}
                        className="h-auto"
                    />
                </Link>

                {/* FIX 3: Changed space-x-4 to space-x-1 md:space-x-4 */}
                <div className="flex items-center space-x-1 md:space-x-4">

                    {/* Nav Links (Desktop) */}
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

                    {/* Right Icons */}
                    <div className="flex items-center space-x-3">

                        {/* Login Button (Desktop Only) */}
                        <a
                            href="/login"
                            className="hidden md:block px-4 py-4 rounded-2xl "
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                            aria-label="Login"
                        >
                            <User className="h-5 w-5 cursor-pointer ease-in-out  transition-transform duration-200 hover:scale-110" />
                        </a>

                        {/* FIX 1: Theme Toggle Button (Desktop Only) - Added hidden md:block */}
                        <div
                            className="hidden md:block p-3 rounded-2xl transition duration-150 ease-in-out cursor-pointer"
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                        >
                            <ThemeToggle />
                        </div>

                        {/* Cart Button */}
                        <button
                            className="px-3 py-3 rounded-2xl transition duration-150 ease-in-out"
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                        >
                            {/* FIX 2: Replaced ShoppingBag icon with next/Image component */}
                            <Image
                                src="/images/shopping-bag.svg"
                                alt="Shopping Bag"
                                width={20} // Corresponds to w-5
                                height={20} // Corresponds to h-5
                                className="cursor-pointer ease-in-out  transition-transform duration-200 hover:scale-110"
                            />
                        </button>
                    </div>

                    {/* Hamburger/Close Button (Mobile Only) */}
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

            {/* === Mobile Menu Overlay (z-40) === */}
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
        </header>
    );
};

export default Navbar;