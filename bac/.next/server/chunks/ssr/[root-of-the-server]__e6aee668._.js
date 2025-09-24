module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Development/BAC/bac/src/components/ScrambleText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrambleText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getRandomLetter() {
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}
function shuffleArray(items) {
    const arr = items.slice();
    for(let i = arr.length - 1; i > 0; i -= 1){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function ScrambleText({ text, durationMs = 1200, className, onComplete }) {
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(text);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const original = text;
        const indices = Array.from(original).map((char, index)=>({
                index,
                char,
                isLetter: /[A-Za-z]/.test(char)
            }));
        const letterPositions = indices.filter((i)=>i.isLetter).map((i)=>i.index);
        const revealOrder = shuffleArray(letterPositions);
        const totalLetters = revealOrder.length;
        const start = performance.now();
        const step = (now)=>{
            const elapsed = now - start;
            const progress = Math.min(1, elapsed / durationMs);
            const revealCount = Math.floor(progress * totalLetters);
            const revealedSet = new Set(revealOrder.slice(0, revealCount));
            const next = indices.map((info)=>{
                if (!info.isLetter) return info.char;
                if (revealedSet.has(info.index)) return original[info.index];
                return getRandomLetter();
            }).join("");
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
        return ()=>{
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [
        text,
        durationMs,
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        "aria-label": text,
        style: {
            display: "inline-block"
        },
        children: displayText
    }, void 0, false, {
        fileName: "[project]/Desktop/Development/BAC/bac/src/components/ScrambleText.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$src$2f$components$2f$ScrambleText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/src/components/ScrambleText.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function HeroHeading({ text = "BUILDERS AT", scrambleDurationMs = 1200, logoDelayAfterTextMs = 0 }) {
    const [logoVisible, setLogoVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current);
        }
        if (logoDelayAfterTextMs > 0) {
            timeoutRef.current = window.setTimeout(()=>setLogoVisible(true), logoDelayAfterTextMs);
        } else {
            setLogoVisible(true);
        }
    }, [
        logoDelayAfterTextMs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "font-sans text-4xl sm:text-6xl tracking-tight leading-none whitespace-nowrap flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$src$2f$components$2f$ScrambleText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                text: text,
                durationMs: scrambleDurationMs,
                onComplete: handleComplete,
                className: "font-bold"
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-flex items-center justify-center align-middle",
                style: {
                    width: "2.5em",
                    height: "1.1em"
                },
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/cal.svg",
                    alt: "",
                    onClick: ()=>setModalOpen(true),
                    className: "h-[2em] w-auto transition-all duration-200 ease-out cursor-pointer hover:scale-110 " + (logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")
                }, void 0, false, {
                    fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e6aee668._.js.map