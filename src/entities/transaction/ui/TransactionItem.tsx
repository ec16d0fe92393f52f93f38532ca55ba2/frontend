import type { Transaction } from '../types';

const CATEGORY_EMOJI: Record<string, string> = {
    food: '🛒', cafe: '☕', transport: '🚇', housing: '🏠',
    health: '💊', entertainment: '🎬', subscriptions: '📱',
    salary: '💼', freelance: '💻', gift: '🎁', interest: '📈',
    refund: '🔄', investment: '💰', rental: '🏘', other: '➕',
};

interface TransactionItemProps {
    transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
    const isIncome = transaction.type === 'income';
    const emoji = CATEGORY_EMOJI[transaction.category] ?? '💳';
    const amountColor = isIncome ? 'var(--color-primary)' : 'var(--color-expense)';
    const sign = isIncome ? '+' : '−';

    return (
        <div className="row-hover flex items-center gap-3 py-3 px-1 -mx-1">
            <div className="w-10 h-10 rounded-[14px] flex items-center justify-center text-lg shrink-0"
                style={{ background: isIncome ? 'var(--color-primary-light)' : 'var(--color-expense-light)' }}>
                {emoji}
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate" style={{ color: 'var(--color-text-primary)' }}>
                    {transaction.title}
                </div>
                <div className="text-[11px]" style={{ color: 'var(--color-text-faint)' }}>
                    {transaction.date}
                </div>
            </div>
            <div className="text-sm font-bold shrink-0" style={{ color: amountColor }}>
                {sign}{Math.abs(transaction.amount).toLocaleString('ru-RU')} ₽
            </div>
        </div>
    );
};
