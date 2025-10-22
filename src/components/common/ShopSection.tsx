"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ShopSection = () => {
    const items = [
        { title: "Shop iPhone", img: "/images/phone.png" },
        { title: "Shop Accessories", img: "/images/headphone.png" },
    ];

    return (
        <section className="pb-20 bg-white text-center">
            <div className="flex flex-col md:flex-row justify-center items-start gap-12">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center px-10"
                    >
                        {/* 1. Increased parent container height from h-[400px] to h-[550px] */}
                        <div className="h-[400px] flex items-center justify-center">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={220}
                                // 2. Increased Image height from 400 to 500
                                height={500}
                                className="object-contain"
                            />
                        </div>

                        <Button
                            className="bg-[#f5f1e7] text-[#ae8b3b] px-8 py-4 text-sm transition-all duration-300 hover:shadow-xl flex items-center"
                        >
                            {item.title}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopSection;