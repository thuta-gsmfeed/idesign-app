'use client';

import { useState } from 'react';
// --- FIX: Replaced Next.js <Image> with standard <img> ---
// import Image from 'next/image';
// --- FIX: Removed react-icons import ---
// import { LuUpload } from 'react-icons/lu';

// --- REVERT: Updated interface back to colorClass ---
interface ColorOption {
    id: string;
    name: string;
    colorClass: string; // Was imageSrc
}

interface StorageOption {
    id: string;
    value: string;
}

// --- REVERT: Updated array to use colorClass gradients ---
const colorOptions: ColorOption[] = [
    { id: 'gold', name: 'Gold', colorClass: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600' },
    { id: 'rose-gold', name: 'Rose Gold', colorClass: 'bg-gradient-to-br from-rose-700 via-amber-800 to-stone-800' },
    { id: 'platinum', name: 'Platinum', colorClass: 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600' },
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

    return (
        // --- CHANGE 1: Responsive padding ---
        <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
            {/* --- CHANGE 1: Responsive grid layout and gap --- */}
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                {/* --- FIX: Replaced Next.js <Image> component with standard <img> tag --- */}
                <div className="flex justify-center w-full max-w-md mx-auto aspect-[3/4]">
                    <img
                        src="/images/24K-Gold-Iphone-17-Promax.png"
                        alt="24k Gold iPhone 17 Pro Max"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* --- CHANGE 1: Responsive text alignment and spacing --- */}
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    {/* --- CHANGE 1: Responsive text size --- */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-yellow-600">
                        24k Gold iPhone 17 Pro Max
                    </h1>

                    <div>
                        {/* --- CHANGE 1: Responsive gap and justification --- */}
                        <div className="flex gap-4 sm:gap-8 mb-4 justify-center md:justify-start">
                            {colorOptions.map((color) => (
                                <div key={color.id} className="text-center">
                                    <p className="text-sm mb-2">{color.name}</p>
                                    {/* --- REVERT: Applying colorClass and removing <img> --- */}
                                    <button
                                        onClick={() => setSelectedColor(color.id)}
                                        // --- CHANGE 1: Responsive button size ---
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all ${color.colorClass} ${
                                            selectedColor === color.id
                                                ? 'ring-4 ring-offset-2 ring-blue-500 scale-110'
                                                : 'hover:scale-105'
                                        }`}
                                        aria-label={`Select ${color.name}`}
                                    >
                                        {/* --- REVERT: Removed img tag --- */}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3">Storage</h3>
                        {/* This grid is already responsive, no changes needed */}
                        <div className="grid grid-cols-4 gap-3">
                            {storageOptions.map((storage) => (
                                <button
                                    key={storage.id}
                                    onClick={() => setSelectedStorage(storage.id)}
                                    className={`py-3 px-2 sm:px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                                        selectedStorage === storage.id
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    {storage.value}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3">File</h3>
                        <button className="w-full py-4 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 flex items-center justify-between transition-all group">
                            <span className="text-sm font-medium">Upload logo file</span>
                            {/* --- FIX: Replaced LuUpload icon with inline SVG --- */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </button>
                    </div>

                    {/* --- CHANGE 1: Responsive flex layout, gap, and justification --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                        {/* --- CHANGE 1: Responsive text size --- */}
                        <p className="text-2xl sm:text-3xl font-bold text-blue-600">$2599</p>
                        <button className="w-full sm:w-auto px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                            Buy
                        </button>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                        <p className="font-semibold italic">Important Notes:</p>
                        <p className="italic">*Please upload your logo in Vector/PNG format. (2MP Max)</p>
                        <p className="italic">*Our design experts will refine your logo before production.</p>
                        <p className="italic">*Once you place your order, our team will contact you via email or phone to confirm the final design details.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

