import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// --- (NEW) Import the providers ---
// import { ThemeProvider } from "next-themes"; // For dark mode
import { CartProvider } from "@/context/CartContext"; // For the shopping cart

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// ✅ SEO Friendly Metadata for IDesignGold
export const metadata: Metadata = {
    // ... (title, description, keywords, etc. are fine) ...
    title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
    description: "Discover bespoke luxury from IDesignGold. We create custom 24k gold iPhones, personalized tech, and accessories for icons worldwide.",
    keywords: ["IDesignGold", "Luxury iPhone", "Custom iPhone", "24k Gold iPhone", "Bespoke Technology", "Personalized Gifts", "Luxury Tech"],
    authors: [{ name: "IDesignGold" }],

    // Open Graph (for Facebook, LinkedIn, etc.)
    openGraph: {
        title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
        description: "Experience the pinnacle of personalized luxury. IDesignGold crafts exquisite 24k gold iPhones and bespoke tech for discerning clients.",
        url: "https://idesign-app.vercel.app/",
        siteName: "IDesignGold",
        images: [
            {
                // --- (FIXED) ---
                // Changed from "/images/Thumbnail.jpg" to the full, absolute URL
                url: "https://idesign-app.vercel.app//images/Thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "IDesignGold Luxury Custom iPhone",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
        description: "Discover bespoke luxury from IDesignGold. We create custom 24k gold iPhones, personalized tech, and accessories for icons worldwide.",
        // site: "@idesigngold",
        // creator: "@idesigngold",

        // --- (FIXED) ---
        // Updated this to use your real image, not the placeholder
        images: ["https://idesign-app.vercel.app/images/Thumbnail.jpg"],
    },

    // ... (robots, icons, etc. are fine) ...
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // icons: {
    //   icon: "/favicon.ico",
    //   apple: "/apple-touch-icon.png",
    // },
    // manifest: "/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* --- (FIXED) ---
            Re-enabled your ThemeProvider so your dark mode
            toggle in the Navbar will function correctly.
        */}
        {/*<ThemeProvider*/}
        {/*    attribute="class"*/}
        {/*    enableSystem*/}
        {/*    defaultTheme="system"*/}
        {/*>*/}
            <CartProvider>
                {children}
            </CartProvider>
        {/*</ThemeProvider>*/}
        </body>
        </html>
    );
}