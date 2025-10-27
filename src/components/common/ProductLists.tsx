"use client"; // Required for framer-motion

import React from 'react';
// 1. Import motion
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    slug: string;
    price: string;
    img: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "24k Gold iPhone 17 Pro Max",
        slug: '24k-gold-iphone-17-pro-max',
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-17-Promax.png",
    },
    {
        id: 2,
        title: "24k Gold iPhone 17 Pro",
        slug: '24k-gold-iphone-17-pro',
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-17-Promax.png",
    },
    {
        id: 3,
        title: "24k Gold iPhone Air",
        slug: '24k-gold-iphone-17-air',
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-Air.png",
    },
    {
        id: 4,
        title: "24k Gold iPhone 17",
        slug: '24k-gold-iphone-17',
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-17.png",
    },
    {
        id: 5,
        title: "24k Gold S25 Ultra",
        slug: '24k-gold-s25-ultra',
        price: "From $2599",
        img: "/images/24K-Gold-S25-Ultra.png",
    },
    {
        id: 6,
        title: "24k Gold AirPods Max",
        slug: '24k-gold-airpods-max',
        price: "From $2599",
        img: "/images/headphone.png",
    },
];

// 2. Define animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger each card
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const ProductLists = () => {
    return (
        // RESPONSIVE: Added responsive padding, dark mode bg
        <section className="py-16 md:py-20 bg-white dark:bg-gray-950 text-center overflow-hidden">
            {/* 3. ANIMATION: Added motion to heading */}
            <motion.h2
                className="text-2xl md:text-3xl font-semibold text-[#bfa14a] dark:text-[#EBB639] mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Not Just a Phone. A Statement.
            </motion.h2>

            {/* 3. ANIMATION: Added motion to grid container */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {products.map((product) => (
                    // 3. ANIMATION: Added motion to each grid item
                    <motion.div
                        key={product.id}
                        className="flex flex-col items-center text-center group"
                        variants={itemVariants}
                    >
                        {/* RESPONSIVE: Adjusted height for better spacing */}
                        <div className="relative w-full h-64 md:h-72 mb-4">
                            {/* FIX: Replaced next/image with standard img tag */}
                            <Link href={`/iphones/${product.slug}`}>
                            <img
                                src={product.img}
                                alt={product.title}
                                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                            />
                            </Link>
                        </div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">{product.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{product.price}</p>
                        <Link href={`/iphones/${product.slug}`}>
                            <Button
                                variant="ghost"
                                className="mt-3 bg-[#f8f4ea] text-[#bfa14a] hover:bg-[#bfa14a] hover:text-white dark:bg-gray-800 dark:text-[#EBB639] dark:hover:bg-[#EBB639] dark:hover:text-black transition-all"
                            >
                                Buy
                            </Button>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ProductLists;
