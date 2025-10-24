"use client"; // Added "use client" as framer-motion requires it

import React from "react"; // Replaced next/image
// 1. Import motion
import { motion, Variants } from "framer-motion";

// 2. Define animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger the individual cards
        },
    },
};

const cardVariants: Variants = {
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

export default function ProcessSection() {
    const processes = [
        {
            id: 1,
            title: 'Design Concept',
            description:
                'Our designers partner with you to sketch and refine the aesthetic — from shape, motifs to engraving style.',
            image: '/images/design-concept.png',
        },
        {
            id: 2,
            title: 'Material Selection',
            description:
                'Choose your gold: 24-karat solid, plated, or leaf. Decide finish—polished, matte, brushed.',
            image: '/images/material-selection.png',
        },
        {
            id: 3,
            title: 'Engraving & Detailing',
            description:
                'Laser precision or hand-etched — each mark considered, every line purposeful.',
            image: '/images/e-and-d.png',
        },
        {
            id: 4,
            title: 'Application & Assembly',
            description:
                'Gold elements are applied with care; assembly ensures every detail aligns and withstands wear.',
            image: '/images/app-and-assembly.png',
        },
        {
            id: 5,
            title: 'Finishing Touches',
            description:
                'Polishing, sealing, quality-assurance — ensuring beauty meets function.',
            image: '/images/finishing-touches.png',
        },
        {
            id: 6,
            title: 'Delivery & Packaging',
            description:
                'Elegant packaging, insured shipment. Unboxing as much a part of the experience as the phone itself.',
            image: '/images/delivery-and-packaging.png',
        },
    ];

    return (
        // Added dark mode bg
        <section className="w-full bg-white dark:bg-gray-950 py-16 overflow-hidden"
                 style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* 3. ANIMATION for Heading */}
                <motion.div
                    className="mb-12 text-center md:text-left px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* --- RESPONSIVE HEADING --- */}
                    <h2 className="text-4xl font-bold text-[#ae8b3b] sm:text-[50px] dark:text-[#EBB639]">
                        Our Process
                    </h2>
                    {/* --- Used standard text-base class --- */}
                    <p className="mt-4 text-base text-[#262f2e] dark:text-gray-300">
                        Every step handled by masters, delivering timeless beauty and flawless finish.
                    </p>
                </motion.div>

                {/* 4. ANIMATION & SCROLL CONTAINER */}
                <motion.div
                    // FIX: Changed space-x-6 to space-x-8 for more mobile gap
                    // FIX: Changed sm:gap-10 to sm:gap-16
                    className="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-16 sm:space-x-0 pb-4 sm:pb-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% of element is in view
                >
                    {processes.map((process) => (
                        // 5. ANIMATION for each Card
                        <motion.div
                            key={process.id}
                            // FIX: Changed rounded-2xl to rounded-3xl
                            // ✅ FIX 1: Added 'flex flex-col' to make the card a vertical flex container
                            className="group relative overflow-hidden rounded-3xl  hover:shadow-xl transition-shadow duration-300 dark:shadow-gray-700/50 dark:hover:shadow-gray-700/80 flex-shrink-0 w-[75vw] sm:w-auto flex flex-col"
                            variants={cardVariants}
                        >
                            {/* --- RESPONSIVE IMAGE HEIGHT --- */}
                            {/* EDITED: Increased height from h-56/md:h-64 to h-64/md:h-72 */}
                            <div className="relative h-64 overflow-hidden md:h-72">
                                {/* FIX: Replaced next/image with standard img tag */}
                                <img
                                    src={process.image}
                                    alt={process.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Darken gradient slightly more for dark mode visibility */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 dark:to-black/60" />
                            </div>

                            <div
                                // FIX: Added /90 for 90% opacity to bg and dark:bg
                                className="relative bg-gradient-to-br from-[#ede5d4]/90 to-[#ede5d4]/90 px-6 py-8 -mt-6 rounded-t-3xl text-center flex flex-col flex-1 backdrop-blur-sm shadow-2xl"
                            >
                                <h3 className="text-xl font-semibold text-black mb-3 dark:text-white">
                                    {process.title}
                                </h3>
                                <p className="text-sm text-gray-800 leading-relaxed dark:text-gray-300 flex-1">
                                    {process.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

