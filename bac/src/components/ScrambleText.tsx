"use client";

import React, { useEffect, useRef, useState } from "react";

type ScrambleTextProps = {
    text: string;
    durationMs?: number;
    className?: string;
    onComplete?: () => void;
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomLetter(): string {
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

function shuffleArray<T>(items: T[]): T[] {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

export default function ScrambleText({
    text,
    durationMs = 1200,
    className,
    onComplete,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const rafRef = useRef<number | null>(null);
    const completedRef = useRef(false);

    useEffect(() => {
        const original = text;
        const indices = Array.from(original).map((char, index) => ({
            index,
            char,
            isLetter: /[A-Za-z]/.test(char),
        }));
        const letterPositions = indices.filter((i) => i.isLetter).map((i) => i.index);
        const revealOrder = shuffleArray(letterPositions);
        const totalLetters = revealOrder.length;

        const start = performance.now();

        const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / durationMs);
            const revealCount = Math.floor(progress * totalLetters);
            const revealedSet = new Set(revealOrder.slice(0, revealCount));

            const next = indices
                .map((info) => {
                    if (!info.isLetter) return info.char;
                    if (revealedSet.has(info.index)) return original[info.index];
                    return getRandomLetter();
                })
                .join("");

            setDisplayText(next);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else if (!completedRef.current) {
                completedRef.current = true;
                setDisplayText(original);
                onComplete?.();
            }
        };

        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [text, durationMs, onComplete]);

    return (
        <span className={className} aria-label={text} style={{ display: "inline-block" }}>
            {displayText}
        </span>
    );
}


