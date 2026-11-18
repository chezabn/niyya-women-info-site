import { footerConfig } from "./footer.data";

export default function FooterBottom() {
    return (
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">

            <p className="text-xs text-white/40">
                {footerConfig.copyright}
            </p>

            <a
                href="#home"
                className="text-xs text-white/40 transition-colors hover:text-primary"
            >
                Retour en haut ↑
            </a>

        </div>
    );
}