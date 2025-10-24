import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProductPage from "@/components/common/ProductPage";
import ProductFeaturesSection from "@/components/common/ProductFeaturesSection";
import AccessoriesPage from "@/components/common/AccessoriesPage";

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <AccessoriesPage />
            <ProductFeaturesSection />
            <Footer />
        </main>
    );
}