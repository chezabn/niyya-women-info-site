import Header from "../components/layout/Header";
import HeroSection from "../components/home/hero/HeroSection.tsx";
import Philosophy from "../components/sections/Philosophy";
import FeatureHighlights from "../components/home/FeatureHighlights";
import Footer from "../components/layout/Footer";
import FeaturesOverview from "../components/sections/FeaturesOverview.tsx";

export default function HomePage() {
    return (
        <>
            <Header />

            <main>
                <HeroSection />
                <Philosophy />
                <FeatureHighlights />
                <FeaturesOverview />
            </main>

            <Footer />
        </>
    );
}
