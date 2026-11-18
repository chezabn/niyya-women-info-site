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
            { label: "Accueil", href: "#home" },
            { label: "Notre philosophie", href: "#philosophy" },
            { label: "Fonctionnalités", href: "#features" },
            { label: "Télécharger l'application", href: "#download" },
        ],
    },
    {
        title: "Communauté",
        links: [
            { label: "Notre engagement", href: "#security" },
            { label: "Questions fréquentes", href: "#faq" },
            {
                label: "Nous contacter",
                href: "mailto:contact@niyyawomen.com",
            },
        ],
    },
    {
        title: "Informations",
        links: [
            { label: "Mentions légales", href: "/mentions-legales" },
            {
                label: "Politique de confidentialité",
                href: "/politique-confidentialite",
            },
            {
                label: "Conditions d'utilisation",
                href: "/conditions-utilisation",
            },
        ],
    },
];

export const footerConfig = {
    brandName: "Niyya Women",
    description:
        "Bien plus qu'un réseau social, un espace pensé pour les femmes. Partagez, découvrez et exprimez-vous au sein d'une communauté qui vous est dédiée.",
    copyright: "© 2026 Niyya Women. Tous droits réservés.",
    appStoreUrl: "#",
    googlePlayUrl: "#",
};