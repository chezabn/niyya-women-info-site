import PhoneMockup from "./PhoneMockup";
import PhilosophyContent from "./PhilosophyContent";
import RevealOnScroll from "../../common/RevealOnScroll.tsx";

export default function Philosophy() {
    return (
        <section className="overflow-hidden bg-[#FAF8F3]" id="philosophie">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-20 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:pt-24">

                {/* Téléphone */}
                <div className="flex justify-center lg:justify-start">
                    <div className="translate-y-20 sm:translate-y-28">
                        <RevealOnScroll variant="from-left" duration={1000}>
                            <PhoneMockup image="/media/philosophy.jpg" />
                        </RevealOnScroll>
                    </div>
                </div>

                {/* Présentation */}
                <div className="pb-20 lg:py-16">
                    <RevealOnScroll variant="from-right" duration={1000}>
                        <PhilosophyContent />
                    </RevealOnScroll>
                </div>

            </div>

        </section>
    );
}
