"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link"; // ✅ add Variants here

// ✅ Type variants as Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const HeroSection = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center py-10 md:py-24 overflow-hidden min-h-screen bg-white dark:bg-gray-950"
            style={{ fontFamily: "Poppins, sans-serif" }}
        >
            <img
                src="/images/bar.png"
                alt="Decorative gold wave background"
                className="absolute top-0 left-0 right-0 w-full h-[1400px] md:h-[1200px] lg:h-[1200px] xl:h-[1200px] 2xl:h-[1460px] xl:object-bottom 2xl:object-bottom object-cover object-center z-0"
            />

            <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-3 lg:gap-20">
                <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/images/gold-iphone.png"
                        alt="Gold iPhone"
                        // ✅ HOVER EFFECT ADDED
                        className="w-[180px] md:w-[300px] h-auto transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </motion.div>

                <motion.div
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/*<motion.h1*/}
                    {/*    className="text-5xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-4"*/}
                    {/*    style={{*/}
                    {/*        backgroundImage:*/}
                    {/*            "linear-gradient(-80deg, #AE8B3B 0%, #EBB639 40%, #D98D12 55%, #C08D41 100%)",*/}
                    {/*        WebkitBackgroundClip: "text",*/}
                    {/*        WebkitTextFillColor: "transparent",*/}
                    {/*    }}*/}
                    {/*    variants={itemVariants}*/}
                    {/*>*/}
                    {/*    Everything <br/> We Touch <br/> Turns To Gold.*/}
                    {/*</motion.h1>*/}
                    <motion.h1
                        className="text-5xl md:text-5xl lg:text-7xl font-semibold leading-tight mb-4"
                        style={{
                            // The gradient
                            backgroundImage:
                                "linear-gradient(-80deg, #AE8B3B 0%, #EBB639 40%, #D98D12 55%, #C08D41 100%)",

                            // --- Standard CSS properties ---
                            backgroundClip: "text",
                            color: "transparent",

                            // --- Prefixed properties for older browsers ---
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        variants={itemVariants}
                    >
                        Everything <br/> We Touch <br/> Turns To Gold.
                    </motion.h1>

                    <motion.div
                        className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start"
                        variants={itemVariants}
                    >
                        <Link href="/iphones">
                            <Button
                                className="group bg-[#f5f1e7] text-[#ae8b3b] px-8 py-4 text-sm transition-all duration-300 hover:shadow-xl hover:bg-[#ae8b3b] hover:text-[#f5f1e7] flex justify-between"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                Shop iPhone
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/accessories">
                            <Button
                                className="group bg-[#f5f1e7] text-[#ae8b3b] px-8 py-4 text-sm transition-all duration-300 hover:shadow-xl hover:bg-[#ae8b3b] hover:text-[#f5f1e7] flex justify-between"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                Shop Accessories
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* MODIFIED: Removed 'group' from parent div */}
            <motion.div
                className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center px-4 pt-24 md:pt-[80px]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                {/* MODIFIED: Removed group-hover classes from wrapper */}
                <div className="w-full col-span-2 md:col-span-3">
                    <img
                        src="/images/ronaldinho.png"
                        alt="Celebrity holding gold iPhone"
                        // MODIFIED: Added individual hover effect
                        className="w-full h-[320px] md:h-[520px] lg:h-[520px] rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>

                <div className="col-span-1 md:col-span-1 flex flex-row md:flex-col gap-6 items-center">
                    <img
                        src="/images/hero-section.png"
                        alt="Gold iPhone closeup"
                        // MODIFIED: Added individual hover effect and removed group-hover
                        className="w-full md:w-[350px] h-[350px] md:h-[250px] lg:h-[250px] rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <img
                        src="/images/hero-section-2.png"
                        alt="Gold iPhone closeup"
                        // MODIFIED: Added individual hover effect and removed group-hover
                        className="w-full md:w-[350px] h-[350px] md:h-[250px] lg:h-[250px] rounded-2xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

