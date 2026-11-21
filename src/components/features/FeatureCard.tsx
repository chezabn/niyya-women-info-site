import type { Feature, FeatureSize } from "../../data/features";

interface FeatureCardProps {
    feature: Feature;
    className?: string;
}

const variants = {
    sand: {
        card: "border-primary-dark/10 bg-primary-light text-foreground",
        description: "text-muted",
        tile: "border border-primary-dark/10 bg-background text-primary-dark",
    },
    gold: {
        card: "border-primary/30 bg-primary text-foreground",
        description: "text-foreground/75",
        tile: "border border-foreground/10 bg-background/80 text-primary-dark",
    },
    dark: {
        card: "border-foreground bg-foreground text-background",
        description: "text-background/75",
        tile: "border border-background/15 bg-primary-light text-foreground",
    },
    white: {
        card: "border-primary-dark/10 bg-background text-foreground",
        description: "text-muted",
        tile: "border border-primary-dark/10 bg-primary-light text-primary-dark",
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
                group relative flex overflow-hidden rounded-3xl border
                p-7 md:p-8 lg:min-h-0
                transition-[translate,box-shadow] duration-300 ease-out
                hover:-translate-y-0.5 hover:shadow-md
                motion-reduce:transition-none motion-reduce:hover:translate-y-0
                ${layout.card}
                ${style.card}
                ${className}
            `}
        >
            {/* Icône */}
            <div
                className={`
                    flex items-center justify-center
                    transition-[scale] duration-500 ease-out
                    group-hover:scale-110 motion-reduce:scale-100 motion-reduce:transition-none
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
