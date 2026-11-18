import { useState } from "react";

const navigationLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Fonctionnalités", href: "#fonctionnalites" },
    { label: "Sécurité", href: "#securite" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
                aria-label="Navigation principale"
            >
                {/* Logo */}
                <a
                    href="#accueil"
                    className="flex items-center gap-3"
                    aria-label="Niyya Women - Accueil"
                    onClick={closeMenu}
                >
                    <img
                        src="/media/logo.png"
                        alt=""
                        className="h-11 w-11 object-contain"
                    />

                    <span className="text-xl font-bold tracking-tight text-foreground">
            Niyya <span className="text-primary">Women</span>
          </span>
                </a>

                {/* Navigation desktop */}
                <div className="hidden items-center gap-8 lg:flex">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Action desktop */}
                <a
                    href="#telechargement"
                    className="hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md lg:inline-flex"
                >
                    Télécharger l'application
                </a>

                {/* Bouton menu mobile */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-gray-100 lg:hidden"
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                >
                    {isMenuOpen ? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Navigation mobile */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-black/5 bg-white px-5 py-5 lg:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-5">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#telechargement"
                            onClick={closeMenu}
                            className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                        >
                            Télécharger l'application
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}