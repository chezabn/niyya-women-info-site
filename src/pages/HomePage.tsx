import HeroSection from "../components/home/hero/HeroSection.tsx";
import Philosophy from "../components/sections/Philosophy";
import FeatureHighlights from "../components/home/FeatureHighlights";
import FeaturesOverview from "../components/sections/FeaturesOverview.tsx";
import FAQSection from "../components/sections/FAQSection";
import ScrollProgress from "../components/common/ScrollProgress.tsx";

export default function HomePage() {
    return (
        <>
            <ScrollProgress />

            <main>
                <HeroSection />
                <Philosophy />
                <FeaturesOverview />
                <FeatureHighlights />
                <FAQSection />
            </main>

        </>
    );
}
