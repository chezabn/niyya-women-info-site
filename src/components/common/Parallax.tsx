import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
    children?: ReactNode;
    className?: string;
    /** 0.1 = lent, 0.3 = marqué. Négatif = sens inverse. */
    speed?: number;
}

export default function Parallax({ children, className = "", speed = 0.1 }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        const parent = element?.parentElement;
        if (!element || !parent) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let frame = 0;

        const update = () => {
            frame = 0;
            const rect = parent.getBoundingClientRect();
            const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
            element.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [speed]);

    return (
        <div ref={ref} aria-hidden="true" className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
}