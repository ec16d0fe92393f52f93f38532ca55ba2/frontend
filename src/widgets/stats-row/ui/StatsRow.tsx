const STATS = [
    {
        icon: (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#89B776" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
            </svg>
        ),
        label: 'Траты сегодня',
        value: '2 500 ₽',
        sub: '↗ +12% вчера',
        subColor: '#c07040',
        extra: null,
    },
    {
        icon: (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#89B776" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
        ),
        label: '% микрошага',
        value: '72%',
        sub: null,
        subColor: '',
        extra: { progress: 72 },
    },
    {
        icon: (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d07848" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        label: 'Дней подряд',
        value: '12',
        sub: 'дней 🔥',
        subColor: 'var(--color-text-faint)',
        extra: null,
    },
];

export const StatsRow = () => (
    <div className="flex gap-[10px]">
        {STATS.map((s, i) => (
            <div key={i} className="flex-1 rounded-[16px] p-3 border"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center gap-[5px] mb-[5px]">
                    {s.icon}
                    <span className="text-[10px] font-medium" style={{ color: 'var(--color-text-muted)' }}>{s.label}</span>
                </div>
                <div className="text-[16px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{s.value}</div>
                {s.extra && (
                    <div className="rounded-[4px] h-[4px] mt-[7px]" style={{ background: '#e4f0dc' }}>
                        <div className="h-full rounded-[4px]" style={{ width: `${s.extra.progress}%`, background: 'var(--color-primary)' }} />
                    </div>
                )}
                {s.sub && (
                    <div className="text-[10px] mt-[3px]" style={{ color: s.subColor }}>{s.sub}</div>
                )}
            </div>
        ))}
    </div>
);
