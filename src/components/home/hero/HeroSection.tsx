import StoreBadge from "../../common/StoreBadge.tsx";
import PhoneMockup from "./PhoneMockup.tsx";

export default function HeroSection() {
    return (
        <section
            id="accueil"
            className="relative overflow-hidden bg-background"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-125 w-125 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">

                {/* Left content */}
                <div className="max-w-xl text-center lg:text-left">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />

                        <span className="text-xs font-semibold text-primary-dark">
              Un espace pensé pour les femmes
            </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Un espace pour
                        <span className="text-primary"> être soi, </span>
                        partager et créer des liens.
                    </h1>

                    <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-muted sm:text-lg lg:mx-0">
                        Bienvenue sur Niyya Women, un réseau social dédié
                        aux femmes. Découvrez une communauté, partagez
                        vos expériences et échangez dans un espace pensé
                        pour vous.
                    </p>

                    {/* Store badges */}
                    <div
                        id="telechargement"
                        className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <StoreBadge
                            platform="apple"
                            href="https://apps.apple.com/"
                            className="w-52 justify-center"
                        />

                        <StoreBadge
                            platform="google"
                            href="https://play.google.com/store"
                            className="w-52 justify-center"
                        />
                    </div>

                    <p className="mt-5 text-xs text-muted">
                        Rejoignez une communauté qui vous ressemble.
                    </p>
                </div>

                {/* Right visual */}
                <div className="relative flex items-center justify-center py-5">
                    {/* Decorative circle */}
                    <div className="absolute h-90 w-90 rounded-full border border-primary/20 sm:h-107.5 sm:w-107.5" />

                    <div className="absolute h-75 w-75 rounded-full bg-primary/10 sm:h-92.5 sm:w-92.5" />

                    <div className="relative z-10">
                        <PhoneMockup />
                    </div>

                    {/* Floating decoration */}
                    <div className="absolute right-0 top-20 hidden rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg sm:block">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-xl text-primary">
                                ♡
                            </div>

                            <div>
                                <p className="text-xs font-bold text-foreground">
                                    Une communauté
                                </p>

                                <p className="text-[10px] text-muted">
                                    Qui vous ressemble
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-16 left-0 hidden rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg sm:block">
                        <p className="text-xs font-bold text-foreground">
                            Partagez librement
                        </p>

                        <p className="mt-1 text-[10px] text-muted">
                            Vos idées, vos expériences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}