export const CameraViewfinder = () => (
    <div className="rounded-[20px] overflow-hidden relative flex items-center justify-center"
        style={{ background: '#1a1a1a', aspectRatio: '4/3' }}>
        <div className="text-[48px]">📷</div>
        <div className="absolute text-[11px] font-medium px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', bottom: 16 }}>
            Наведите на чек или QR-код
        </div>
        {/* Corner markers */}
        {([
            { top: 24, left: 24 },
            { top: 24, right: 24 },
            { bottom: 24, left: 24 },
            { bottom: 24, right: 24 },
        ] as Record<string, number>[]).map((pos, i) => {
            const isRight = 'right' in pos;
            const isBottom = 'bottom' in pos;
            return (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" style={{ position: 'absolute', ...pos, transform: `rotate(${isRight ? (isBottom ? 180 : 90) : isBottom ? 270 : 0}deg)` }}>
                    <path d="M2 12V2H12" fill="none" stroke="#89B776" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            );
        })}
    </div>
);
