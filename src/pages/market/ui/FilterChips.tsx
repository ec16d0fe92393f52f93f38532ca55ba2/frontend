import { MARKET_FILTERS, type MarketFilter } from '@shared/mocks';

interface FilterChipsProps {
    value: MarketFilter;
    onChange: (f: MarketFilter) => void;
}

export const FilterChips = ({ value, onChange }: FilterChipsProps) => (
    <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        {MARKET_FILTERS.map((f) => (
            <button
                key={f}
                type="button"
                onClick={() => onChange(f)}
                className="text-[12px] font-medium px-4 py-2 rounded-full border shrink-0 transition-colors"
                style={{
                    background: value === f ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: value === f ? '#fff' : 'var(--color-text-secondary)',
                    borderColor: value === f ? 'var(--color-primary)' : 'var(--color-border)',
                }}
            >
                {f}
            </button>
        ))}
    </div>
);
