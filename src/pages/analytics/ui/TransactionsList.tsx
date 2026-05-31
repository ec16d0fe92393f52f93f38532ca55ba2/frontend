import { useState } from 'react';

import { TransactionItem, selectTransactions } from '@entities/transaction';

import { useAppSelector } from '@shared/hooks';

const FILTERS = ['Все', 'Доходы', 'Расходы'] as const;
type Filter = typeof FILTERS[number];

export const TransactionsList = () => {
    const [filter, setFilter] = useState<Filter>('Все');
    const transactions = useAppSelector(selectTransactions);

    const filtered = transactions.filter((t) => {
        if (filter === 'Доходы') return t.type === 'income';
        if (filter === 'Расходы') return t.type === 'expense';
        return true;
    });

    return (
        <div>
            <div className="flex gap-2 mb-3">
                {FILTERS.map((f) => (
                    <button key={f} type="button" onClick={() => setFilter(f)}
                        className="text-[12px] font-medium px-3 py-1.5 rounded-full border transition-colors"
                        style={{
                            background: filter === f ? 'var(--color-primary)' : 'var(--color-surface)',
                            color: filter === f ? '#fff' : 'var(--color-text-secondary)',
                            borderColor: filter === f ? 'var(--color-primary)' : 'var(--color-border)',
                        }}>
                        {f}
                    </button>
                ))}
            </div>
            <div className="rounded-[16px] border overflow-hidden divide-y"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                {filtered.map((t) => (
                    <div key={t.id} className="px-4">
                        <TransactionItem transaction={t} />
                    </div>
                ))}
            </div>
        </div>
    );
};
