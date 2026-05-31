interface TreeDisplayProps {
    stage?: number; // 0–10; defaults to 10 (full tree)
}

export const TreeDisplay = ({ stage = 10 }: TreeDisplayProps) => {
    const s = Math.max(0, Math.min(10, stage));

    // Trunk grows from stage 0 to stage 6, then stays
    const trunkTop = Math.max(52, 135 - (15 + s * 8.3));

    return (
        <div className="w-[160px] h-[160px] rounded-full flex items-end justify-center relative mx-auto"
            style={{ background: '#eaf4e4' }}>

            {/* Decorative cloud */}
            {s >= 5 && (
                <svg style={{ position: 'absolute', top: 32, left: 14, opacity: 0.7 }} width="36" height="13" viewBox="0 0 36 13">
                    <ellipse cx="18" cy="8" rx="15" ry="5" fill="#FCFCFA" />
                    <ellipse cx="11" cy="7" rx="8" ry="5.5" fill="#FCFCFA" />
                    <ellipse cx="25" cy="7" rx="7" ry="4.5" fill="#FCFCFA" />
                </svg>
            )}

            <svg width="120" height="148" viewBox="0 0 120 148">
                {/* Ground shadow — always */}
                <ellipse cx="60" cy="138" rx="40" ry="8" fill="#c8dfc0" opacity="0.6" />

                {/* Main trunk */}
                <rect
                    x="57.5" y={trunkTop}
                    width="5" height={135 - trunkTop}
                    rx="2.5" fill="#89B776" opacity="0.9"
                />

                {/* ── Stage 0: tiny sprout leaf ── */}
                {s >= 0 && (
                    <path d={`M60 ${trunkTop} C57 ${trunkTop - 6} 55 ${trunkTop - 14} 60 ${trunkTop - 18} C65 ${trunkTop - 14} 63 ${trunkTop - 6} 60 ${trunkTop}`}
                        fill="#89B776" />
                )}

                {/* ── Stage 1: small top leaf pair ── */}
                {s >= 1 && (
                    <>
                        <path d={`M60 ${trunkTop + 2} C54 ${trunkTop - 5} 48 ${trunkTop - 3} 50 ${trunkTop + 6} C56 ${trunkTop + 5} 59 ${trunkTop + 3} 60 ${trunkTop + 2}`}
                            fill="#a5c990" />
                        <path d={`M60 ${trunkTop + 2} C66 ${trunkTop - 5} 72 ${trunkTop - 3} 70 ${trunkTop + 6} C64 ${trunkTop + 5} 61 ${trunkTop + 3} 60 ${trunkTop + 2}`}
                            fill="#a5c990" />
                    </>
                )}

                {/* ── Stage 2: larger top crown ── */}
                {s >= 2 && (
                    <>
                        <path d={`M60 ${trunkTop + 4} C52 ${trunkTop - 3} 44 ${trunkTop + 2} 48 ${trunkTop + 12} C54 ${trunkTop + 10} 58 ${trunkTop + 6} 60 ${trunkTop + 4}`}
                            fill="#89B776" />
                        <path d={`M60 ${trunkTop + 4} C68 ${trunkTop - 3} 76 ${trunkTop + 2} 72 ${trunkTop + 12} C66 ${trunkTop + 10} 62 ${trunkTop + 6} 60 ${trunkTop + 4}`}
                            fill="#89B776" />
                    </>
                )}

                {/* ── Stage 3: 1st branch pair (lowest, ~y=105) ── */}
                {s >= 3 && (
                    <>
                        {/* Left branch */}
                        <line x1="60" y1="105" x2="37" y2="90" stroke="#89B776" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                        {/* Left leaf */}
                        <path d="M37 90 C29 84 25 74 31 66 C37 74 39 84 37 90Z" fill="#89B776" />
                        <path d="M37 90 C31 86 29 76 37 70 C41 78 41 86 37 90Z" fill="#a5c990" />
                        {/* Right branch */}
                        <line x1="60" y1="105" x2="83" y2="90" stroke="#89B776" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                        {/* Right leaf */}
                        <path d="M83 90 C91 84 95 74 89 66 C83 74 81 84 83 90Z" fill="#89B776" />
                        <path d="M83 90 C89 86 91 76 83 70 C79 78 79 86 83 90Z" fill="#a5c990" />
                    </>
                )}

                {/* ── Stage 4: 2nd branch pair (~y=90) ── */}
                {s >= 4 && (
                    <>
                        <line x1="60" y1="90" x2="40" y2="75" stroke="#89B776" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
                        <path d="M40 75 C32 69 29 59 35 52 C41 60 42 70 40 75Z" fill="#a5c990" />
                        <path d="M40 75 C34 71 32 61 40 55 C44 63 44 71 40 75Z" fill="#b8d8a4" />

                        <line x1="60" y1="90" x2="80" y2="75" stroke="#89B776" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
                        <path d="M80 75 C88 69 91 59 85 52 C79 60 78 70 80 75Z" fill="#a5c990" />
                        <path d="M80 75 C86 71 88 61 80 55 C76 63 76 71 80 75Z" fill="#b8d8a4" />
                    </>
                )}

                {/* ── Stage 5: 3rd branch pair (~y=78) ── */}
                {s >= 5 && (
                    <>
                        <line x1="60" y1="78" x2="42" y2="62" stroke="#89B776" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
                        <path d="M42 62 C34 56 32 46 38 40 C44 48 44 58 42 62Z" fill="#89B776" />
                        <path d="M42 62 C36 58 34 48 42 42 C46 50 46 58 42 62Z" fill="#a5c990" />

                        <line x1="60" y1="78" x2="78" y2="62" stroke="#89B776" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
                        <path d="M78 62 C86 56 88 46 82 40 C76 48 76 58 78 62Z" fill="#89B776" />
                        <path d="M78 62 C84 58 86 48 78 42 C74 50 74 58 78 62Z" fill="#a5c990" />
                    </>
                )}

                {/* ── Stage 6: 4th branch pair (~y=68) ── */}
                {s >= 6 && (
                    <>
                        <line x1="60" y1="68" x2="44" y2="52" stroke="#89B776" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
                        <path d="M44 52 C37 46 35 36 41 30 C47 38 47 46 44 52Z" fill="#a5c990" />

                        <line x1="60" y1="68" x2="76" y2="52" stroke="#89B776" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
                        <path d="M76 52 C83 46 85 36 79 30 C73 38 73 46 76 52Z" fill="#a5c990" />
                    </>
                )}

                {/* ── Stage 7: top crown grows ── */}
                {s >= 7 && (
                    <>
                        <path d="M60 52 C54 42 54 30 60 24 C66 30 66 42 60 52Z" fill="#89B776" />
                        <path d="M60 52 C52 44 50 32 58 26 C62 34 63 44 60 52Z" fill="#a5c990" />
                        <path d="M60 52 C68 44 70 32 62 26 C58 34 57 44 60 52Z" fill="#b8d8a4" />
                    </>
                )}

                {/* ── Stage 8: extra leaves on lower branches ── */}
                {s >= 8 && (
                    <>
                        <path d="M30 82 C22 76 20 66 26 60 C32 68 32 78 30 82Z" fill="#b8d8a4" opacity="0.85" />
                        <path d="M90 82 C98 76 100 66 94 60 C88 68 88 78 90 82Z" fill="#b8d8a4" opacity="0.85" />
                        <path d="M38 68 C30 62 28 52 34 46 C40 54 40 62 38 68Z" fill="#89B776" opacity="0.7" />
                        <path d="M82 68 C90 62 92 52 86 46 C80 54 80 62 82 68Z" fill="#89B776" opacity="0.7" />
                    </>
                )}

                {/* ── Stage 9: extra leaves on upper branches ── */}
                {s >= 9 && (
                    <>
                        <path d="M42 44 C34 38 32 28 38 22 C44 30 44 40 42 44Z" fill="#b8d8a4" opacity="0.85" />
                        <path d="M78 44 C86 38 88 28 82 22 C76 30 76 40 78 44Z" fill="#b8d8a4" opacity="0.85" />
                        <path d="M50 36 C43 30 42 21 48 16 C54 23 53 32 50 36Z" fill="#a5c990" opacity="0.8" />
                        <path d="M70 36 C77 30 78 21 72 16 C66 23 67 32 70 36Z" fill="#a5c990" opacity="0.8" />
                    </>
                )}

                {/* ── Stage 10: full crown + highlight ── */}
                {s >= 10 && (
                    <>
                        <path d="M60 26 C55 18 55 10 60 6 C65 10 65 18 60 26Z" fill="#89B776" />
                        <path d="M55 30 C47 24 45 14 51 8 C56 15 56 24 55 30Z" fill="#b8d8a4" opacity="0.9" />
                        <path d="M65 30 C73 24 75 14 69 8 C64 15 64 24 65 30Z" fill="#b8d8a4" opacity="0.9" />
                        <ellipse cx="60" cy="138" rx="44" ry="9" fill="#c8dfc0" opacity="0.4" />
                    </>
                )}
            </svg>
        </div>
    );
};
