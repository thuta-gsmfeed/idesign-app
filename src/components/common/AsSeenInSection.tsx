"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const logos = [
    { src: "/images/as-seen-in-1.png", alt: "American Rag Cie" },
    { src: "/images/as-seen-in-2.png", alt: "Dubai Marina Mall" },
    { src: "/images/as-seen-in-3.png", alt: "Daily Mail" },
    { src: "/images/as-seen-in-4.png", alt: "Harvey Nichols" },
    { src: "/images/as-seen-in-5.png", alt: "Rolls-Royce Motor Cars" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const logoVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

const AsSeenInSection = () => {
    const [isClient, setIsClient] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            className="bg-white dark:bg-gray-950 py-16 sm:py-20"
            style={{ fontFamily: "Poppins, sans-serif" }}
        >
            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <motion.h2
                    className="text-center text-[25px] md:text-3xl tracking-wide mb-12 dark:text-[#EBB639]"
                    style={{ color: "#ae8b3b" }}
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    As Seen In
                </motion.h2>

                <div className="relative w-full overflow-hidden group">
                    <motion.div
                        className={`flex flex-nowrap items-center gap-x-12 gap-y-8 ${
                            isMobile
                                ? "animate-marquee group-hover:[animation-play-state:paused]"
                                : "flex-wrap justify-center md:gap-x-16 lg:gap-x-20"
                        }`}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {logos.map((logo) => (
                            <motion.div
                                key={logo.alt}
                                className="flex-shrink-0"
                                variants={logoVariants}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 md:h-24 w-auto object-contain dark:invert"
                                    width={1}
                                    height={12}
                                />
                            </motion.div>
                        ))}

                        {/* Duplicate logos only for mobile to create the infinite loop */}
                        {isMobile &&
                            logos.map((logo) => (
                                <div
                                    key={`${logo.alt}-clone`}
                                    className="flex-shrink-0"
                                    aria-hidden="true"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-20 w-auto object-contain dark:invert"
                                        width={1}
                                        height={12}
                                    />
                                </div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AsSeenInSection;
