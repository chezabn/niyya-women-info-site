import { features } from "../../data/features";
import FeatureCard from "../features/FeatureCard";

/**
 * Grille de 3 colonnes x 3 lignes (desktop) :
 *
 *  ┌───────┬───────────────┐
 *  │       │      2 (large)│
 *  │   1   ├───────┬───────┤
 *  │ haute │   4   │   5   │
 *  ├───────┴───────┼───────┤
 *  │   3 (large)   │   6   │
 *  └───────────────┴───────┘
 */
const cardPlacement: Record<number, string> = {
    1: "md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2",
    2: "md:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1",
    3: "md:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3",
    4: "lg:col-start-2 lg:row-start-2",
    5: "lg:col-start-3 lg:row-start-2",
    6: "md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-3",
};

export default function FeaturesOverview() {
    return (
        <section
            id="fonctionnalites"
            aria-labelledby="features-overview-title"
            className="overflow-hidden bg-[#FAF8F3] px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#C89A2D]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A47C20]">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#C89A2D]" />
                        L’expérience Niyya Women
                    </span>

                    <h2
                        id="features-overview-title"
                        className="text-3xl font-semibold leading-tight tracking-tight text-[#25241F] md:text-5xl lg:text-6xl"
                    >
                        Tout ce dont vous avez besoin,
                        <span className="block text-[#C89A2D]">dans un seul espace.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#77736B] md:text-lg">
                        Un espace pensé pour vous exprimer, rester connectée et vivre pleinement votre expérience au sein de Niyya Women.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[230px]">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            className={cardPlacement[feature.id]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}