import React from 'react';
import Image from "next/image";

const StorySection = () => {
    const story = {
        title: 'The Story Behind IDG',
        paragraphs: [
            'It all began with a vision — a bold idea to transform the everyday smartphone into an extraordinary symbol of individuality and prestige.',
            'Founded in 2016 by Ben, IDG (International Designs Group) was born from a simple belief: technology should be personal, timeless, and beautifully crafted.',
            "From the start, Ben's passion for design, luxury, and innovation drove IDG forward. Our journey began in spectacular fashion — with none other than Conor McGregor, our very first superstar client. What began as one custom iPhone quickly evolved into a global movement of bespoke technology and craftsmanship.",
            'Today, IDG is synonymous with luxury, precision, and individuality. Our creations are proudly owned by icons like Lionel Messi, Anthony Joshua, Paris Hilton, Richard Mille, Armie Hammer, and countless others who share our appreciation for excellence.',
        ],
    };

    return (
        <section className="relative overflow-hidden bg-white py-20 px-6 sm:py-24 sm:px-8 md:py-28 md:px-12 lg:py-32 lg:px-16 xl:py-36 xl:px-24 2xl:py-40 2xl:px-32">
            <Image
                src="/images/bar.png"
                alt="Decorative gold wave background"
                fill
                className="object-cover object-center z-0"
                priority
            />

            {/* FIX: Removed lg:gap-*, xl:gap-*, 2xl:gap-* Kept mobile gap for flex-col stacking.
            */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-0 max-w-[1920px] mx-auto">

                {/* Image Container */}
                <div className="flex justify-center w-full lg:w-auto lg:flex-shrink-0">
                    <img
                        src="/images/messi.png"
                        alt="Lionel Messi and Ben"
                        className="
                            rounded-2xl shadow-2xl object-cover
                            w-full max-w-[350px]
                            sm:max-w-[400px]
                            md:max-w-[500px]
                            lg:max-w-[550px] lg:w-[550px]
                            xl:max-w-[650px] xl:w-[650px]
                            2xl:max-w-[754px] 2xl:w-[754px]
                        "
                        style={{ aspectRatio: '754 / 623' }}
                    />
                </div>

                {/* Text Card Container */}
                <div className="w-full lg:w-auto lg:flex-shrink-0 lg:-ml-8 xl:-ml-16 2xl:-ml-24">
                    <div
                        className="
                            rounded-2xl bg-gradient-to-br from-[#FBF9F3]/95 to-[#F5F2E8]/95
                            backdrop-blur-sm shadow-2xl
                            p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 2xl:p-12
                            w-full
                            max-w-[500px] sm:max-w-[550px] md:max-w-[650px]
                            lg:max-w-[600px] lg:w-[600px]
                            xl:max-w-[750px] xl:w-[750px]
                            2xl:max-w-[890px] 2xl:w-[890px]
                            mx-auto lg:mx-0
                        "
                    >
                        <h2 className="mb-4 md:mb-5 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-[#B8860B]">
                            {story.title}
                        </h2>
                        <div className="space-y-3 md:space-y-3.5 lg:space-y-4 text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-gray-700 leading-relaxed">
                            {story.paragraphs.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;