export interface NavLinkItem {
    label: string;
    /** "/" = accueil, "/#faq" = section de l'accueil, "/contact" = autre page */
    to: string;
}

export const headerLinks: NavLinkItem[] = [
    { label: "Accueil", to: "/" },
    { label: "Fonctionnalités", to: "/#fonctionnalites" },
    // Décommentez ces deux lignes quand les pages existent :
    // { label: "Sécurité", to: "/securite" },
    // { label: "À propos", to: "/a-propos" },
    { label: "FAQ", to: "/#faq" },
    { label: "Contact", to: "/contact" },
];
