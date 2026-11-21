import { ChevronDown } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";

const questions = [
    {
        question: "À qui s’adresse Niyya Women ?",
        answer: "Niyya Women est un espace communautaire imaginé par et pour les femmes, pour échanger et partager leurs expériences.",
    },
    {
        question: "Que peut-on partager sur l’application ?",
        answer: "Vous pouvez publier des moments de vie, des idées et des inspirations, et découvrir les publications de la communauté.",
    },
    {
        question: "Peut-on échanger avec ses amies ?",
        answer: "Oui. Niyya Women propose des échanges privés et des discussions de groupe pour garder le lien avec ses proches.",
    },
    {
        question: "Où télécharger Niyya Women ?",
        answer: "Les liens de téléchargement sont disponibles dans la section d’accueil dédiée à l’application.",
    },
];

export default function FAQSection() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="bg-background px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
        >
            <div className="mx-auto max-w-4xl">
                <RevealOnScroll variant="fade-up" className="mb-10 sm:mb-14">
                    <header className="text-center">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
                            FAQ
                        </p>
                        <h2 id="faq-title" className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                            Vos questions, nos réponses.
                        </h2>
                    </header>
                </RevealOnScroll>

                <div className="divide-y divide-primary-dark/15 border-y">
                    {questions.map(({ question, answer }, index) => (
                        <RevealOnScroll key={question} delay={index * 100}>
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-semibold text-foreground outline-none transition-colors hover:text-primary-dark sm:py-6 sm:text-lg">
                                    <span className="flex-1">{question}</span>
                                    <ChevronDown
                                        size={20}
                                        aria-hidden="true"
                                        className="shrink-0 text-primary-dark transition-transform duration-200 group-open:rotate-180"
                                    />
                                </summary>
                                <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-muted sm:text-base">
                                    {answer}
                                </p>
                            </details>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
