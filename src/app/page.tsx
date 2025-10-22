import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/common/HeroSection";
// import ShowcaseSection from "@/components/common/ShowcaseSection";
import ProcessSection from "@/components/common/ProcessSection";
import ShopSection from "@/components/common/ShopSection";
import TrustedSection from "@/components/common/TrustedSection";
import Footer from "@/components/common/Footer";
import AsSeenInSection from "@/components/common/AsSeenInSection";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <ShopSection />
            <ProcessSection />
            <AsSeenInSection />
            <TrustedSection />
            <Footer />
        </main>
    );
}