import { selectBalance } from '@entities/balance';

import { useAppSelector } from '@shared/hooks';
import { formatRub as fmt } from '@shared/utils';

export const OverviewCards = () => {
    const balance = useAppSelector(selectBalance);

    const cards = [
        { label: 'Доходы', amount: balance.income, color: 'var(--color-primary)', sign: '+' },
        { label: 'Расходы', amount: balance.expenses, color: 'var(--color-expense)', sign: '−' },
        { label: 'Накоплено', amount: balance.saved, color: 'var(--color-text-primary)', sign: '' },
    ];

    return (
        <div className="flex gap-2">
            {cards.map((c) => (
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
};
