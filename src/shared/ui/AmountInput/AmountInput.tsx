import { useState } from 'react';

type AmountVariant = 'expense' | 'income';

const COLORS: Record<AmountVariant, string> = {
    expense: 'var(--color-expense)',
    income: 'var(--color-primary)',
};

interface AmountInputProps {
    variant?: AmountVariant;
}

export const AmountInput = ({ variant = 'income' }: AmountInputProps) => {
    const [value, setValue] = useState('');
    const color = COLORS[variant];

    return (
        <div className="rounded-[18px] p-4 border" style={{ background: 'var(--color-surface)', borderColor: color }}>
            <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>СУММА</div>
            <div className="flex items-center gap-2">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="0"
                    className="flex-1 text-[36px] font-bold outline-none bg-transparent"
                    style={{ color }}
                />
                <span className="text-[24px] font-bold" style={{ color }}>₽</span>
            </div>
            <div className="mt-2 text-[11px] font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Счёт: Основной · Баланс: 24 360 ₽
            </div>
        </div>
    );
};
