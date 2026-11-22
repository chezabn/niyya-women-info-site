import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import StoreBadge from "../common/StoreBadge";
import { stores } from "../../data/stores";

/** Desktop : bouton qui ouvre un petit panneau avec le choix App Store / Google Play. */
export function DownloadMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Fermeture : clic à l'extérieur ou touche Échap
    useEffect(() => {
        if (!isOpen) return;

        const onPointerDown = (event: PointerEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className="relative">
            <button
                ref={buttonRef}
                type="button"
                aria-expanded={isOpen}
                aria-controls="download-menu"
                onClick={() => setIsOpen((previous) => !previous)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
                Télécharger l'application
                <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* Reste dans le DOM mais "invisible" quand il est fermé : ses liens ne reçoivent pas le focus */}
            <div
                id="download-menu"
                className={`absolute right-0 top-full mt-3 w-64 rounded-2xl border border-primary-dark/10 bg-background p-3 shadow-lg transition-[opacity,translate,visibility] duration-200 motion-reduce:transition-none ${
                    isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                }`}
            >
                <p className="px-1 pb-3 text-xs text-muted">
                    Choisissez votre téléphone
                </p>

                <div className="flex flex-col gap-2" onClick={() => setIsOpen(false)}>
                    {stores.map((store) => (
                        <StoreBadge
                            key={store.platform}
                            platform={store.platform}
                            href={store.href}
                            className="w-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

/** Mobile : les deux boutons directement visibles dans le menu, sans étape supplémentaire. */
export function DownloadLinks({ onSelect }: { onSelect?: () => void }) {
    return (
        <div className="mt-4 px-3">
            <p className="mb-3 text-xs text-muted">Télécharger l'application</p>

            <div className="grid gap-2 sm:grid-cols-2" onClick={onSelect}>
                {stores.map((store) => (
                    <StoreBadge
                        key={store.platform}
                        platform={store.platform}
                        href={store.href}
                        className="w-full"
                    />
                ))}
            </div>
        </div>
    );
}