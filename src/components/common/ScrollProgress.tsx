import { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bar = barRef.current;
        if (!bar) return;

        let frame = 0;

        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            bar.style.transform = `scaleX(${progress})`;
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
    }, []);

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-60 h-0.5">
            <div
                ref={barRef}
                className="h-full origin-left bg-primary"
                style={{ transform: "scaleX(0)" }}
            />
        </div>
    );
}