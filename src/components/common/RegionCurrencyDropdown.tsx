// 1. Define the necessary interface for the data structure
import React from "react"; // Replaced next/image
// 1. Import motion
import { motion, Variants } from "framer-motion";
import { ChevronDown } from 'lucide-react';

interface CurrencyOption {
    country: string;
    flagCode: string;
    currency: string;
}

// Framer motion variants for the dropdown menu
const menuVariants: Variants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.95 },
    visible: { opacity: 1, y: 0, scaleY: 1,
        transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -10, scaleY: 0.95,
        transition: { duration: 0.15, ease: "easeIn" }
    }
};

// Data array with explicit type CurrencyOption[]
const currencyOptions: CurrencyOption[] = [
    { country: 'Argentina', flagCode: 'ar', currency: 'USD $' },
    { country: 'Australia', flagCode: 'au', currency: 'AUD A$' },
    { country: 'Austria', flagCode: 'at', currency: 'EUR €' },
    // Use 'ae' for United Arab Emirates (UAE) as default, though list is global
    { country: 'United Arab Emirates', flagCode: 'ae', currency: 'GBP £' },
    { country: 'Belgium', flagCode: 'be', currency: 'EUR €' },
    { country: 'Brazil', flagCode: 'br', currency: 'USD $' },
    { country: 'Bulgaria', flagCode: 'bg', currency: 'EUR €' },
    { country: 'Canada', flagCode: 'ca', currency: 'CAD C$' },
    { country: 'China', flagCode: 'cn', currency: 'CNY ¥' },
    { country: 'Croatia', flagCode: 'hr', currency: 'EUR €' },
    { country: 'Czechia', flagCode: 'cz', currency: 'EUR €' },
];

export function RegionCurrencyDropdown() {
    // 2. Use the defined interface for the state
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<CurrencyOption>(currencyOptions[3]);

    // 3. Define the correct type for the useRef hook for a DOM element
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    // Close the dropdown when clicking outside
    React.useEffect(() => {
        // 4. Define the correct type for the event handler
        function handleClickOutside(event: MouseEvent) {
            // event.target is of type EventTarget | null
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []); // Removed [dropdownRef] as it causes unnecessary re-renders

    // 5. Define the correct type for the select handler
    const handleSelect = (option: CurrencyOption) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative z-50" ref={dropdownRef}>
            {/* 1. Dropdown Button - Displays Selected Option */}
            <button
                // 6. Define the correct type for the click event
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault(); // Good practice to prevent form submission if wrapped in a <form>
                    setIsOpen(!isOpen);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-gray-200
                           rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors
                           focus:outline-none focus:ring-2 focus:ring-[#ae8b3b]"
            >
                <img
                    src={`https://flagcdn.com/w40/${selected.flagCode}.png`}
                    alt={`${selected.country} flag`}
                    className="w-6 h-4 object-cover"
                />
                <span className="text-sm font-medium">{selected.currency}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {/* 2. Dropdown Menu - Framer Motion for animation */}
            {isOpen && (
                <motion.div
                    className="absolute bottom-full mb-2 w-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
                               rounded-lg shadow-lg overflow-y-auto max-h-60"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // Important: Using 'bottom-full' and 'mb-2' to position it above the button,
                    // which is standard for footers to avoid being cut off.
                >
                    <ul className="py-1">
                        {currencyOptions.map((option: CurrencyOption) => (
                            <li
                                key={option.flagCode}
                                onClick={() => handleSelect(option)}
                                className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors
                                            ${selected.flagCode === option.flagCode
                                    ? 'bg-[#ae8b3b]/10 text-[#ae8b3b] dark:bg-[#ae8b3b]/20' // Selected style
                                    : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800' // Hover style
                                }`}
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${option.flagCode}.png`}
                                    alt={`${option.country} flag`}
                                    className="w-6 h-4 object-cover"
                                />
                                <span className="text-sm font-medium flex-1">
                                    {option.country} ({option.currency})
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
}