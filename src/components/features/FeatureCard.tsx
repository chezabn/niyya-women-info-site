import type { Feature, FeatureSize } from "../../data/features";

interface FeatureCardProps {
    feature: Feature;
    className?: string;
}

const variants = {
    sand: {
        card: "bg-[#EFE7D9] text-[#25241F]",
        description: "text-[#77736B]",
        tile: "bg-[#24231F] text-[#C89A2D]",
        decoration: "bg-[#C89A2D]/10",
    },
    gold: {
        card: "bg-[#C89A2D] text-white",
        description: "text-white/85",
        tile: "bg-[#24231F] text-[#C89A2D]",
        decoration: "bg-white/10",
    },
    dark: {
        card: "bg-[#24231F] text-white",
        description: "text-white/65",
        tile: "bg-[#C89A2D] text-[#24231F]",
        decoration: "bg-white/5",
    },
    white: {
        card: "bg-white text-[#25241F]",
        description: "text-[#77736B]",
        tile: "bg-[#24231F] text-[#C89A2D]",
        decoration: "bg-[#C89A2D]/5",
    },
};

const layouts: Record<
    FeatureSize,
    {
        card: string;
        tile: string;
        iconSize: number;
        content: string;
        title: string;
    }
> = {
    // Grande carte verticale (type "Smart Gifting")
    tall: {
        card: "flex-col justify-between min-h-[340px]",
        tile: "h-28 w-28 rounded-[32px] md:h-32 md:w-32",
        iconSize: 60,
        content: "",
        title: "text-3xl md:text-4xl",
    },
    // Carte large : texte à gauche, icône à droite (type "Built-in Calendar")
    wide: {
        card: "flex-row items-center justify-between gap-6 min-h-[220px]",
        tile: "order-2 h-24 w-24 shrink-0 rounded-[28px] md:h-28 md:w-28",
        iconSize: 48,
        content: "order-1 max-w-xs",
        title: "text-2xl md:text-3xl lg:text-4xl",
    },
    // Petite carte : icône en haut, texte en bas
    small: {
        card: "flex-col justify-between min-h-[220px]",
        tile: "h-14 w-14 rounded-2xl",
        iconSize: 26,
        content: "",
        title: "text-xl md:text-2xl",
    },
};

export default function FeatureCard({ feature, className = "" }: FeatureCardProps) {
    const Icon = feature.icon;
    const style = variants[feature.variant];
    const layout = layouts[feature.size];

    return (
        <article
            className={`
                group relative isolate flex overflow-hidden rounded-[24px]
                p-7 md:p-8 lg:min-h-0
                transition-all duration-500 ease-out
                hover:-translate-y-1 hover:shadow-xl
                ${layout.card}
                ${style.card}
                ${className}
            `}
        >
            {/* Décoration en arrière-plan */}
            <div
                aria-hidden="true"
                className={`
                    pointer-events-none absolute -right-16 -top-16 -z-10
                    h-56 w-56 rounded-full blur-3xl
                    transition-transform duration-700
                    group-hover:scale-125
                    ${style.decoration}
                `}
            />

            {/* Icône façon "objet 3D" */}
            <div
                className={`
                    flex items-center justify-center
                    shadow-lg transition-transform duration-500
                    group-hover:-rotate-6 group-hover:scale-105
                    ${layout.tile}
                    ${style.tile}
                `}
            >
                <Icon size={layout.iconSize} strokeWidth={1.4} aria-hidden="true" />
            </div>

            {/* Contenu */}
            <div className={`relative z-10 ${layout.content}`}>
                <h3 className={`font-semibold leading-tight tracking-tight ${layout.title}`}>
                    {feature.title}
                </h3>

                <p className={`mt-3 max-w-md text-sm leading-6 ${style.description}`}>
                    {feature.description}
                </p>
            </div>
        </article>
    );
}