'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LuUpload } from 'react-icons/lu';

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
        <div className="min-h-screen bg-white flex items-center justify-center p-8">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center">
                    <div className="relative w-full max-w-md aspect-[3/4]">
                        <Image
                            src="/images/24K-Gold-Iphone-17-Promax.png"
                            alt="24k Gold iPhone 17 Pro Max"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <h1 className="text-4xl font-bold text-yellow-600">
                        24k Gold iPhone 17 Pro Max
                    </h1>

                    <div>
                        <div className="flex gap-8 mb-4">
                            {colorOptions.map((color) => (
                                <div key={color.id} className="text-center">
                                    <p className="text-sm mb-2">{color.name}</p>
                                    <button
                                        onClick={() => setSelectedColor(color.id)}
                                        className={`w-12 h-12 rounded-full ${color.colorClass} shadow-lg transition-all ${
                                            selectedColor === color.id
                                                ? 'ring-4 ring-offset-2 ring-blue-500 scale-110'
                                                : 'hover:scale-105'
                                        }`}
                                        aria-label={`Select ${color.name}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold mb-3">Storage</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {storageOptions.map((storage) => (
                                <button
                                    key={storage.id}
                                    onClick={() => setSelectedStorage(storage.id)}
                                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
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
                            <LuUpload className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                        </button>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="text-3xl font-bold text-blue-600">$2599</p>
                        <button className="px-12 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                            Buy
                        </button>
                    </div>

                    <div className="space-y-2 text-sm">
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
