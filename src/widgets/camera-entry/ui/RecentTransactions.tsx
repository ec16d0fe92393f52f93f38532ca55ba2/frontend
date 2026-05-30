import { TransactionItem } from '@entities/transaction';

import { MOCK_TRANSACTIONS } from '@shared/mocks';

export const RecentTransactions = () => (
    <div>
        <div className="text-[12px] font-semibold mb-2" style={{ color: 'var(--color-text-muted)' }}>
            Недавние операции
        </div>
        <div className="rounded-[16px] border overflow-hidden divide-y divide-[var(--color-border)]"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            {MOCK_TRANSACTIONS.slice(0, 3).map((t) => (
                <div key={t.id} className="px-4">
                    <TransactionItem transaction={t} />
                </div>
            ))}
        </div>
    </div>
);
