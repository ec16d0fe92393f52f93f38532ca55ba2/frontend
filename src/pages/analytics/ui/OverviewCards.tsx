import { MOCK_BALANCE } from '@shared/mocks';
import { formatRub as fmt } from '@shared/utils';

const CARDS = [
    { label: 'Доходы', amount: MOCK_BALANCE.income, color: 'var(--color-primary)', sign: '+' },
    { label: 'Расходы', amount: MOCK_BALANCE.expenses, color: 'var(--color-expense)', sign: '−' },
    { label: 'Накоплено', amount: MOCK_BALANCE.saved, color: 'var(--color-text-primary)', sign: '' },
];

export const OverviewCards = () => (
    <div className="flex gap-2">
        {CARDS.map((c) => (
            <div key={c.label} className="flex-1 rounded-[14px] p-3 border"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <div className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>{c.label}</div>
                <div className="text-[13px] font-bold mt-1" style={{ color: c.color }}>
                    {c.sign}{fmt(c.amount)} ₽
                </div>
            </div>
        ))}
    </div>
);
