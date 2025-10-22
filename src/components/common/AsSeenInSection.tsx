"use client";
import Image from "next/image";
import React from "react";

// You can manage your logos in an array like this for easy mapping
const logos = [
    {
        src: "/images/as-seen-in-1.png",
        alt: "American Rag Cie",
        width: 140,
        height: 60,
    },
    {
        src: "/images/as-seen-in-2.png",
        alt: "Dubai Marina Mall",
        width: 120,
        height: 60,
    },
    {
        src: "/images/as-seen-in-3.png",
        alt: "Daily Mail",
        width: 150,
        height: 60,
    },
    {
        src: "/images/as-seen-in-4.png",
        alt: "Harvey Nichols",
        width: 160,
        height: 60,
    },
    {
        src: "/images/as-seen-in-5.png",
        alt: "Rolls-Royce Motor Cars",
        width: 150,
        height: 60,
    },
];

const AsSeenInSection = () => {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                <h2
                    className="text-center text-[25px] md:text-3xl tracking-wide mb-12"
                    style={{ color: "#ae8b3b" }}
                >
                    As Seen In
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-32">
                    {logos.map((logo) => (
                        <div key={logo.alt} className="flex-shrink-0">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                className="h-16 md:h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AsSeenInSection;