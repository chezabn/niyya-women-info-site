import type { Feature } from "../../data/features";

interface FeatureCardProps {
    feature: Feature;
}

const variants = {
    sand: {
        card: "bg-[#EFE7D9] text-[#25241F]",
        description: "text-[#77736B]",
        icon: "bg-white/70 text-[#C89A2D]",
        decoration: "bg-[#C89A2D]/10",
    },

    gold: {
        card: "bg-[#C89A2D] text-white",
        description: "text-white/85",
        icon: "bg-white/20 text-white",
        decoration: "bg-white/10",
    },

    dark: {
        card: "bg-[#24231F] text-white",
        description: "text-white/65",
        icon: "bg-[#C89A2D] text-white",
        decoration: "bg-white/5",
    },

    white: {
        card: "bg-white text-[#25241F]",
        description: "text-[#77736B]",
        icon: "bg-[#C89A2D]/10 text-[#C89A2D]",
        decoration: "bg-[#C89A2D]/5",
    },
};

export default function FeatureCard({ feature }: FeatureCardProps) {
    const Icon = feature.icon;
    const style = variants[feature.variant];

    return (
        <article
            className={`
        group relative isolate overflow-hidden rounded-[24px]
        p-7 md:p-8
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-xl
        ${feature.featured ? "min-h-[270px]" : "min-h-[220px]"}
        ${feature.featured && feature.id === 1
                ? "flex flex-col justify-between md:row-span-2 md:min-h-[510px]"
                : "flex flex-col justify-between"}
        ${style.card}
      `}
        >
            {/* Décoration en arrière-plan */}
            <div
                aria-hidden="true"
                className={`
          pointer-events-none absolute -right-16 -top-16
          h-56 w-56 rounded-full blur-3xl
          transition-transform duration-700
          group-hover:scale-125
          ${style.decoration}
        `}
            />

            {/* Icône */}
            <div className="relative z-10 flex items-start justify-between">
                <div
                    className={`
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            ${style.icon}
          `}
                >
                    <Icon
                        size={27}
                        strokeWidth={1.7}
                        aria-hidden="true"
                    />
                </div>

                {feature.featured && (
                    <span className="rounded-full border border-current/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
            Essentiel
          </span>
                )}
            </div>

            {/* Contenu */}
            <div className="relative z-10 mt-10 max-w-lg">
                <h3
                    className={`
            font-semibold tracking-tight
            ${feature.featured
                        ? "text-2xl md:text-3xl lg:text-[34px]"
                        : "text-xl md:text-2xl"}
          `}
                >
                    {feature.title}
                </h3>

                <p
                    className={`
            mt-3 max-w-md text-sm leading-7
            ${style.description}
          `}
                >
                    {feature.description}
                </p>
            </div>

            {/* Numéro décoratif */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-3 select-none text-[150px] font-bold leading-none opacity-[0.045]"
            >
        0{feature.id}
      </span>
        </article>
    );
}