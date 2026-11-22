import StoreBadge from "../../common/StoreBadge";
import { stores } from "../../../data/stores";

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

                {/* Choix de la boutique : iPhone ou Android */}
                <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
                    {stores.map((store) => (
                        <StoreBadge
                            key={store.platform}
                            platform={store.platform}
                            href={store.href}
                            variant="light"
                            className="w-full justify-center sm:w-52"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}