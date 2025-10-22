import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProcessSection from "@/components/common/ProcessSection";
import ProductLists from "@/components/common/ProductLists";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <ProductLists />
            <ProcessSection />
            <Footer />
        </main>
    );
}