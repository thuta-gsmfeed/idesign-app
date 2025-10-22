"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    title: string;
    price: string;
    img: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "24k Gold iPhone 17 Pro Max",
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-17-Promax.png",
    },
    {
        id: 2,
        title: "24k Gold iPhone 17 Pro",
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-17-Promax.png",
    },
    {
        id: 3,
        title: "24k Gold iPhone Air",
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-Air.png",
    },
    {
        id: 4,
        title: "24k Gold iPhone 17",
        price: "From $2599",
        img: "/images/24K-Gold-Iphone-17.png",
    },
    {
        id: 5,
        title: "24k Gold S25 Ultra",
        price: "From $2599",
        img: "/images/24K-Gold-S25-Ultra.png",
    },
    {
        id: 6,
        title: "24k Gold AirPods Max",
        price: "From $2599",
        img: "/images/headphone.png",
    },
];

const ProductLists = () => {
    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#bfa14a] mb-10">
                Not Just a Phone. A Statement.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="relative w-48 h-56 md:w-56 md:h-64 mb-4">
                            <Image
                                src={product.img}
                                alt={product.title}
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                        </div>
                        <h3 className="font-medium text-gray-800">{product.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{product.price}</p>
                        <Button
                            variant="ghost"
                            className="mt-3 bg-[#f8f4ea] text-[#bfa14a] hover:bg-[#bfa14a] hover:text-white transition-all"
                        >
                            Buy
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductLists;
