import { useState } from 'react';

interface AmountInputProps {
    color?: string;
}

export const AmountInput = ({ color = 'var(--color-expense)' }: AmountInputProps) => {
    const [value, setValue] = useState('');
    return (
        <div className="rounded-[18px] p-4 border" style={{ background: 'var(--color-surface)', borderColor: color }}>
            <div className="text-[12px] font-semibold mb-3" style={{ color: 'var(--color-text-muted)' }}>СУММА</div>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    inputMode="numeric"
                    value={value}
                    onChange={(e) => setValue(e.target.value.replace(/\D/g, ''))}
                    placeholder="0"
                    className="flex-1 text-[36px] font-bold outline-none bg-transparent"
                    style={{ color: color }}
                />
                <span className="text-[24px] font-bold" style={{ color: color }}>₽</span>
            </div>
            <div className="mt-2 text-[11px] font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Счёт: Основной · Баланс: 24 360 ₽
            </div>
        </div>
    );
};
