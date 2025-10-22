"use client";

import Link from 'next/link';
import Image from 'next/image'; // --- 1. Import Image ---
import { ShoppingBag } from 'lucide-react';
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
    { name: 'iPhones', href: '/iphones' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
    return (
        <header className="w-full bg-white dark:bg-gray-950">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="IDG Logo"
                        width={100}
                        height={40}
                        priority
                        className="h-auto"
                    />
                </Link>

                {/* Navigation + Icons */}
                <div className="flex items-center space-x-4">

                    {/* Nav Links */}
                    <nav
                        className="hidden md:block rounded-2xl px-5 py-2"
                        style={{
                            backgroundColor: '#f8f5ee',
                        }}
                    >
                        <ul className="flex space-x-8 text-[15px] font-medium" style={{ color: '#a08d53' }}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-[#937d45] transition-colors duration-150"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-3">
                        {/* Theme Toggle Button */}
                        <div
                            className="p-2 rounded-2xl transition duration-150 ease-in-out cursor-pointer"
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                        >
                            <ThemeToggle />
                        </div>

                        {/* Cart Button */}
                        <button
                            className="p-2 rounded-2xl transition duration-150 ease-in-out"
                            style={{
                                backgroundColor: '#f8f5ee',
                                color: '#a08d53',
                            }}
                        >
                            <ShoppingBag className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;