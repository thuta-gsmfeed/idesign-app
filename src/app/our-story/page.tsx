import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import JourneyTimeline from "@/components/common/JourneyTimeline";
import StorySection from "@/components/common/StorySection";
import JoinTheLegacy from "@/components/common/JoinTheLegacy";


export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <StorySection />
            <FeaturesGrid />
            <JourneyTimeline />
            <JoinTheLegacy />
            <Footer />
        </main>
    );
}