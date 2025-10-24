"use client"; // Required for framer-motion

import React from 'react';
// 1. Import motion
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Feature {
    title: string;
    description: string;
    src: string;
}

const features: Feature[] = [
    {
        title: 'Uncompromised Craftsmanship',
        description:
            'Every detail matters. From the thickness of the gold plating to the precision of the engraving, we hold ourselves to the highest standards of design and execution.',
        src: '/images/craftsmanship.svg',
    },
    {
        title: 'Exclusivity with Purpose',
        description:
            "Each device is made to order — tailored to reflect the individuality of its owner. Your iPhone isn’t just another product; it’s a personal masterpiece.",
        src: '/images/diamond.svg',
    },
    {
        title: 'Relationships Built on Trust',
        description:
            "We don’t see clients; we see partners. Our commitment to quality extends beyond the product — it’s about creating lasting relationships and a truly bespoke experience.",
        src: '/images/trust.svg',
    },
    {
        title: 'Innovation Meets Heritage',
        description:
            'We combine advanced techniques and materials with timeless design traditions. The result? A perfect balance of modern technology and enduring elegance.',
        src: '/images/innovation.svg',
    },
];

// 2. Define animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger each card
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

export default function FeaturesGrid() {
    return (
        // RESPONSIVE: Added responsive padding, dark mode
        <div className="w-full flex items-center justify-center px-6 sm:px-8 md:px-12 bg-white dark:bg-gray-950"
             style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            {/* 3. ANIMATION: Added motion.div wrapper with variants */}
            <motion.div
                className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 relative overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((feature, index) => {
                    // --- Border Logic ---
                    const isLeft = index % 2 === 0;
                    const isTopRow = index < 2;
                    const isLastItem = index === features.length - 1;

                    // RESPONSIVE: Use a lighter color for dark mode
                    const color = 'rgba(156,163,175,0.5)'; // gray-400 with 50% opacity
                    const darkColor = 'rgba(107, 114, 128, 0.5)'; // gray-500 with 50% opacity

                    // gradients for desktop
                    let rightBorderGradient = '';
                    let leftBorderGradient = '';
                    let bottomBorderGradient = '';

                    // Note: This logic correctly targets the 2-column grid
                    if (isTopRow) {
                        if (isLeft) {
                            rightBorderGradient = `linear-gradient(to bottom, rgba(0,0,0,0), ${color}, ${color})`;
                            bottomBorderGradient = `linear-gradient(to right, rgba(0,0,0,0), ${color})`;
                        } else {
                            leftBorderGradient = `linear-gradient(to bottom, rgba(0,0,0,0), ${color}, ${color})`;
                            bottomBorderGradient = `linear-gradient(to right, ${color}, rgba(0,0,0,0))`;
                        }
                    } else {
                        if (isLeft) {
                            rightBorderGradient = `linear-gradient(to bottom, ${color}, ${color}, rgba(0,0,0,0))`;
                        } else {
                            leftBorderGradient = `linear-gradient(to bottom, ${color}, ${color}, rgba(0,0,0,0))`;
                        }
                    }

                    return (
                        // 4. ANIMATION: Added motion.div to each item
                        <motion.div
                            key={index}
                            // HOVER FIX: Added transition-colors, hover:bg-gray-50, and dark:hover:bg-gray-800
                            className="relative bg-white dark:bg-gray-950 p-8 sm:p-10 md:p-12 flex flex-col items-center text-center transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                            variants={itemVariants}
                            // HOVER FIX: Added whileHover prop for a subtle scale effect
                            // whileHover={{ scale: 1.03 }}
                        >
                            {/* --- DESKTOP BORDERS (hidden on mobile) --- */}
                            {isLeft && (
                                <div
                                    className="absolute top-0 right-0 h-full w-[1px] hidden md:block"
                                    style={{ background: rightBorderGradient }}
                                />
                            )}
                            {!isLeft && (
                                <div
                                    className="absolute top-0 left-0 h-full w-[1px] hidden md:block"
                                    style={{ background: leftBorderGradient }}
                                />
                            )}
                            {isTopRow && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-[1px] hidden md:block"
                                    style={{ background: bottomBorderGradient }}
                                />
                            )}

                            {/* --- MOBILE BORDERS (block on mobile, hidden on desktop) --- */}
                            {!isLastItem && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-[1px] block md:hidden dark:hidden"
                                    style={{ background: `linear-gradient(to right, rgba(0,0,0,0), ${color}, rgba(0,0,0,0))` }}
                                />
                            )}
                            {/* Dark mode mobile border */}
                            {!isLastItem && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-[1px] hidden md:hidden dark:block"
                                    style={{ background: `linear-gradient(to right, rgba(0,0,0,0), ${darkColor}, rgba(0,0,0,0))` }}
                                />
                            )}

                            {/* --- CONTENT --- */}
                            <Image
                                width={3}
                                height={1}
                                src={feature.src}
                                alt={feature.title}
                                className="w-12 h-12 mb-6 dark:invert" // Invert icon for dark mode
                            />
                            {/* RESPONSIVE: Adjusted text size, added dark mode */}
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base text-gray-600 dark:text-gray-300 max-w-md">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
