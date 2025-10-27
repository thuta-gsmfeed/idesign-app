import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
    description:
        "Discover bespoke luxury from IDesignGold. We create custom 24k gold iPhones, personalized tech, and accessories for icons worldwide.",
    keywords: [
        "IDesignGold",
        "Luxury iPhone",
        "Custom iPhone",
        "24k Gold iPhone",
        "Bespoke Technology",
        "Personalized Gifts",
        "Luxury Tech",
    ],
    authors: [{ name: "IDesignGold" }],

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
        title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
        description:
            "Experience the pinnacle of personalized luxury. IDesignGold crafts exquisite 24k gold iPhones and bespoke tech for discerning clients.",
        url: "https://idesign-app.vercel.app",
        siteName: "IDesignGold",
        images: [
            {
                url: "https://idesign-app.vercel.app/images/Thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "IDesignGold Luxury Custom iPhone",
                type: "image/jpeg", // Explicit MIME type
            },
        ],
        locale: "en_US",
        type: "website",
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
        description:
            "Discover bespoke luxury from IDesignGold. We create custom 24k gold iPhones, personalized tech, and accessories for icons worldwide.",
        images: ["https://idesign-app.vercel.app/images/Thumbnail.jpg"],
    },

    // SEO robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>{children}</CartProvider>
        </body>
        </html>
    );
}
