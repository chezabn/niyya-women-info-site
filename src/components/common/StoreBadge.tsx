type StorePlatform = "apple" | "google";

/** "dark" : fond sombre, pour les fonds clairs. "light" : fond blanc, pour les fonds sombres (footer). */
type StoreBadgeVariant = "dark" | "light";

interface StoreBadgeProps {
    platform: StorePlatform;
    href: string;
    className?: string;
    variant?: StoreBadgeVariant;
}

const storeContent: Record<
    StorePlatform,
    { label: string; title: string }
> = {
    apple: {
        label: "Télécharger sur",
        title: "App Store",
    },
    google: {
        label: "DISPONIBLE SUR",
        title: "Google Play",
    },
};

const variants: Record<StoreBadgeVariant, { badge: string; label: string }> = {
    dark: {
        badge: "bg-foreground text-white hover:bg-black",
        label: "text-white/80",
    },
    light: {
        badge: "bg-white text-foreground hover:bg-primary-light",
        label: "text-foreground/70",
    },
};

export default function StoreBadge({
                                       platform,
                                       href,
                                       className = "",
                                       variant = "dark",
                                   }: StoreBadgeProps) {
    const content = storeContent[platform];
    const style = variants[variant];

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${content.label} ${content.title}`}
            className={`inline-flex min-h-14 items-center gap-3 rounded-xl px-5 py-2.5 transition-[translate,background-color] hover:-translate-y-0.5 ${style.badge} ${className}`}
        >
            {platform === "apple" ? (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 shrink-0"
                    aria-hidden="true"
                >
                    <path d="M16.37 12.85c.02 2.18 1.91 2.91 1.93 2.92-.02.05-.3 1.02-.99 2.02-.6.87-1.22 1.73-2.2 1.75-.96.02-1.27-.57-2.37-.57s-1.45.55-2.36.59c-.95.04-1.68-.94-2.29-1.8-1.24-1.8-2.19-5.09-.92-7.31.63-1.1 1.75-1.8 2.96-1.82.92-.02 1.79.62 2.36.62.56 0 1.62-.77 2.73-.66.46.02 1.76.19 2.59 1.4-.07.04-1.55.91-1.54 2.86ZM14.58 6.85c.5-.61.84-1.46.75-2.31-.73.03-1.61.49-2.13 1.1-.47.55-.88 1.42-.77 2.25.81.06 1.65-.41 2.15-1.04Z" />
                </svg>
            ) : (
                <img
                    src="/media/badges/google-play-store-fr.webp"
                    alt=""
                    className="h-7 w-7 shrink-0 object-contain"
                />
            )}

            <span className="flex flex-col text-left leading-tight">
                <span className={`text-[10px] font-medium uppercase tracking-wide ${style.label}`}>
                    {content.label}
                </span>

                <span className="text-base font-semibold">
                    {content.title}
                </span>
            </span>
        </a>
    );
}
