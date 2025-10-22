import React from 'react';

interface Feature {
    title: string;
    description: string;
    src: string;
}

const features: Feature[] = [
    {
        title: 'Uncompromised Craftsmanship',
        description:
            'Every detail matters. From the thickness of the gold plating to the precision of the engraving, we hold ourselves to the highest standards of design and execution.',
        src: '/images/craftsmanship.svg',
    },
    {
        title: 'Exclusivity with Purpose',
        description:
            "Each device is made to order — tailored to reflect the individuality of its owner. Your iPhone isn’t just another product; it’s a personal masterpiece.",
        src: '/images/diamond.svg',
    },
    {
        title: 'Relationships Built on Trust',
        description:
            "We don’t see clients; we see partners. Our commitment to quality extends beyond the product — it’s about creating lasting relationships and a truly bespoke experience.",
        src: '/images/trust.svg',
    },
    {
        title: 'Innovation Meets Heritage',
        description:
            'We combine advanced techniques and materials with timeless design traditions. The result? A perfect balance of modern technology and enduring elegance.',
        src: '/images/innovation.svg',
    },
];

export default function FeaturesGrid() {
    return (
        <div className="w-full flex items-center justify-center p-6 bg-white">
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
                {features.map((feature, index) => {
                    const isLeft = index % 2 === 0;
                    const isTopRow = index < 2;

                    const color = 'rgba(156,163,175,1)'; // gray-400

                    // gradients
                    let rightBorderGradient = '';
                    let leftBorderGradient = '';
                    let bottomBorderGradient = '';

                    if (isTopRow) {
                        // 🟡 FIRST ROW — top fade → bottom dark
                        if (isLeft) {
                            rightBorderGradient = `linear-gradient(to bottom, rgba(0,0,0,0), ${color})`;
                            bottomBorderGradient = `linear-gradient(to right, rgba(0,0,0,0), ${color})`;
                        } else {
                            leftBorderGradient = `linear-gradient(to bottom, rgba(0,0,0,0), ${color})`;
                            bottomBorderGradient = `linear-gradient(to right, ${color}, rgba(0,0,0,0))`;
                        }
                    } else {
                        // 🟣 SECOND ROW — top dark → bottom fade
                        if (isLeft) {
                            rightBorderGradient = `linear-gradient(to bottom, ${color}, rgba(0,0,0,0))`;
                        } else {
                            leftBorderGradient = `linear-gradient(to bottom, ${color}, rgba(0,0,0,0))`;
                        }
                    }

                    return (
                        <div
                            key={index}
                            className="relative bg-white p-12 flex flex-col items-center text-center"
                        >
                            {/* Right border for left cards */}
                            {isLeft && (
                                <div
                                    className="absolute top-0 right-0 h-full w-[1px]"
                                    style={{ background: rightBorderGradient }}
                                />
                            )}

                            {/* Left border for right cards */}
                            {!isLeft && (
                                <div
                                    className="absolute top-0 left-0 h-full w-[1px]"
                                    style={{ background: leftBorderGradient }}
                                />
                            )}

                            {/* Bottom border only for top row */}
                            {isTopRow && (
                                <div
                                    className="absolute bottom-0 left-0 w-full h-[1px]"
                                    style={{ background: bottomBorderGradient }}
                                />
                            )}

                            <img
                                src={feature.src}
                                alt={feature.title}
                                className="w-12 h-12 mb-6"
                            />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base text-gray-600 max-w-md">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
