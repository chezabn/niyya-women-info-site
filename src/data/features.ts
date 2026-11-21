import {
    BookHeart,
    ShieldCheck,
    BellRing,
    MessageCircle,
    UsersRound,
    Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type FeatureVariant = "sand" | "gold" | "dark" | "white";
export type FeatureSize = "tall" | "wide" | "small";

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    variant: FeatureVariant;
    size: FeatureSize;
}

export const features: Feature[] = [
    {
        id: 1,
        title: "Votre journal personnel",
        description:
            "Prenez un moment pour vous. Écrivez vos pensées, exprimez vos émotions et conservez une trace de vos moments importants dans votre espace personnel.",
        icon: BookHeart,
        variant: "sand",
        size: "tall",
    },
    {
        id: 2,
        title: "La confidentialité avant tout",
        description:
            "Profitez d'un espace où la confidentialité et la sécurité occupent une place essentielle. Vos échanges et votre vie privée méritent d'être protégés.",
        icon: ShieldCheck,
        variant: "gold",
        size: "wide",
    },
    {
        id: 3,
        title: "Restez connectée, en temps réel",
        description:
            "Recevez des notifications pour ne manquer aucune interaction, aucun message et aucun moment important de votre communauté.",
        icon: BellRing,
        variant: "dark",
        size: "wide",
    },
    {
        id: 4,
        title: "Des discussions privées",
        description:
            "Échangez librement avec vos amies grâce aux conversations privées.",
        icon: MessageCircle,
        variant: "white",
        size: "small",
    },
    {
        id: 5,
        title: "Des discussions de groupe",
        description:
            "Retrouvez vos amies dans des espaces de discussion collectifs et partagez vos moments ensemble.",
        icon: UsersRound,
        variant: "sand",
        size: "small",
    },
    {
        id: 6,
        title: "Et bien plus encore...",
        description:
            "Niyya Women évolue constamment. De nouvelles fonctionnalités viendront enrichir votre expérience.",
        icon: Sparkles,
        variant: "sand",
        size: "small",
    },
];