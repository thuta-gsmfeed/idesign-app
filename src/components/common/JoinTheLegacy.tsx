"use client"; // Required for animations
import React from "react"; // Replaced next/image
// 1. Import motion
import { motion } from "framer-motion";

export default function JoinTheLegacy() {
    return (
        <footer className="w-full bg-white dark:bg-gray-950 relative overflow-hidden pt-12"
                style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            {/* Added pt-12 to footer, removed from inner div */}

            {/* --- Start: Constrained Text Content --- */}
            {/* 3. ANIMATION: Added motion wrapper */}
            <motion.div
                className="max-w-6xl mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-[#ae8b3b] dark:text-[#EBB639]">Join The Legacy</h2>
                    <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                        Our goal is simple — to make luxury personal again. Whether you&#39;re a global celebrity or a passionate
                        individual with an eye for perfection, IDG invites you to design the device that defines you.
                    </p>
                </div>
            </motion.div>
            {/* --- End: Constrained Text Content --- */}
        </footer>
    );
}
