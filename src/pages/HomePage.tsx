import Header from "../components/layout/Header";
import HeroSection from "../components/home/hero/HeroSection.tsx";
import Philosophy from "../components/sections/Philosophy";
import FeatureHighlights from "../components/home/FeatureHighlights";
import Footer from "../components/layout/Footer";
import FeaturesOverview from "../components/sections/FeaturesOverview.tsx";
import FAQSection from "../components/sections/FAQSection";
import ScrollProgress from "../components/common/ScrollProgress.tsx";

export default function HomePage() {
    return (
        <>
            <ScrollProgress />
            <Header />

            <main>
                <HeroSection />
                <Philosophy />
                <FeatureHighlights />
                <FeaturesOverview />
                <FAQSection />
            </main>

            <Footer />
        </>
    );
}
