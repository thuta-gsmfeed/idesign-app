"use client";

import React from 'react';
import Image from "next/image"; // Now we are using this

export default function JourneyTimeline() {
    return (
        <div className="w-full bg-gray-50 py-16">

            {/* --- Start: Constrained Text Content --- */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-[#ae8b3b] mb-6">Our Journey</h1>
                    <p className="text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed">
                        From a small creative studio in 2016 to a global brand serving high-profile personalities across
                        continents, IDG has become a symbol of prestige in personal technology.
                    </p>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Our team of designers, engineers, and artisans work tirelessly to redefine what a luxury smartphone can
                        be. Each year, we introduce new finishes, patterns, and engraving options — expanding the boundaries of
                        personalization while staying true to our heritage of excellence.
                    </p>
                </div>
            </div>
            {/* --- End: Constrained Text Content --- */}


            {/* --- Start: Full-Width Image Section --- */}
            {/* This div is now outside max-w-6xl, so it can be full-width */}
            {/* This div is now just a simple wrapper */}
            <div className="w-full my-16">
                <Image
                    src="/images/our-journey.svg"
                    alt="Our journey timeline visualization"
                    width={1920}  // Give a base width (e.g., the SVG's design width)
                    height={600}  // Give a base height (adjust this to match the SVG)
                    className="w-full h-auto" // This makes it responsive
                />
            </div>
            {/* --- End: Full-Width Image Section --- */}


            {/* --- Start: Constrained Text Content --- */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-serif text-[#ae8b3b] mb-6">Join The Legacy</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
                        Our goal is simple — to make luxury personal again. Whether you&#39;re a global celebrity or a passionate
                        individual with an eye for perfection, IDG invites you to design the device that defines you.
                    </p>
                </div>

                <div className="text-center">
                    <blockquote
                        className="text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-tight mb-10"
                        style={{
                            backgroundImage: "linear-gradient(#AE8B3B, #EBB639, #D98D12, #C08D41)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        &#34;Welcome to IDG.<br />
                        Where technology meets artistry, and<br />
                        your story is plated in gold.&#34;
                    </blockquote>
                </div>
            </div>
            {/* --- End: Constrained Text Content --- */}

        </div>
    );
}