import { footerConfig } from "./footer.data";

export default function FooterBrand() {
    return (
        <div className="max-w-sm">

            <a
                href="#home"
                aria-label="Niyya Women - Accueil"
                className="inline-flex items-center"
            >
                <img
                    src="/media/logo.png"
                    alt="Niyya Women"
                    className="h-12 w-auto object-contain"
                />
            </a>

            <p className="mt-6 text-sm leading-7 text-white/55">
                {footerConfig.description}
            </p>

            <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                <span className="text-xs font-medium tracking-wide text-white/70">
          Un espace pensé pour elles.
        </span>
            </div>

        </div>
    );
}