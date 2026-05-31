import { TransactionItem, selectTransactions } from '@entities/transaction';

import { useAppSelector } from '@shared/hooks';

export const RecentTransactionsList = () => {
    const transactions = useAppSelector(selectTransactions);

    return (
        <div>
            <div className="text-[13px] font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Последние операции
            </div>
            <div className="rounded-[18px] border overflow-hidden"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                {transactions.slice(0, 4).map((t, i) => (
                    <div key={t.id} className={`px-4 ${i < 3 ? 'border-b' : ''}`}
                        style={{ borderColor: 'var(--color-border)' }}>
                        <TransactionItem transaction={t} />
                    </div>
                ))}
            </div>
        </div>
    );
};
