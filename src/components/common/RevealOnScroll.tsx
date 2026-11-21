import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealVariant =
    | "fade-up"
    | "from-left"
    | "from-right"
    | "zoom-in"
    | "fade";

interface RevealOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    variant?: RevealVariant;
}

const hiddenState: Record<RevealVariant, string> = {
    "fade-up": "translate-y-8 opacity-0",
    "from-left": "-translate-x-10 opacity-0",
    "from-right": "translate-x-10 opacity-0",
    "zoom-in": "scale-90 opacity-0",
    fade: "opacity-0",
};

const shownState = "translate-x-0 translate-y-0 scale-100 opacity-100";

export default function RevealOnScroll({
                                           children,
                                           className = "",
                                           delay = 0,
                                           duration = 800,
                                           variant = "fade-up",
                                       }: RevealOnScrollProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion || !("IntersectionObserver" in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
        );

        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`
                transition-[opacity,translate,scale] ease-[cubic-bezier(0.22,1,0.36,1)]
                motion-reduce:transition-none
                ${isVisible ? shownState : hiddenState[variant]}
                ${className}
            `}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
}