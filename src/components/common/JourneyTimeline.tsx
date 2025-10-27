"use client"; // Required for framer-motion

import React from 'react';
// 1. Import motion
import { motion, Variants } from "framer-motion";

// 2. Define animation variants
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function JourneyTimeline() {
    return (
        // FIX 1: Changed min-h-screen to h-screen to make it a fixed full height
        <div className="w-full bg-gray-50 dark:bg-gray-900 overflow-hidden h-full flex flex-col"
             style={{ fontFamily: 'Poppins, sans-serif' }}
        >

            {/* FIX 2: Created a wrapper for text content that grows to fill space */}
            <div className="flex-1 pt-16 md:pt-20">
                {/* --- Start: Constrained Text Content --- */}
                {/* 3. ANIMATION: Added motion wrapper */}
                <motion.div
                    className="max-w-6xl mx-auto px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={itemVariants}
                >
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#ae8b3b] dark:text-[#EBB639]">Our Journey</h1>
                        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
                            From a small creative studio in 2016 to a global brand serving high-profile personalities across
                            continents, IDG has become a symbol of prestige in personal technology.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Our team of designers, engineers, and artisans work tirelessly to redefine what a luxury smartphone can
                            be. Each year, we introduce new finishes, patterns, and engraving options — expanding the boundaries of
                            personalization while staying true to our heritage of excellence.
                        </p>
                    </div>
                </motion.div>

                <div className="text-center">
                    <blockquote
                        className="text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-tight mb-10"
                        style={{
                            backgroundImage:
                                "linear-gradient(-45deg, #AE8B3B 0%, #EBB639 40%, #D98D12 55%, #C08D41 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        &#34;Welcome to IDG.<br />
                        Where technology meets artistry, and<br />
                        your story is plated in gold.&#34;
                    </blockquote>
                </div>
                {/* --- End: Constrained Text Content --- */}
            </div>


            {/* --- Start: Full-Width Image Section --- */}
            {/* 3. ANIMATION: Added motion wrapper */}
            {/* FIX 3: Removed vertical margin (my-12) so it sits at the bottom */}
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
            >
                {/* FIX: Replaced 'next/image' with a standard 'img' tag */}
                {/* ✅ FIX: Added specific height for mobile, reset to auto for larger screens */}
                <img
                    src="/images/our-journey.png"
                    alt="Our journey timeline visualization"
                    className="w-full h-full object-cover sm:object-contain dark:invert" // Increased mobile height
                />
            </motion.div>
            {/* --- End: Full-Width Image Section --- */}

        </div>
    );
}

