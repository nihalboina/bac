"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import ScrambleText from "./ScrambleText";
import JoinModal from "./JoinModal";

type HeroHeadingProps = {
    text?: string;
    scrambleDurationMs?: number;
    logoDelayAfterTextMs?: number;
};

export default function HeroHeading({
    text = "BUILDERS AT",
    scrambleDurationMs = 100,
    logoDelayAfterTextMs = 0,
}: HeroHeadingProps) {
    const [logoVisible, setLogoVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleComplete = useCallback(() => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
        }
        if (logoDelayAfterTextMs > 0) {
            timeoutRef.current = window.setTimeout(() => setLogoVisible(true), logoDelayAfterTextMs);
        } else {
            setLogoVisible(true);
        }
    }, [logoDelayAfterTextMs]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <>
            <h1 className="font-sans text-4xl sm:text-6xl tracking-tight leading-none whitespace-nowrap flex items-center gap-3">
                <ScrambleText
                    text={text}
                    durationMs={scrambleDurationMs}
                    onComplete={handleComplete}
                    className="font-bold"
                />
                {/* Reserve logo width to avoid layout shift. Use inline size based on the final logo size. */}
                <span
                    className="inline-flex items-center justify-center align-middle"
                    style={{ width: "2.5em", height: "1.1em" }}
                    aria-hidden
                >
                    <img
                        src="/cal.svg"
                        alt=""
                        onClick={() => setModalOpen(true)}
                        className={
                            "h-[2em] w-auto transition-all duration-200 ease-out cursor-pointer hover:scale-110 " +
                            (logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")
                        }
                    />
                </span>
            </h1>
            <JoinModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}


