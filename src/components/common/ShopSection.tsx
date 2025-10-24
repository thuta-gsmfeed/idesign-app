"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
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
            ease: "easeInOut",
        },
    },
};


const ShopSection = () => {
    const items = [
        { title: "Shop iPhone", img: "/images/phone.png" },
        { title: "Shop Accessories", img: "/images/headphone.png" },
    ];

    return (
        <section className="pb-6 md:pb-16 bg-white dark:bg-gray-950 text-center overflow-hidden" >
            <motion.div
                className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-24"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col items-center"
                        variants={itemVariants}
                    >
                        {/* Image container */}
                        {/* FIX 1: Increased container height from h-[350px] md:h-[450px] */}
                        <div className="h-[450px] md:h-[550px] flex items-center justify-center">
                            <Image
                                src={item.img}
                                alt={item.title}
                                // FIX 2: Increased width and height props for better quality at the new size
                                // (Maintaining roughly the same aspect ratio)
                                width={310}
                                height={550}
                                className="object-contain h-full"
                            />
                        </div>

                        {/* Button with hover animations */}
                        <Button
                            className="group bg-[#f5f1e7] text-[#ae8b3b] px-8 py-4 text-sm transition-all duration-300 hover:shadow-xl hover:bg-[#ae8b3b] hover:text-[#f5f1e7] flex items-center"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            {item.title}
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ShopSection;