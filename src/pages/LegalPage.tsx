import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { legalDocuments } from "../data/legalDocuments";

/** Résultat du chargement, associé au slug demandé (évite d'afficher l'ancien document pendant un changement). */
interface LoadResult {
    slug: string;
    content: string | null; // null = erreur
}

/** Le titre de la page vient de legalDocuments : on retire le premier "# Titre" du .md pour éviter le doublon. */
function stripLeadingTitle(markdown: string): string {
    return markdown.replace(/^\s*#\s+.+\r?\n/, "");
}

const markdownComponents: Components = {
    a: ({ href, children }) => {
        const isExternal = href?.startsWith("http");

        return (
            <a
                href={href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {children}
            </a>
        );
    },
    // Les tableaux défilent horizontalement sur mobile au lieu de casser la page
    table: ({ children }) => (
        <div className="overflow-x-auto">
            <table>{children}</table>
        </div>
    ),
};

function LoadingSkeleton() {
    return (
        <div className="animate-pulse space-y-4" role="status" aria-label="Chargement du document">
            <div className="h-6 w-2/3 rounded bg-primary-dark/10" />
            <div className="h-4 w-full rounded bg-primary-dark/10" />
            <div className="h-4 w-full rounded bg-primary-dark/10" />
            <div className="h-4 w-5/6 rounded bg-primary-dark/10" />
            <div className="h-6 w-1/2 rounded bg-primary-dark/10" />
            <div className="h-4 w-full rounded bg-primary-dark/10" />
            <div className="h-4 w-4/5 rounded bg-primary-dark/10" />
        </div>
    );
}

export default function LegalPage() {
    const { slug } = useParams<{ slug: string }>();
    const document_ = legalDocuments.find((item) => item.slug === slug);
    const [result, setResult] = useState<LoadResult | null>(null);

    // Chargement du fichier Markdown correspondant
    useEffect(() => {
        if (!document_) return;

        let cancelled = false;

        document_
            .load()
            .then((content) => {
                if (!cancelled) setResult({ slug: document_.slug, content });
            })
            .catch(() => {
                if (!cancelled) setResult({ slug: document_.slug, content: null });
            });

        return () => {
            cancelled = true;
        };
    }, [document_]);

    // Titre de l'onglet
    useEffect(() => {
        if (!document_) return;

        const previousTitle = window.document.title;
        window.document.title = `${document_.title} – Niyya Women`;

        return () => {
            window.document.title = previousTitle;
        };
    }, [document_]);

    // Slug inconnu
    if (!document_) {
        return (
            <section className="bg-background px-5 py-28 text-center sm:px-8">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Document introuvable
                </h1>
                <p className="mt-4 text-muted">
                    Le document que vous cherchez n'existe pas ou a été déplacé.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                    Retour à l'accueil
                </Link>
            </section>
        );
    }

    const isCurrent = result?.slug === document_.slug;
    const isLoading = !isCurrent;
    const hasError = isCurrent && result.content === null;
    const content = isCurrent ? result.content : null;

    return (
        <>
            {/* En-tête */}
            <section className="bg-primary-light/50 px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-14 lg:pt-24">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        {document_.title}
                    </h1>

                    <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                        {document_.description}
                    </p>

                    {/* Navigation entre les documents */}
                    <nav
                        aria-label="Documents légaux"
                        className="mt-8 flex flex-wrap gap-2"
                    >
                        {legalDocuments.map((item) => {
                            const active = item.slug === document_.slug;

                            return (
                                <Link
                                    key={item.slug}
                                    to={`/legal/${item.slug}`}
                                    aria-current={active ? "page" : undefined}
                                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                                        active
                                            ? "border-primary bg-primary text-white"
                                            : "border-primary-dark/15 bg-background text-foreground hover:border-primary hover:text-primary-dark"
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </section>

            {/* Contenu */}
            <section className="bg-background px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
                <div className="mx-auto max-w-3xl">
                    {isLoading && <LoadingSkeleton />}

                    {hasError && (
                        <p role="alert" className="text-muted">
                            Impossible de charger ce document pour le moment. Veuillez réessayer plus tard.
                        </p>
                    )}

                    {content && (
                        <article
                            className="
                                prose prose-neutral max-w-none
                                prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
                                prose-h2:mt-12 prose-h2:text-2xl
                                prose-p:leading-8 prose-p:text-foreground/80
                                prose-li:text-foreground/80
                                prose-strong:text-foreground
                                prose-a:text-primary-dark prose-a:underline-offset-4 hover:prose-a:text-primary
                                prose-th:text-foreground
                            "
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={markdownComponents}
                            >
                                {stripLeadingTitle(content)}
                            </ReactMarkdown>
                        </article>
                    )}
                </div>
            </section>
        </>
    );
}