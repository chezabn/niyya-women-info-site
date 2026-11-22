export interface LegalDocument {
    /** Segment d'URL : /legal/:slug */
    slug: string;
    /** Titre affiché sur la page et dans l'onglet du navigateur */
    title: string;
    /** Courte phrase sous le titre */
    description: string;
    /** Charge le contenu Markdown (chargé à la demande, jamais dans le bundle principal) */
    load: () => Promise<string>;
}

// Vite transforme chaque .md en module séparé, chargé uniquement quand on l'appelle.
const files = import.meta.glob<string>("../content/legal/*.md", {
    query: "?raw",
    import: "default",
});

function loadFile(filename: string): () => Promise<string> {
    return () => {
        const load = files[`../content/legal/${filename}`];

        return load
            ? load()
            : Promise.reject(new Error(`Fichier introuvable : ${filename}`));
    };
}

export const legalDocuments: LegalDocument[] = [
    {
        slug: "mentions-legales",
        title: "Mentions légales",
        description: "Les informations légales relatives à Niyya Women.",
        load: loadFile("mentions-legales.md"),
    },
    {
        slug: "politique-de-confidentialite",
        title: "Politique de confidentialité",
        description: "Comment vos données personnelles sont collectées et protégées.",
        load: loadFile("politique-de-confidentialite.md"),
    },
    {
        slug: "conditions-generales-d-utilisation",
        title: "Conditions générales d'utilisation",
        description: "Les règles d'utilisation de l'application Niyya Women.",
        load: loadFile("conditions-generales-d-utilisation.md"),
    },
];