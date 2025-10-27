"use client"; // Required for framer-motion

import React from 'react';
// 1. Import motion
import { motion } from "framer-motion";

const StorySection = () => {
    const story = {
        title: 'The Story Behind IDG',
        paragraphs: [
            'It all began with a vision — a bold idea to transform the everyday smartphone into an extraordinary symbol of individuality and prestige.',
            'Founded in 2016 by Ben, IDG (International Designs Group) was born from a simple belief: technology should be personal, timeless, and beautifully crafted.',
            "From the start, Ben's passion for design, luxury, and innovation drove IDG forward. Our journey began in spectacular fashion — with none other than Conor McGregor, our very first superstar client. What began as one custom iPhone quickly evolved into a global movement of bespoke technology and craftsmanship.",
            'Today, IDG is synonymous with luxury, precision, and individuality. Our creations are proudly owned by icons like Lionel Messi, Anthony Joshua, Paris Hilton, Richard Mille, Armie Hammer, and countless others who share our appreciation for excellence.',
        ],
    };

    return (
        // RESPONSIVE: Adjusted padding to be more consistent
        // ✅ FIX: Added Poppins font family
        <section
            className="relative  bg-white dark:bg-gray-950 py-16 md:py-20 px-4 sm:px-6 lg:px-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            {/* ✅ FIX: Replaced next/image with <img> */}
            {/* ✅ FIX: Added responsive negative bottom positioning */}
            <img
                src="/images/story-section.png"
                alt="Decorative gold wave background"

                // ✅ FIX: Replaced all "bottom-[...]" classes with true vertical centering
                // ✅ FIX: Changed "object-bottom" to "object-center"
                className="absolute
                           top-1/2 left-0 right-0 -translate-y-1/2
                           w-full h-auto
                           object-fill object-center z-0"
            />

            {/* RESPONSIVE: Changed max-w-[1920px] to max-w-7xl to align with other sections */}
            {/* ✅ FIX: Removed mobile gap to allow for vertical overlap */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:gap-0 max-w-7xl mx-auto">

                {/* 2. ANIMATION: Image Container (slides from left) */}
                <motion.div
                    className="flex justify-center w-full lg:w-auto lg:flex-shrink-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/images/messi.png"
                        alt="Lionel Messi and Ben"
                        // ✅ FIX: Adjusted mobile max-width to match text card
                        className="
                            rounded-[40px] shadow-2xl object-cover
                            w-full max-w-md
                            lg:max-w-[550px] lg:w-[550px]
                            xl:max-w-[650px] xl:w-[650px]
                        "
                        // 2K/1440px size will be handled by the lg/xl fallbacks
                        style={{ aspectRatio: '754 / 623' }}
                    />
                </motion.div>

                {/* 2. ANIMATION: Text Card Container (slides from right) */}
                {/* ✅ FIX: Added negative top margin for mobile overlap, reset on desktop */}
                <motion.div
                    // ✅ FIX: Added mx-auto for mobile centering
                    className="w-full lg:w-auto lg:flex-shrink-0 -mt-16 sm:-mt-24 md:-mt-32 lg:mt-0 lg:-ml-8 xl:-ml-16 mx-auto lg:mx-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* ✅ FIX: Updated styles to match Adobe XD specs */}
                    <div
                        // ✅ FIX: Adjusted mobile max-width to match image
                        className="
                            bg-[#EDE5D4]/90
                            backdrop-blur-sm
                            rounded-[48px]
                            p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 2xl:p-12
                            w-full
                            max-w-md
                            lg:max-w-[600px] lg:w-[600px]
                            xl:max-w-[750px] xl:w-[750px]
                            mx-auto lg:mx-0

                        "
                        /* MODIFIED: Removed redundant inline opacity style */
                    >
                        {/* Added dark mode text color */}
                        <h2 className="mb-4 md:mb-5 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#ae8b3b] dark:text-[#EBB639]">
                            {story.title}
                        </h2>
                        {/* Added dark mode text color */}
                        <div className="space-y-3 md:space-y-3.5 lg:space-y-4 text-xs sm:text-sm md:text-base lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {story.paragraphs.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StorySection;

