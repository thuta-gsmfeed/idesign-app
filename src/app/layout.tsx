import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "next-themes"; // Not used as it's commented out below

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
    // Title: Clear, branded, and descriptive
    title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
    // Description: A compelling summary for search results
    description: "Discover bespoke luxury from IDesignGold. We create custom 24k gold iPhones, personalized tech, and accessories for icons worldwide.",
    // Keywords: Relevant terms for your business
    keywords: ["IDesignGold", "Luxury iPhone", "Custom iPhone", "24k Gold iPhone", "Bespoke Technology", "Personalized Gifts", "Luxury Tech"],
    authors: [{ name: "IDesignGold" }],

    // Open Graph (for Facebook, LinkedIn, etc.)
    openGraph: {
        title: "IDesignGold | Luxury Custom iPhones & Bespoke Technology",
        description: "Experience the pinnacle of personalized luxury. IDesignGold crafts exquisite 24k gold iPhones and bespoke tech for discerning clients.",
        url: "https://www.idesigngold.com", // Replace with your actual domain
        siteName: "IDesignGold",
        images: [
            {
                // IMPORTANT: Replace with a real URL to a high-quality branding image (1200x630px)
                url: "https://placehold.co/1200x630/b8860b/ffffff?text=IDesignGold",
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
        // site: "@idesigngold", // Add your Twitter handle if you have one
        // creator: "@idesigngold", // Add your Twitter handle if you have one
        // IMPORTANT: Replace with a real URL to a high-quality branding image (e.g., 1200x630px)
        images: ["https://placehold.co/1200x630/b8860b/ffffff?text=IDesignGold"],
    },

    // Helps search engines crawl your site
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

    // TODO: Add your favicon and manifest files to the /public folder and uncomment these
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
        {/*<ThemeProvider attribute="class" enableSystem defaultTheme="system">*/}
        {children}
        {/*</ThemeProvider>*/}
        </body>
        </html>
    );
}

