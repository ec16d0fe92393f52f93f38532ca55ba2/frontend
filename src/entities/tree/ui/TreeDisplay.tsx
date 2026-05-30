export const TreeDisplay = () => (
    <div className="w-[160px] h-[160px] rounded-full flex items-end justify-center relative mx-auto"
        style={{ background: '#eaf4e4' }}>
        <svg style={{ position: 'absolute', top: 32, left: 14, opacity: 0.7 }} width="36" height="13" viewBox="0 0 36 13">
            <ellipse cx="18" cy="8" rx="15" ry="5" fill="#FCFCFA" />
            <ellipse cx="11" cy="7" rx="8" ry="5.5" fill="#FCFCFA" />
            <ellipse cx="25" cy="7" rx="7" ry="4.5" fill="#FCFCFA" />
        </svg>
        <svg width="120" height="148" viewBox="0 0 120 148">
            <ellipse cx="60" cy="138" rx="40" ry="8" fill="#c8dfc0" opacity="0.6" />
            <rect x="57.5" y="82" width="5" height="50" rx="2.5" fill="#89B776" opacity="0.9" />
            <line x1="60" y1="100" x2="37" y2="78" stroke="#89B776" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
            <line x1="60" y1="92" x2="83" y2="70" stroke="#89B776" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
            <line x1="60" y1="84" x2="41" y2="64" stroke="#89B776" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
            <line x1="60" y1="78" x2="79" y2="60" stroke="#89B776" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
            <line x1="60" y1="70" x2="60" y2="38" stroke="#89B776" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <path d="M37 78 C29 72 25 62 31 54 C37 62 39 72 37 78Z" fill="#89B776" />
            <path d="M37 78 C31 74 29 64 37 58 C41 66 41 74 37 78Z" fill="#a5c990" />
            <path d="M83 70 C91 64 95 54 89 46 C83 54 81 64 83 70Z" fill="#89B776" />
            <path d="M83 70 C89 66 91 56 83 50 C79 58 79 66 83 70Z" fill="#a5c990" />
            <path d="M41 64 C33 58 31 48 37 42 C43 50 43 58 41 64Z" fill="#a5c990" />
            <path d="M79 60 C87 54 89 44 83 38 C77 46 77 54 79 60Z" fill="#a5c990" />
            <path d="M60 38 C54 28 54 16 60 10 C66 16 66 28 60 38Z" fill="#89B776" />
            <path d="M60 38 C52 30 50 18 58 12 C62 20 63 30 60 38Z" fill="#a5c990" />
            <path d="M60 38 C68 30 70 18 62 12 C58 20 57 30 60 38Z" fill="#b8d8a4" />
        </svg>
    </div>
);
