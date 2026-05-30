export const TreeDisplay = () => {
    return (
        <div className="relative flex items-center justify-center py-4">
            <div
                className="absolute inset-0 rounded-full mx-auto my-auto"
                style={{
                    background: 'radial-gradient(ellipse at center, var(--color-primary-light) 0%, transparent 70%)',
                    width: '100%',
                    height: '100%',
                }}
            />
            <div className="relative flex flex-col items-center gap-1">
                <div className="text-[88px] leading-none select-none filter drop-shadow-md">🌳</div>
                <div className="flex gap-3 text-[var(--color-primary-light)] opacity-60">
                    <span className="text-xs">✦</span>
                    <span className="text-sm">✦</span>
                    <span className="text-xs">✦</span>
                </div>
            </div>
        </div>
    );
};
