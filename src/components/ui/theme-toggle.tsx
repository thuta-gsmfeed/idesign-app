"use client"

import { FaMoon, FaSun } from "react-icons/fa";
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
            className="relative flex h-[22px] w-[25px] items-center justify-center rounded-full bg-transparent transition-transform duration-200 hover:scale-110"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
        >
            {/* Added transition-all for smooth animation */}
            <FaSun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    )
}