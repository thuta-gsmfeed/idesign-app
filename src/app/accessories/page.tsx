import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProcessSection from "@/components/common/ProcessSection";
import ProductLists from "@/components/common/ProductLists";
import AccessoriesLists from "@/components/common/AccessoriesLists";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <AccessoriesLists />
            <ProcessSection />
            <Footer />
        </main>
    );
}