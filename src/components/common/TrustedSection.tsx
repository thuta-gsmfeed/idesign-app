"use client";
import { useState, useEffect } from 'react';
// 1. Import motion
import { motion, Variants } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    // ... (your testimonials data remains the same)
    {
        id: 1,
        name: 'Michael R.',
        role: 'Business Owner',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Jessica T.',
        role: 'Freelancer',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 3,
        name: 'David L.',
        role: 'Startup Founder',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Sarah K.',
        role: 'Doctor',
        image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit-crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Tom B.',
        role: 'Engineer',
        image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit-crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
];

// 2. Define animation variants
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function TrustedSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // 3. RESPONSIVENESS: This useEffect is now active
    useEffect(() => {
        const handleResize = () => {
            let newVisibleCards = 3; // Default for desktop
            if (window.innerWidth < 768) {
                newVisibleCards = 1; // Mobile
            } else if (window.innerWidth < 1024) {
                newVisibleCards = 2; // Tablet
            }
            setVisibleCards(newVisibleCards);
            setCurrentSlide(0); // Reset to first slide on resize
        };

        handleResize(); // Call once on initial mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures this runs only on mount and unmount

    // 4. SLIDER FIX: Updated auto-play logic
    useEffect(() => {
        const nextSlide = () => {
            setCurrentSlide((prev) => {
                // Calculate the last possible slide index
                const maxSlide = testimonials.length - visibleCards;
                // If current slide is at or past the max, loop to 0
                // Use >= to handle cases where testimonials.length < visibleCards
                if (prev >= maxSlide) {
                    return 0;
                }
                return prev + 1; // Otherwise, go to the next slide
            });
        };

        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [visibleCards, testimonials.length]); // Added testimonials.length dependency

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Calculate the number of "pages" or dots needed
    const numPages = testimonials.length > visibleCards ? testimonials.length - visibleCards + 1 : 1;

    return (
        <div className="w-full bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
             style={{ fontFamily: 'Poppins, sans-serif' }}
        >
            {/* 5. ANIMATION: Added motion.div wrapper */}
            <motion.div
                className="max-w-7xl mx-auto"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#ae8b3b] dark:text-[#EBB639]">
                    Trusted by Clients Worldwide
                </h2>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            // This logic is now correct because `currentSlide` will not exceed the max
                            transform: `translateX(-${(currentSlide * 100) / visibleCards}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / visibleCards}%` }}
                            >
                                {/* Added dark mode styles */}
                                <div className="rounded-lg p-6 h-full flex flex-col">

                                    {/* --- MOBILE LAYOUT (from your snippet) --- */}
                                    <div className="flex flex-col h-full md:hidden text-center justify-center items-center">
                                        <div className="flex items-start gap-4 mb-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                            />
                                        </div>
                                        <div className="flex gap-1 mb-3 mt-1"> {/* Added mt-1 for alignment */}
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <div key={i}
                                                     className="four-point-star bg-[#B9974D] w-[33.5px] h-[33.5px]"
                                                     style={{
                                                         clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)"
                                                     }}
                                                ></div>
                                            ))}
                                        </div>
                                        {/* flex-1 pushes author to the bottom */}
                                        <p className="text-[#979797] dark:text-gray-400 text-[17px] leading-relaxed mb-4 flex-1">
                                            {testimonial.text}
                                        </p>
                                        <div className="text-[17px] font-medium text-black dark:text-white">
                                            — {testimonial.name}, {testimonial.role}
                                        </div>
                                    </div>

                                    {/* --- DESKTOP LAYOUT (from screenshot) --- */}

                                    <div className="hidden items-start gap-4 mb-4 md:flex md:flex-col md:items-start md:text-start h-full">
                                        <div className="flex">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                            />
                                            <div className="flex-1 ml-3">
                                                <div className="flex gap-1 mb-3">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <div key={i}
                                                             className="four-point-star bg-[#B9974D] w-[30.5px] h-[30.5px]"
                                                             style={{
                                                                 clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)"
                                                             }}
                                                        ></div>
                                                    ))}
                                                </div>
                                                {/* Added dark mode styles */}
                                                <p className="text-[#979797] dark:text-gray-400 text-[17px] leading-relaxed mb-4 flex-1">
                                                    {testimonial.text}
                                                </p>
                                                <div className="text-[17px] font-medium text-black dark:text-white">
                                                    — {testimonial.name}, {testimonial.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. SLIDER FIX: Pagination dots now map over `numPages` */}
                <div className="flex justify-center gap-3 mt-8">
                    {/* Only show dots if there is more than one page */}
                    {numPages > 1 && [...Array(numPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-12 bg-[#B8935E]'
                                    : 'w-12 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

