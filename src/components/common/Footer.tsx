import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import React from "react";

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

export default function Footer() {
    return (
        <footer className="w-full bg-white relative">
            {/*<Image*/}
            {/*    src="/images/bar.png"*/}
            {/*    alt="Decorative gold wave background"*/}
            {/*    fill*/}
            {/*    // Changed className here: removed object-cover (or ensure it's compatible)*/}
            {/*    // and added style for objectPosition*/}
            {/*    className="z-0 object-top-left "*/}
            {/*    style={{ objectFit: 'cover' }} // Custom object-position*/}
            {/*    priority*/}
            {/*/>*/}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12
before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
before:bg-gradient-to-r before:from-transparent before:via-[#ae8b3b] before:to-transparent before:content-['']">
                    {footerFeatures.map((feature) => (
                        <div
                            key={feature.title}
                            // You can remove justify-start, it's the default
                            className="flex flex-col items-center text-center"
                        >
                            <Image
                                src={feature.src}
                                alt={feature.title}
                                width={40}
                                height={40}
                                className="mb-4" // Removed "items-start"
                            />
                            <h3 className="text-base font-medium text-black mt-auto"> {/* Removed "items-end" and added "mt-auto" */}
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="py-12">
                    <div className="flex justify-center mb-8">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="IDG Logo"
                                width={100}
                                height={40}
                                priority
                                className="h-auto"
                            />
                        </div>
                    </div>

                    <nav className="hidden md:block bg-[#F2F2F2] rounded-lg px-6 py-2 mx-auto my-5 w-fit">
                        <ul className="flex justify-center items-center space-x-8 text-[15px] font-medium">
                            <a
                                href="#iphone-collection"
                                className="text-sm font-medium text-black hover:text-[#B8935E] transition-colors px-3"
                            >
                                iPhone Collection
                            </a>
                            <a
                                href="#accessories"
                                className="text-sm font-medium text-black hover:text-[#B8935E] transition-colors px-3"
                            >
                                Accessories
                            </a>
                            <a
                                href="#our-story"
                                className="text-sm font-medium text-black hover:text-[#B8935E] transition-colors px-3"
                            >
                                Our Story
                            </a>
                            <a
                                href="#terms"
                                className="text-sm font-medium text-black hover:text-[#B8935E] transition-colors px-3"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#refund"
                                className="text-sm font-medium text-black hover:text-[#B8935E] transition-colors px-3"
                            >
                                Refund Policy
                            </a>
                        </ul>
                    </nav>

                    <p className="text-center text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                        Founded in 2016, IDG creates the worlds finest personalised smart phone devices
                        using luxury materials and state of the art designs, also used by some of the biggest
                        names in the sport and entertainment industry.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                            <img
                                src="https://flagcdn.com/w40/ae.png"
                                alt="UAE flag"
                                className="w-6 h-4 object-cover"
                            />
                            <span className="text-sm font-medium">GBP £</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="px-3 py-2 bg-gray-100 rounded-md">
                                <Image
                                    src="/images/apple-pay.svg"
                                    alt="Apple Pay"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain"
                                />
                            </div>

                            <div className="px-3 py-2 bg-gray-100 rounded-md">
                                <Image
                                    src="/images/master-card.svg"
                                    alt="Mastercard"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain"
                                />
                            </div>

                            <div className="px-3 py-2 bg-gray-100 rounded-md">
                                <Image
                                    src="/images/g-pay.svg"
                                    alt="Google Pay"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain"
                                />
                            </div>

                            <div className="px-3 py-2 bg-gray-100 rounded-md">
                                <Image
                                    src="/images/visa.svg"
                                    alt="Visa"
                                    width={40}
                                    height={24}
                                    className="w-10 h-6 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-sm text-[#8E8E8E] leading-relaxed max-w-3xl mx-auto mt-5">
                        @ 2025 - IDG
                    </p>
                </div>
            </div>
        </footer>
    );
}