"use client"
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
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
        name: 'Michael R.',
        role: 'Business Owner',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Michael R.',
        role: 'Business Owner',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Michael R.',
        role: 'Business Owner',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Michael R.',
        role: 'Business Owner',
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        text: 'Envisage Capital Management helped me create a solid investment plan that gave me peace of mind. Their team is professional, approachable, and truly cares about my financial growth.',
        rating: 5,
    },
];

export default function TrustedSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth < 768) {
    //             setVisibleCards(1);
    //         } else if (window.innerWidth < 1024) {
    //             setVisibleCards(2);
    //         } else {
    //             setVisibleCards(3);
    //         }
    //     };
    //
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#ae8b3b]">
                    Trusted by Clients Worldwide
                </h2>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentSlide * 100) / visibleCards}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / visibleCards}%` }}
                            >
                                <div className="bg-white rounded-lg p-6 h-full flex flex-col">
                                    <div className="flex items-start gap-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                                        />
                                        <div className="flex-1">
                                            <div className="flex gap-1 mb-3">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <div key={i}
                                                         className="four-point-star bg-[#B9974D] w-[33.5px] h-[33.5px]"
                                                         style={{
                                                             clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)"
                                                         }}
                                                    ></div>
                                                ))}
                                            </div>
                                            <p className="text-[#979797] text-[17px] leading-relaxed mb-4 flex-1">
                                                {testimonial.text}
                                            </p>
                                            <div className="text-[17px] font-medium text-black">
                                                — {testimonial.name}, {testimonial.role}
                                            </div>
                                        </div>
                                    </div>

                                    {/*<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-1">*/}
                                    {/*    {testimonial.text}*/}
                                    {/*</p>*/}

                                    {/*<div className="text-sm font-medium text-black">*/}
                                    {/*    — {testimonial.name}, {testimonial.role}*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-12 bg-[#B8935E]'
                                    : 'w-12 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
