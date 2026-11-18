import FooterCTA from "./FooterCTA";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import { footerNavigation } from "./footer.data";

export default function Footer() {
    return (
        <footer className="bg-[#171613]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

                {/* Call to action */}
                <FooterCTA />

                {/* Contenu principal */}
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

                    <FooterBrand />

                    {footerNavigation.map((group) => (
                        <FooterLinks
                            key={group.title}
                            group={group}
                        />
                    ))}

                </div>

                {/* Copyright */}
                <FooterBottom />

            </div>
        </footer>
    );
}