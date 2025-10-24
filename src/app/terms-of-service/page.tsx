import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import TermsOfService from "@/components/common/TermsOfService";


export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <TermsOfService />
            <Footer />
        </main>
    );
}