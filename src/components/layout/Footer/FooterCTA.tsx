import { ArrowUpRight } from "lucide-react";

export default function FooterCTA() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

            {/* Décoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-primary/15 blur-[100px]"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

                <div className="max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Rejoignez-nous
          </span>

                    <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Votre espace vous attend.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                        Découvrez Niyya Women et rejoignez un espace où
                        vous pouvez être pleinement vous-même.
                    </p>
                </div>

                <a
                    href="#telechargement"
                    className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D9AD48] hover:shadow-lg hover:shadow-primary/20"
                >
                    Découvrir l'application

                    <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                </a>

            </div>
        </div>
    );
}