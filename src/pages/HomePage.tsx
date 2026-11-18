import Header from "../components/layout/Header";
import HeroSection from "../components/home/hero/HeroSection.tsx";
import Philosophy from "../components/sections/Philosophy";
import Footer from "../components/layout/Footer";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <HeroSection />
                <Philosophy />
            </main>

            <Footer />
        </>
    );
}