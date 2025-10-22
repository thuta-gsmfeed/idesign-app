"use client";
import Image from "next/image";
import React from "react";

const ShowcaseSection = () => {
    return (
        <section className="relative z-10 py-20 bg-white -mt-16 md:-mt-24">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center px-4">

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

export default ShowcaseSection;