"use client";
import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-24 overflow-hidden min-h-screen bg-white ">

            {/* 1. BACKGROUND IMAGE */}
            <Image
                style={{
                    top: '-15%'
                }}
                src="/images/bar.png"
                alt="Decorative gold wave background"
                fill
                className="object-cover object-center z-0"
            />

            {/* 2. CONTENT BLOCK 1 (Stays on top with z-10) */}
            <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">

                <div className="flex-shrink-0">
                    <Image
                        src="/images/gold-iphone.png"
                        alt="Gold iPhone"
                        width={300}
                        height={600}
                        className="mx-auto"
                        priority
                    />
                </div>

                {/* 3. HEADLINE CONTAINER (Now always centered) */}
                <div className="flex flex-col items-start text-center">
                    {/* Headline */}
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-10"
                        style={{
                            backgroundImage: "linear-gradient(#AE8B3B, #EBB639, #D98D12, #C08D41)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textAlign: "left",
                        }}
                    >
                        Everything <br/> We Touch <br /> Turns To Gold.
                    </h1>

                    <div className="flex flex-wrap gap-4 justify-around items-start">
                        <Button
                            className="bg-[#f5f1e7] text-[#ae8b3b] px-8 py-4 text-sm transition-all duration-300 hover:shadow-xl flex items-center"
                        >
                            Shop iPhone
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            className="bg-[#f5f1e7] text-[#ae8b3b] px-8 py-4 text-sm transition-all duration-300 hover:shadow-xl flex items-center"
                        >
                            Shop Accessories
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* 4. CONTENT BLOCK 2 (Stays on top with z-10) */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center px-4 py-[100px]">

                {/* Left Large Image */}
                <div className="w-full md:col-span-3">
                    <Image
                        src="/images/ronaldinho.png"
                        alt="Celebrity holding gold iPhone"
                        width={600}
                        height={300}
                        className="w-full h-[620px] rounded-2xl object-cover"
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col gap-6 items-start">
                    <Image
                        src="/images/hero-section.png"
                        alt="Gold iPhone closeup"
                        width={600}
                        height={170}
                        className="w-[350px] h-[300px] rounded-2xl object-cover"
                    />
                    <Image
                        src="/images/hero-section-2.png"
                        alt="Gold iPhone closeup"
                        width={600}
                        height={170}
                        className="w-[350px] h-[300px] rounded-2xl object-cover"
                    />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;