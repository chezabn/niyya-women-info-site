import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CircleCheck, CircleHelp, Mail, ShieldAlert, TriangleAlert } from "lucide-react";
import RevealOnScroll from "../components/common/RevealOnScroll";

const CONTACT_EMAIL = "contact@niyya-women.com";

// Surchargeable dans .env : VITE_SUPPORT_ENDPOINT=https://...
const SUPPORT_ENDPOINT: string =
    import.meta.env.VITE_SUPPORT_ENDPOINT ?? "https://api.niyya-women.com/api/support/";

const MAX_MESSAGE_LENGTH = 5000;

const subjects = [
    "Bug ou fonctionnalité",
    "Compte",
    "Contenu ou comportement",
    "Sécurité",
    "Autre",
];

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
    "w-full rounded-xl border border-primary-dark/15 bg-background px-4 py-3 text-base text-foreground outline-none transition placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/30";

const labelClass = "mb-2 block text-sm font-semibold text-foreground";

export default function ContactPage() {
    const [subject, setSubject] = useState(subjects[0]);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    useEffect(() => {
        const previousTitle = document.title;
        document.title = "Nous contacter – Niyya Women";

        return () => {
            document.title = previousTitle;
        };
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "sending") return;

        // Champ piège : un humain ne le voit pas, un robot le remplit.
        const honeypot = new FormData(event.currentTarget).get("website");
        if (honeypot) {
            setStatus("success");
            return;
        }

        setStatus("sending");

        try {
            const response = await fetch(SUPPORT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    subject,
                    email: email.trim(),
                    message: message.trim(),
                }),
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            setStatus("success");
            setSubject(subjects[0]);
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
        }
    }

    return (
        <>
            {/* En-tête */}
            <section className="bg-primary-light/50 px-5 pb-12 pt-16 sm:px-8 lg:px-10 lg:pb-16 lg:pt-24">
                <div className="mx-auto max-w-6xl">
                    <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Une question, un problème ? Écrivez-nous.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                        Posez une question, signalez un bug ou un comportement inapproprié.
                        Plus votre message est précis, plus vite nous pourrons vous aider.
                    </p>
                </div>
            </section>

            {/* Contenu */}
            <section className="bg-background px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">

                    {/* Informations */}
                    <RevealOnScroll variant="from-left" className="lg:col-span-2">
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                                    <Mail className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <div>
                                    <h2 className="font-semibold text-foreground">Par e-mail</h2>
                                    <p className="mt-1 text-sm leading-6 text-muted">
                                        Vous préférez écrire directement ?
                                    </p>
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="mt-1 inline-block text-sm font-semibold text-primary-dark underline-offset-4 hover:underline"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                                    <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <div>
                                    <h2 className="font-semibold text-foreground">
                                        Un contenu ou un comportement vous inquiète ?
                                    </h2>
                                    <p className="mt-1 text-sm leading-6 text-muted">
                                        Choisissez le sujet « Contenu ou comportement » ou « Sécurité »
                                        et indiquez le nom d'utilisateur concerné, ainsi que ce qui s'est passé.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                                    <CircleHelp className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <div>
                                    <h2 className="font-semibold text-foreground">
                                        Une question rapide ?
                                    </h2>
                                    <p className="mt-1 text-sm leading-6 text-muted">
                                        La réponse se trouve peut-être déjà dans la{" "}
                                        <Link
                                            to="/#faq"
                                            className="font-semibold text-primary-dark underline-offset-4 hover:underline"
                                        >
                                            FAQ
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </RevealOnScroll>

                    {/* Formulaire */}
                    <RevealOnScroll variant="from-right" className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-3xl border border-primary-dark/10 bg-primary-light/40 p-6 sm:p-8"
                            aria-busy={status === "sending"}
                        >
                            <div>
                                <label htmlFor="subject" className={labelClass}>
                                    Sujet
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={subject}
                                    onChange={(event) => setSubject(event.target.value)}
                                    className={fieldClass}
                                >
                                    {subjects.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="email" className={labelClass}>
                                    Adresse e-mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="vous@exemple.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className={fieldClass}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClass}>
                                    Description
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={7}
                                    maxLength={MAX_MESSAGE_LENGTH}
                                    placeholder="Expliquez ce qui s'est passé, les étapes pour reproduire le problème et, si possible, le résultat attendu."
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    className={`${fieldClass} resize-y`}
                                />
                                <p className="mt-2 text-right text-xs text-muted">
                                    {message.length} / {MAX_MESSAGE_LENGTH}
                                </p>
                            </div>

                            {/* Champ piège anti-robots (invisible pour les humains) */}
                            <div aria-hidden="true" className="absolute -left-2499.75 h-0 w-0 overflow-hidden">
                                <label htmlFor="website">Ne pas remplir ce champ</label>
                                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
                            </button>

                            {/* Retour à l'utilisatrice */}
                            <div role="status" aria-live="polite">
                                {status === "success" && (
                                    <p className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-6 text-foreground">
                                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                                        Merci, votre message a bien été envoyé. Nous reviendrons vers vous par e-mail si nécessaire.
                                    </p>
                                )}

                                {status === "error" && (
                                    <p className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-6 text-foreground">
                                        <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                                        <span>
                                            Votre message n'a pas pu être envoyé. Réessayez dans un instant ou écrivez-nous à{" "}
                                            <a
                                                href={`mailto:${CONTACT_EMAIL}`}
                                                className="font-semibold text-primary-dark underline-offset-4 hover:underline"
                                            >
                                                {CONTACT_EMAIL}
                                            </a>
                                            .
                                        </span>
                                    </p>
                                )}
                            </div>
                        </form>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    );
}