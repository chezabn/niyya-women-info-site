export interface Stores {
    platform: "apple" | "google";
    href: string;
}

export const stores: Stores[] = [
    {
        platform: "apple",
        href: "https://apps.apple.com/us/app/niyya-women/id6820568044",
    },
    {
        platform: "google",
        // À remplacer par l'URL de votre fiche Google Play dès qu'elle est publiée
        href: "https://play.google.com/store",
    },
];
