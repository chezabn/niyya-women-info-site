export type FaqStep = {
    label: string;
    text: string;
};

export type FaqItem = {
    id: string;
    question: string;
    answer: string | {
        intro: string;
        steps: FaqStep[];
        subheading: string;
        outro: string;
    };
};

export const questions: FaqItem[] = [
    {
        id: "what-is-niyya-women",
        question: "Qu'est-ce que Niyya Women ?",
        answer: "Niyya Women est un réseau social destiné aux femmes, conçu pour favoriser les échanges, le partage et la création de liens au sein d’une communauté bienveillante. La plateforme accorde une attention particulière à la confiance, à la sécurité et au respect de chacune, afin de proposer un espace où les utilisatrices peuvent s’exprimer, partager leurs expériences et interagir sereinement.",
    },
    {
        id: "identity-verification",
        question: "Comment fonctionne la vérification d'identité ?",
        answer: {
            intro: "Pour garantir un espace sûr et fiable à notre communauté, l’application peut demander une vérification d’identité. Le processus se déroule en trois étapes simples :",
            steps: [
                {
                    label: "Transmission des justificatifs",
                    text: "vous fournissez une photo d’une pièce d’identité officielle ainsi qu’une photo de votre visage prise en direct (selfie de contrôle).",
                },
                {
                    label: "Examen humain confidentiel",
                    text: "vos éléments sont vérifiés manuellement par des administratrices habilitées et de confiance, qui valident ou refusent la demande.",
                },
                {
                    label: "Suppression immédiate des photos",
                    text: "dès la vérification terminée, les images sont directement supprimées de nos systèmes afin de protéger votre vie privée.",
                },
            ],
            subheading: "Évolutions futures de la sécurité",
            outro: "Afin de renforcer continuellement la sécurité de la plateforme, Niyya Women pourra étudier l’intégration de dispositifs automatisés d’analyse ou de reconnaissance faciale. En cas de changement important de cette procédure ou du traitement de vos données personnelles, vous en serez informée au préalable de manière claire.",
        },
    },
    {
        id: "chat-with-friends",
        question: "Peut-on échanger avec ses amies ?",
        answer: "Oui. Niyya Women propose des échanges privés et des discussions de groupe pour garder le lien avec ses proches.",
    },
    {
        id: "download-app",
        question: "Où télécharger Niyya Women ?",
        answer: "Les liens de téléchargement sont disponibles dans la section d’accueil dédiée à l’application.",
    },
];