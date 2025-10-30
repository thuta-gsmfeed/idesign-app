"use client"
import React, { useState, useEffect } from 'react';

/**
 * Next.js app for Cookie Consent Banner Component (TypeScript Version)
 * This component stores the user's cookie consent decision in localStorage.
 * It will not be shown again once the user clicks "Accept" or "Decline".
 * It also displays a backdrop blur effect when active.
 */
export default function CookieConsentBanner(): React.ReactElement | null {
    // State to control if the banner is visible
    const [showBanner, setShowBanner] = useState<boolean>(false);

    // On component mount, check localStorage to see if consent has already been given.
    // We use useEffect to ensure this code runs only on the client-side (in the browser).
    useEffect(() => {
        // Check if window object is available (client-side)
        if (typeof window !== 'undefined') {
            const consent = localStorage.getItem('cookie_consent');

            // If no consent decision has been stored previously, show the banner.
            if (!consent) {
                setShowBanner(true);
            }
        }
    }, []); // [] empty dependency array means this effect runs only once on mount.

    // Handle "Accept" button click
    const handleAccept = (): void => {
        // Store the consent decision in localStorage
        localStorage.setItem('cookie_consent', 'accepted');
        // Hide the banner
        setShowBanner(false);
    };

    // Handle "Decline" button click
    const handleDecline = (): void => {
        // Store the consent decision in localStorage
        localStorage.setItem('cookie_consent', 'declined');
        // Hide the banner
        setShowBanner(false);

        // You can add logic here to disable any non-essential cookies (e.g., analytics scripts)
    };

    // If showBanner is false, render nothing
    if (!showBanner) {
        return null;
    }

    // JSX to render the banner and backdrop
    return (
        <>
            {/* Backdrop Element:
        This element covers the entire screen behind the banner,
        applying just a blur effect to the page content.
      */}
            <div
                className="fixed inset-0 z-40"
                aria-hidden="true"
            ></div>

            {/* Cookie Banner Content */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 shadow-lg p-4 md:p-6"
                style={{
                    backgroundColor: '#f5f1e7', // User requested background
                    color: '#ae8b3b' // User requested text color
                }}
            >
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-6">
                    {/* Banner Text (inherits text color from parent) */}
                    <div className="text-sm md:text-base text-center md:text-left">
                        <h3 className="font-semibold text-lg mb-1">Experience Our Site Your Way</h3>
                        <p>
                            Welcome to Idesign Gold. We use cookies to personalize your experience, analyze site traffic, and provide you with the best service for your custom phone needs. By clicking &#39;Accept&#39;, you agree to our use of cookies.
                        </p>
                    </div>

                    {/* Buttons (styled to match the new color scheme) */}
                    <div className="flex-shrink-0 flex items-center space-x-3">
                        <button
                            onClick={handleDecline}
                            className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors duration-200 text-sm font-medium"
                        >
                            Decline
                        </button>
                        <button
                            onClick={handleAccept}
                            className="px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity duration-200 text-sm font-medium"
                            style={{ backgroundColor: '#ae8b3b' }} // Accept button uses the gold color
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

