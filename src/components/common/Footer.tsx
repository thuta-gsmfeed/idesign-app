"use client"; // Required for animations
import { ChevronDown } from 'lucide-react';
import React from "react";
// 1. Import motion
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {RegionCurrencyDropdown} from "@/components/common/RegionCurrencyDropdown";

const footerFeatures = [
    {
        title: 'Premium Materials',
        src: '/images/premium.svg',
    },
    {
        title: 'Worldwide Delivery',
        src: '/images/global-network.svg',
    },
    {
        title: '12 Months Warranty',
        src: '/images/warranty.svg',
    },
    {
        title: 'Secure payments',
        src: '/images/card.svg',
    }
];

// 2. Define animation variants for staggering
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Stagger each section
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
    },
};


export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-gray-950 relative overflow-hidden"
                style={{ fontFamily: 'Poppins, sans-serif' }}
        >

            {/* 3. ANIMATION: Added motion.div wrapper with variants */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                    paddingBottom: 8,
                }}
            >
                {/* ... (footerFeatures section - no changes) ... */}
                <motion.div
                    className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 py-12
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
                    before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']"
                    variants={itemVariants}
                >
                    {footerFeatures.map((feature) => (
                        <div
                            key={feature.title}
                            className="group flex flex-col items-center text-center cursor-pointer"
                        >
                            <Image
                                src={feature.src}
                                alt={feature.title}
                                width={40}
                                height={40}
                                className="mb-4 group-hover:-translate-y-1 transition-transform duration-300 dark:invert"
                            />
                            <h3 className="text-base font-medium text-black dark:text-white mt-auto
                                group-hover:text-[#ae8b3b] dark:group-hover:text-[#EBB639] transition-colors duration-300"
                            >
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </motion.div>

                {/* ... (Main footer content - no changes) ... */}
                <div className="pt-12">
                    <motion.div
                        className="flex justify-center mb-8"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/logo.png"
                                alt="IDG Logo"
                                width={100}
                                height={40}
                                className="h-auto"
                            />
                        </div>
                    </motion.div>
                    <motion.p
                        className="text-center text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 md:hidden"
                        variants={itemVariants}
                    >
                        Founded in 2016, IDG creates the worlds finest personalised smart phone devices
                        using luxury materials and state of the art designs, also used by some of the biggest
                        names in the sport and entertainment industry.
                    </motion.p>
                    <motion.nav
                        className="relative mx-auto my-5 w-full
               md:border-b-0 md:bg-[#F2F2F2] md:dark:bg-gray-800 md:rounded-lg md:px-6 md:py-2 md:w-fit"
                        variants={itemVariants}
                    >
                        <ul className="flex flex-col items-center space-y-0 md:flex-row md:space-y-0 md:space-x-8 text-[15px] font-medium">
                            <li className="relative w-auto text-center md:w-auto
                       before:absolute before:bottom-0 before:left-0 before:w-full before:h-px
                       before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']
                       md:before:hidden">
                                <Link
                                    href="/iphones"
                                    className="text-sm font-medium text-black dark:text-gray-200 hover:text-[#B8935E] dark:hover:text-[#B8935E] transition-colors px-3 py-4 md:py-2 block"
                                >
                                    iPhone Collection
                                </Link>
                            </li>
                            <li className="relative w-auto text-center md:w-auto
                       before:absolute before:bottom-0 before:left-0 before:w-full before:h-px
                       before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']
                       md:before:hidden">
                                <Link
                                    href="/accessories"
                                    className="text-sm font-medium text-black dark:text-gray-200 hover:text-[#B8935E] dark:hover:text-[#B8935E] transition-colors px-3 py-4 md:py-2 block"
                                >
                                    Accessories
                                </Link>
                            </li>
                            <li className="relative w-auto text-center md:w-auto
                       before:absolute before:bottom-0 before:left-0 before:w-full before:h-px
                       before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']
                       md:before:hidden">
                                <Link
                                    href="/our-story"
                                    className="text-sm font-medium text-black dark:text-gray-200 hover:text-[#B8935E] dark:hover:text-[#B8935E] transition-colors px-3 py-4 md:py-2 block"
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li className="relative w-auto text-center md:w-auto
                       before:absolute before:bottom-0 before:left-0 before:w-full before:h-px
                       before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']
                       md:before:hidden">
                                <Link
                                    href="/terms-of-service"
                                    className="text-sm font-medium text-black dark:text-gray-200 hover:text-[#B8935E] dark:hover:text-[#B8935E] transition-colors px-3 py-4 md:py-2 block"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li className="relative w-auto text-center md:w-auto
                       before:absolute before:bottom-0 before:left-0 before:w-full before:h-px
                       before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']
                       md:before:hidden">
                                <a
                                    href="#refund"
                                    className="text-sm font-medium text-black dark:text-gray-200 hover:text-[#B8935E] dark:hover:text-[#B8935E] transition-colors px-3 py-4 md:py-2 block"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </motion.nav>
                    <motion.p
                        className="text-center text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 hidden md:block"
                        variants={itemVariants}
                    >
                        Founded in 2016, IDG creates the worlds finest personalised smart phone devices
                        using luxury materials and state of the art designs, also used by some of the biggest
                        names in the sport and entertainment industry.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-4"
                        variants={itemVariants}
                    >
                        <RegionCurrencyDropdown />
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <img
                                    src="/images/apple-pay.svg"
                                    alt="Apple Pay"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain dark:invert"
                                />
                            </div>
                            <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <img
                                    src="/images/master-card.svg"
                                    alt="Mastercard"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain dark:invert"
                                />
                            </div>
                            <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <img
                                    src="/images/g-pay.svg"
                                    alt="Google Pay"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain dark:invert"
                                />
                            </div>
                            <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md">
                                <img
                                    src="/images/visa.svg"
                                    alt="Visa"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain dark:invert"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.p
                        className="text-center text-sm text-[#8E8E8E] dark:text-gray-500 leading-relaxed max-w-3xl mx-auto mt-5"
                        variants={itemVariants}
                    >
                        @ 2025 - IDG
                    </motion.p>
                </div>
            </motion.div>

            {/* --- (MODIFIED) Background Image Div ---
                1. src ကို "test-bar.jpg" သို့ ပြောင်းထားပါသည်။
                2. object-fill ကို object-cover သို့ ပြောင်းပြီး quality ထိန်းထားပါသည်။
                3. object-bottom ကို object-top သို့ ပြောင်းထားပါသည်။
                   ဒါက ပုံရဲ့ အပေါ်ပိုင်းကိုပဲ ယူပြီး အောက်ပိုင်းကို ဖြတ်ပစ်ပါလိမ့်မယ်။
            */}
            <div className="-mt-[60px] md:-mt-[120px] lg:-mt-[150px]">
                <img
                    src="/images/bar-bar.png"
                    alt="Decorative gold wave background"
                    className="w-full object-fit object-center
   h-32 sm:h-40 md:h-56 lg:h-64"
                />
            </div>

        </footer>
    );
}