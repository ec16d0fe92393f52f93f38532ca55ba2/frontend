import { TransactionItem, selectTransactions } from '@entities/transaction';

import { useAppSelector } from '@shared/hooks';

export const RecentTransactions = () => {
    const transactions = useAppSelector(selectTransactions);

    return (
        <div>
            <div className="text-[12px] font-semibold mb-2" style={{ color: 'var(--color-text-muted)' }}>
                Недавние операции
            </div>
            <div className="rounded-[16px] border overflow-hidden divide-y divide-[var(--color-border)]"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                {transactions.slice(0, 3).map((t) => (
                    <div key={t.id} className="px-4">
                        <TransactionItem transaction={t} />
                    </div>
                ))}
            </div>
        </div>
    );
};
