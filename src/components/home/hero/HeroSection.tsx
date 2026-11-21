import StoreBadge from "../../common/StoreBadge.tsx";
import Parallax from "../../common/Parallax.tsx";
import PhoneMockup from "./PhoneMockup.tsx";

export default function HeroSection() {
    return (
        <section
            id="accueil"
            className="relative overflow-hidden bg-background"
        >
            {/* Décor d'arrière-plan : le parallax déplace le conteneur,
                le blob dérive à l'intérieur (deux transform séparés) */}
            <Parallax
                speed={0.12}
                className="pointer-events-none absolute -right-40 -top-40"
            >
                <div className="h-125 w-125 animate-blob rounded-full bg-primary/10 blur-3xl" />
            </Parallax>

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">

                {/* Contenu gauche */}
                <div className="max-w-xl text-center lg:text-left">
                    <div className="mb-7 inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />

                        <span className="text-xs font-semibold text-primary-dark">
                            Un espace pensé pour les femmes
                        </span>
                    </div>

                    <h1 className="animate-fade-up text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl [animation-delay:150ms]">
                        Un espace pour
                        <span className="text-primary"> être soi, </span>
                        partager et créer des liens.
                    </h1>

                    <p className="mx-auto mt-7 max-w-lg animate-fade-up text-base leading-8 text-muted sm:text-lg lg:mx-0 [animation-delay:300ms]">
                        Bienvenue sur Niyya Women, un réseau social dédié
                        aux femmes. Découvrez une communauté, partagez
                        vos expériences et échangez dans un espace pensé
                        pour vous.
                    </p>

                    {/* Badges des stores */}
                    <div
                        id="telechargement"
                        className="mt-9 flex animate-fade-up flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start [animation-delay:450ms]"
                    >
                        <StoreBadge
                            platform="apple"
                            href="https://apps.apple.com/us/app/niyya-women/id6820568044"
                            className="w-52 justify-center"
                        />

                        <StoreBadge
                            platform="google"
                            href="https://play.google.com/store"
                            className="w-52 justify-center"
                        />
                    </div>

                    <p className="mt-5 animate-fade-up text-xs text-muted [animation-delay:600ms]">
                        Rejoignez une communauté qui vous ressemble.
                    </p>
                </div>

                {/* Visuel droit */}
                <div className="relative flex animate-zoom-in items-center justify-center py-5 [animation-delay:300ms]">
                    {/* Cercles décoratifs */}
                    <div className="absolute h-90 w-90 rounded-full border border-primary/20 sm:h-107.5 sm:w-107.5" />

                    <div className="absolute h-75 w-75 rounded-full bg-primary/10 sm:h-92.5 sm:w-92.5" />

                    <div className="relative z-10 animate-float">
                        <PhoneMockup />
                    </div>

                    {/* Carte flottante : communauté */}
                    <div className="absolute right-0 top-20 hidden animate-float-slow rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg sm:block">
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

                    {/* Carte flottante : partage (cycle décalé) */}
                    <div className="absolute bottom-16 left-0 hidden animate-float-slow rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg sm:block [animation-delay:-4s]">
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
