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
"[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function JoinModal({ isOpen, onClose }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        // Fake API call
        try {
            const response = await fetch('/api/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    reason,
                    timestamp: new Date().toISOString()
                })
            });
            // Simulate success regardless of actual response
            console.log('Join request submitted:', {
                email,
                reason
            });
            // Reset form and close modal
            setEmail("");
            setReason("");
            onClose();
        } catch (error) {
            console.error('Error submitting join request:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center p-4 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 w-full max-w-md border border-white border-opacity-20 shadow-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-white mb-1",
                                children: "Berkeley Email"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                id: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "your-email@berkeley.edu",
                                required: true,
                                disabled: isSubmitting,
                                className: "w-full h-12 px-3 py-2 border border-white border-opacity-30 bg-white bg-opacity-10 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent disabled:opacity-50 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "reason",
                                className: "block text-sm font-medium text-white mb-1",
                                children: "Why do you want to join?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "reason",
                                value: reason,
                                onChange: (e)=>setReason(e.target.value),
                                placeholder: "Build the future. Ship your dreams. Change the world. Create impact. Turn ideas into reality. Code with purpose. Innovate fearlessly. Make it happen.",
                                rows: 3,
                                required: true,
                                disabled: isSubmitting,
                                className: "w-full h-12 px-3 py-2 border border-white border-opacity-30 bg-white bg-opacity-10 text-white placeholder-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent disabled:opacity-50 resize-none backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "w-full px-4 py-2 bg-white bg-opacity-20 text-white rounded-md hover:bg-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed border border-white border-opacity-30 backdrop-blur-sm",
                            children: isSubmitting ? "Submitting..." : "Submit"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                            lineNumber: 87,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
                lineNumber: 53,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx",
        lineNumber: 50,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$src$2f$components$2f$JoinModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Development/BAC/bac/src/components/JoinModal.tsx [app-ssr] (ecmascript)");
"use client";
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-sans text-4xl sm:text-6xl tracking-tight leading-none whitespace-nowrap flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$src$2f$components$2f$ScrambleText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: text,
                        durationMs: scrambleDurationMs,
                        onComplete: handleComplete,
                        className: "font-bold"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                        lineNumber: 42,
                        columnNumber: 17
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
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Development$2f$BAC$2f$bac$2f$src$2f$components$2f$JoinModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalOpen,
                onClose: ()=>setModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/Development/BAC/bac/src/components/HeroHeading.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__2bfd56a8._.js.map