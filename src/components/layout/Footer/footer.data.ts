export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}

export const footerNavigation: FooterLinkGroup[] = [
    {
        title: "Découvrir",
        links: [
            { label: "Accueil", href: "/#accueil" },
            { label: "Fonctionnalités", href: "/#fonctionnalites" },
            { label: "Télécharger l'application", href: "/#telechargement" },
        ],
    },
    {
        title: "Communauté",
        links: [
            { label: "Notre philosophie", href: "/#philosophie" },
            { label: "Questions fréquentes", href: "/#faq" },
            { label: "Nous contacter", href: "/contact" },
        ],
    },
    {
        title: "Informations",
        links: [
            { label: "Mentions légales", href: "/legal/mentions-legales" },
            { label: "Politique de confidentialité", href: "/legal/politique-de-confidentialite" },
            { label: "Conditions d'utilisation", href: "/legal/conditions-generales-d-utilisation" },
        ],
    },
];

export const footerConfig = {
    brandName: "Niyya Women",
    description:
        "Bien plus qu'un réseau social, un espace pensé pour les femmes. Partagez, découvrez et exprimez-vous au sein d'une communauté qui vous est dédiée.",
    copyright: "© 2026 Niyya Women. Tous droits réservés.",
    appStoreUrl: "https://apps.apple.com/us/app/niyya-women/id6820568044",
    googlePlayUrl: "https://play.google.com/store",
};