import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Lien vers une section (ex. /#faq) : on attend que la page soit affichée, puis on défile
            requestAnimationFrame(() => {
                document.getElementById(hash.slice(1))?.scrollIntoView();
            });
        } else {
            // Changement de page : retour en haut
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [pathname, hash]);

    return null;
}