"use client"

// FIX 1: Removed FaMoon, FaSun and imported Image
import Image from "next/image";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            // Use a standard button for accessibility
            type="button"
            aria-label="Toggle theme"
            // Set background to transparent and remove borders
            // Added relative positioning for the absolute icons
            // Added a hover effect for better user experience
            // NOTE: The button size (h-6 w-6) was updated to match the original icon size
            className="relative flex h-6 w-6 items-center justify-center rounded-full bg-transparent transition-transform duration-200 hover:scale-110"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
        >
            {/* FIX 2: Replaced FaSun with next/Image */}
            <Image
                src="/images/light.svg"
                alt="Light mode"
                width={24} // Corresponds to h-6
                height={24} // Corresponds to w-6
                className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            {/* FIX 3: Replaced FaMoon with next/Image */}
            <Image
                src="/images/dark.svg"
                alt="Dark mode"
                width={24} // Corresponds to h-6
                height={24} // Corresponds to w-6
                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
        </button>
    )
}