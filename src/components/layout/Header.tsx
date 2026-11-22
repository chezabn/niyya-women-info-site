import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { headerLinks, type NavLinkItem } from "../../data/navigation";
import { DownloadLinks, DownloadMenu } from "./DownloadMenu";

/**
 * Seules les pages (liens sans ancre) sont mises en évidence.
 * Un lien vers une section ("/#faq") ne l'est jamais : on ne peut pas savoir
 * si la personne est encore dans cette section après avoir fait défiler la page.
 */
function isPageActive(link: NavLinkItem, pathname: string): boolean {
    return !link.to.includes("#") && link.to === pathname;
}

interface NavItemProps {
    link: NavLinkItem;
    pathname: string;
    className: string;
    activeClassName: string;
    inactiveClassName: string;
    onNavigate?: () => void;
}

function NavItem({
                     link,
                     pathname,
                     className,
                     activeClassName,
                     inactiveClassName,
                     onNavigate,
                 }: NavItemProps) {
    const active = isPageActive(link, pathname);

    return (
        <Link
            to={link.to}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`${className} ${active ? activeClassName : inactiveClassName}`}
        >
            {link.label}
        </Link>
    );
}

export default function Header() {
    const { pathname, hash } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 8);

    const closeMenu = () => setIsMenuOpen(false);

    // Ombre légère quand la page défile
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Menu mobile : fermeture avec Échap, et si l'écran passe en mode desktop
    useEffect(() => {
        if (!isMenuOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };

        const desktop = window.matchMedia("(min-width: 1024px)");
        const onBreakpointChange = (event: MediaQueryListEvent) => {
            if (event.matches) setIsMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        desktop.addEventListener("change", onBreakpointChange);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            desktop.removeEventListener("change", onBreakpointChange);
        };
    }, [isMenuOpen]);

    // Clic sur le logo : retour en haut si on est déjà sur l'accueil
    const handleLogoClick = () => {
        closeMenu();

        if (pathname === "/" && !hash) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 border-b border-primary-dark/10 bg-background/95 backdrop-blur-md transition-shadow duration-300 ${
                isScrolled ? "shadow-sm" : "shadow-none"
            }`}
        >
            {/* Lien d'évitement pour la navigation au clavier (le <main> doit avoir id="contenu") */}
            <a
                href="#contenu"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-70 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
            >
                Aller au contenu
            </a>

            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
                aria-label="Navigation principale"
            >
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                    aria-label="Niyya Women - Accueil"
                    onClick={handleLogoClick}
                >
                    <img
                        src="/media/logo.png"
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain"
                    />

                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Niyya <span className="text-primary">Women</span>
                    </span>
                </Link>

                {/* Navigation desktop */}
                <div className="hidden items-center gap-8 lg:flex">
                    {headerLinks.map((link) => (
                        <NavItem
                            key={link.to}
                            link={link}
                            pathname={pathname}
                            className="text-sm font-medium transition-colors hover:text-primary"
                            activeClassName="text-primary"
                            inactiveClassName="text-foreground/70"
                        />
                    ))}
                </div>

                {/* Action desktop */}
                <div className="hidden lg:block">
                    <DownloadMenu />
                </div>

                {/* Bouton menu mobile */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary-light lg:hidden"
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </nav>

            {/* Navigation mobile : panneau qui se déroule par-dessus la page.
                Reste dans le DOM (aria-controls valide) mais "invisible" quand il est fermé,
                donc ses liens ne reçoivent pas le focus. */}
            <div
                id="mobile-navigation"
                className={`absolute inset-x-0 top-full grid border-b border-primary-dark/10 bg-background shadow-lg transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
                    isMenuOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                }`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                        {headerLinks.map((link) => (
                            <NavItem
                                key={link.to}
                                link={link}
                                pathname={pathname}
                                onNavigate={closeMenu}
                                className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-primary-light hover:text-primary-dark"
                                activeClassName="bg-primary-light text-primary-dark"
                                inactiveClassName="text-foreground/80"
                            />
                        ))}

                        <DownloadLinks onSelect={closeMenu} />
                    </div>
                </div>
            </div>
        </header>
    );
}
 