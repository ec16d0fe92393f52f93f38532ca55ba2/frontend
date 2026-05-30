import { useState } from 'react';

const FILTERS = ['Все', 'За XP', 'Premium', 'Новые'] as const;
type Filter = typeof FILTERS[number];

export const FilterChips = () => {
    const [active, setActive] = useState<Filter>('Все');
    return (
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {FILTERS.map((f) => (
                <button key={f} type="button" onClick={() => setActive(f)}
                    className="text-[12px] font-medium px-4 py-2 rounded-full border shrink-0 transition-colors"
                    style={{
                        background: active === f ? 'var(--color-primary)' : 'var(--color-surface)',
                        color: active === f ? '#fff' : 'var(--color-text-secondary)',
                        borderColor: active === f ? 'var(--color-primary)' : 'var(--color-border)',
                    }}>
                    {f}
                </button>
            ))}
        </div>
    );
};
