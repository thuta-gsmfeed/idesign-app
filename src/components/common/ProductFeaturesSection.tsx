import React from 'react';
import Image from "next/image";

// Content for the three new sections
const feature1 = {
    title: 'World-Class Craftsmanship & Customization',
    paragraphs: [
        "At IDG, luxury isn't just a finish — it's an art form. Our 24k Gold iPhone represents the pinnacle of elegance, precision-plated in your choice of 24k Gold, Rose Gold, or Platinum. Each layer, crafted at 5-7 microns, combines enduring beauty with exceptional durability.",
        "Your iPhone deserves to be as unique as you are. Personalize it with your name, initials, logo, or even a custom design or photograph — whether it's a family emblem, a company insignia, or a symbol that defines you. At IDG, your imagination shapes your masterpiece.",
    ],
};

const feature2 = {
    title: 'The Perfect Frame of Luxury',
    paragraphs: [
        "The IDG Gold iPhone Frame transforms Apple's lightest, sleekest design into a true icon of sophistication. Every line, bevel, and curve is ringed with deep 24k gold, enhancing brilliance without altering the device's seamless design. For an added personal touch, engrave your name or initials — turning every piece into a one-of-a-kind expression of individuality.",
    ],
};

const feature3 = {
    title: 'Presented in Pure Elegance',
    paragraphs: [
        "Every IDG creation arrives in a handcrafted luxury leather box, designed to match the prestige of what's inside. Within, you'll find your customized iPhone, complete with Apple's original documentation and an IDG Certificate of Authenticity.",
        "A presentation that speaks refinement — whether as a gift of distinction or a personal indulgence, it's the ultimate statement of taste, exclusivity, and craftsmanship.",
    ],
};

// Reusable Text Card Component
const FeatureTextCard = ({ title, paragraphs }: { title: string, paragraphs: string[] }) => (
    <div
        className="
            rounded-2xl bg-gradient-to-br from-[#FBF9F3]/90 to-[#F5F2E8]/90
            backdrop-blur-sm shadow-2xl
            p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 2xl:p-12
            w-full
            max-w-[500px] sm:max-w-[550px] md:max-w-[650px]
            lg:max-w-[600px] lg:w-[600px]
            xl:max-w-[750px] xl:w-[750px]
            2xl:max-w-[890px] 2xl:w-[890px]
            mx-auto lg:mx-0

            flex flex-col justify-center
            lg:min-h-[380px] xl:min-h-[420px] 2xl:min-h-[460px]
        "
    >
        <h2 className="mb-4 md:mb-5 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#B8860B]">
            {title}
        </h2>
        <div className="space-y-3 md:space-y-3.5 lg:space-y-4 text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-gray-700 leading-relaxed">
            {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    </div>
);

// Reusable Image Component
const FeatureImage = ({ src, alt }: { src: string, alt: string }) => (
    <div className="flex justify-center w-full lg:w-auto lg:flex-shrink-0">
        <img
            src={src}
            alt={alt}
            className="
                rounded-2xl shadow-2xl object-cover
                w-full
                max-w-[500px] /* MODIFIED: Matched card's mobile max-width */
                sm:max-w-[550px] /* MODIFIED: Matched card's mobile max-width */
                md:max-w-[650px] /* MODIFIED: Matched card's mobile max-width */
                lg:max-w-[550px] lg:w-[550px]
                xl:max-w-[650px] xl:w-[650px]
                2xl:max-w-[754px] 2xl:w-[754px]
            "
            // Using the original aspect ratio from StorySection as a default.
            style={{ aspectRatio: '754 / 623' }}

        />
    </div>
);

const ProductFeaturesSection = () => {
    // Shared section padding with reduced 'py' values
    const sectionPadding = "py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 xl:py-12 xl:px-24 2xl:py-14 2xl:px-32\n";

    return (
        <>
            {/* Section 1: Craftsmanship (Image Left, Text Right) */}
            <section className={`relative overflow-hidden bg-white ${sectionPadding}`}>
                {/* MODIFIED: Removed mobile gap */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:gap-0 max-w-[1920px] mx-auto">
                    {/* Image Container */}
                    <FeatureImage src="/images/product-1.png" alt="World-Class Craftsmanship & Customization" />

                    {/* Text Card Container */}
                    {/* MODIFIED: Added mobile negative margin for overlap & centering */}
                    <div className="w-full lg:w-auto lg:flex-shrink-0 -mt-16 sm:-mt-24 md:-mt-32 lg:mt-0 lg:-ml-8 xl:-ml-16 2xl:-ml-24 mx-auto lg:mx-0">
                        <FeatureTextCard title={feature1.title} paragraphs={feature1.paragraphs} />
                    </div>
                </div>
            </section>

            {/* Section 2: Frame (Text Left, Image Right) */}
            <section className={`relative overflow-hidden bg-white ${sectionPadding}`}>
                {/* MODIFIED: Removed mobile gap */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:gap-0 max-w-[1920px] mx-auto">

                    {/* Text Card Container (Comes first in JSX) */}
                    {/* MODIFIED: Added centering */}
                    <div className="w-full lg:w-auto lg:flex-shrink-0 relative z-10 mx-auto lg:mx-0">
                        <FeatureTextCard title={feature2.title} paragraphs={feature2.paragraphs} />
                    </div>

                    {/* Image Container (Comes second, with negative margin) */}
                    {/* MODIFIED: Added mobile negative margin for overlap */}
                    <div className="flex justify-center w-full lg:w-auto lg:flex-shrink-0 -mt-16 sm:-mt-24 md:-mt-32 lg:mt-0 lg:-ml-8 xl:-ml-16 2xl:-ml-24">
                        <FeatureImage src="/images/product-2.png" alt="The Perfect Frame of Luxury" />
                    </div>
                </div>
            </section>

            {/* Section 3: Elegance (Image Left, Text Right) */}
            <section className={`relative overflow-hidden bg-white ${sectionPadding}`}>
                {/* MODIFIED: Removed mobile gap */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:gap-0 max-w-[1920px] mx-auto">
                    {/* Image Container */}
                    <FeatureImage src="/images/product-3.png" alt="Presented in Pure Elegance" />

                    {/* Text Card Container */}
                    {/* MODIFIED: Added mobile negative margin for overlap & centering */}
                    <div className="w-full lg:w-auto lg:flex-shrink-0 -mt-16 sm:-mt-24 md:-mt-32 lg:mt-0 lg:-ml-8 xl:-ml-16 2xl:-ml-24 mx-auto lg:mx-0">
                        <FeatureTextCard title={feature3.title} paragraphs={feature3.paragraphs} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductFeaturesSection;

