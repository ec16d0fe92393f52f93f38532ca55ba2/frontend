export const TypingIndicator = () => (
    <div className="flex justify-start gap-2">
        <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm"
            style={{ background: 'var(--color-primary)' }}>
            🌿
        </div>
        <div className="rounded-[4px_16px_16px_16px] px-4 py-3 flex items-center gap-1"
            style={{ background: 'var(--color-surface-alt)' }}>
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="w-2 h-2 rounded-full inline-block animate-bounce"
                    style={{ background: 'var(--color-primary)', animationDelay: `${i * 0.15}s` }}
                />
            ))}
        </div>
    </div>
);
