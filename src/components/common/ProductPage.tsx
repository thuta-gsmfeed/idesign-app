'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

// ... (interfaces and options constants are the same) ...
interface ColorOption {
    id: string;
    name: string;
    colorClass: string;
}
interface StorageOption {
    id: string;
    value: string;
}
const colorOptions: ColorOption[] = [
    {
        id: 'gold',
        name: 'Gold',
        colorClass: 'bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600'
    },
    {
        id: 'rose-gold',
        name: 'Rose Gold',
        colorClass: 'bg-gradient-to-br from-rose-200 via-rose-400 to-amber-700'
    },
    {
        id: 'platinum',
        name: 'Platinum',
        colorClass: 'bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500'
    },
];
const storageOptions: StorageOption[] = [
    { id: '256gb', value: '256 GB' },
    { id: '512gb', value: '512 GB' },
    { id: '1tb', value: '1 TB' },
    { id: '2tb', value: '2 TB' },
];


export default function ProductPage() {
    const [selectedColor, setSelectedColor] = useState('gold');
    const [selectedStorage, setSelectedStorage] = useState('256gb');

    const { addToCart, openCart } = useCart();
    const router = useRouter();

    // ... (createCartItem, handleAddToCart, handleBuyNow functions are the same) ...
    const createCartItem = (): Omit<CartItem, 'quantity'> => {
        const colorName = colorOptions.find(c => c.id === selectedColor)?.name || 'Unknown Color';
        const storageValue = storageOptions.find(s => s.id === selectedStorage)?.value || 'Unknown Storage';
        const price = 2599;
        const productName = '24k Gold iPhone 17 Pro Max';
        const productImage = '/images/product-detail.png';
        const uniqueId = `iphone-17-${selectedColor}-${selectedStorage}`;

        return {
            id: uniqueId,
            name: productName,
            price: price,
            image: productImage,
            color: colorName,
            storage: storageValue,
        };
    };

    const handleAddToCart = () => {
        const itemToAdd = createCartItem();
        addToCart(itemToAdd);
        openCart();
    };

    const handleBuyNow = () => {
        const itemToAdd = createCartItem();
        addToCart(itemToAdd);
        router.push('/checkout');
    };


    return (
        // --- (MODIFIED) ---
        // 1. Removed min-h-screen, flex, items-center, justify-center.
        // 2. This div is now just a section wrapper with background and horizontal padding.
        <div className="bg-white dark:bg-black p-4 md:p-8"
             style={{ fontFamily: 'Poppins, sans-serif' }}>

            {/* --- (MODIFIED) ---
                1. Added mx-auto to center the content.
                2. Added responsive vertical padding (py-*) to create space.
                   This looks good on all screen sizes without forcing 100vh.
            */}
            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 lg:py-24">

                {/* --- Image section (no changes) --- */}
                <div className="flex justify-center w-full max-w-md mx-auto aspect-[3/4]">
                    <img
                        src="/images/product-detail.png"
                        alt="24k Gold iPhone 17 Pro Max"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* --- Details section (no changes) --- */}
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#ae8b3b]">
                        24k Gold iPhone 17 Pro Max
                    </h1>

                    {/* Color options */}
                    <div>
                        <div className="flex gap-4 sm:gap-8 mb-4 justify-center md:justify-start">
                            {colorOptions.map((color) => (
                                <div key={color.id} className="text-center">
                                    <p className="text-sm mb-4">{color.name}</p>
                                    <button
                                        onClick={() => setSelectedColor(color.id)}
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all ${color.colorClass} ${
                                            selectedColor === color.id
                                                ? 'ring-2 ring-offset-2 ring-[#ae8b3b] scale-110' // Changed from ring-4 to ring-2
                                                : 'hover:scale-105'
                                        }`}
                                        aria-label={`Select ${color.name}`}
                                    ></button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Storage options */}
                    <div>
                        <h3 className="text-sm mb-3">Storage</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {storageOptions.map((storage) => (
                                <button
                                    key={storage.id}
                                    onClick={() => setSelectedStorage(storage.id)}
                                    className={`py-3 px-2 sm:px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                                        selectedStorage === storage.id
                                            ? 'border-[#ae8b3b] bg-[#f8f5ee] text-[#ae8b3b]'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    {storage.value}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* File upload */}
                    <div>
                        <h3 className="text-sm mb-3">File</h3>
                        <button className="w-full py-4 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-between transition-all group">
                            <span className="text-sm font-medium">Upload logo file</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-600 group-hover:text-gray-800" > <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <polyline points="17 8 12 3 7 8" /> <line x1="12" y1="3" x2="12" y2="15" /> </svg>
                        </button>
                    </div>

                    {/* Price and Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                        <p className="text-2xl sm:text-3xl font-bold text-blue-600">$2599</p>
                        <button
                            onClick={handleAddToCart}
                            className="w-full sm:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
                        >
                            Add to Cart
                        </button>
                        {/*<button*/}
                        {/*    onClick={handleBuyNow}*/}
                        {/*    className="w-full sm:w-auto px-10 py-3 bg-gray-800 hover:bg-black text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"*/}
                        {/*>*/}
                        {/*    Buy Now*/}
                        {/*</button>*/}
                    </div>

                    {/* Important Notes */}
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <p className="font-medium">Important Notes:</p>
                        <p className="italic">*Please upload your logo in Vector/PNG format. (2MP Max)</p>
                        <p className="italic">*Our design experts will refine your logo before production.</p>
                        <p className="italic">*Once you place your order, our team will contact you via email or phone to confirm the final design details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}