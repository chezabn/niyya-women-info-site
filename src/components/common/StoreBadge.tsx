type StorePlatform = "apple" | "google";

interface StoreBadgeProps {
    platform: StorePlatform;
    href: string;
    className?: string;
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

export default function StoreBadge({
                                       platform,
                                       href,
                                       className = "",
                                   }: StoreBadgeProps) {
    const content = storeContent[platform];

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${content.label} ${content.title}`}
            className={`inline-flex min-h-14 items-center gap-3 rounded-xl bg-foreground px-5 py-2.5 text-white transition-transform hover:-translate-y-0.5 hover:bg-black ${className}`}
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
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 shrink-0"
                    aria-hidden="true"
                >
                    <path d="M3.5 2.7c-.3.3-.5.8-.5 1.4v15.8c0 .6.2 1.1.5 1.4l.1.1 8.9-9.3v-.2L3.6 2.6l-.1.1Zm10 10.5-2.1-2.1v-.2l2.1-2.1.1.1 2.5 1.4c.7.4.7 1 0 1.4l-2.5 1.4-.1.1ZM4.1 21.4l8.1-8.5-2.2-2.2-5.9 10.7Zm0-18.8 5.9 10.7 2.2-2.2-8.1-8.5Z" />
                </svg>
            )}

            <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wide text-white/80">
          {content.label}
        </span>

        <span className="text-base font-semibold">
          {content.title}
        </span>
      </span>
        </a>
    );
}