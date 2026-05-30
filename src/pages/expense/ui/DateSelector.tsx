import { useState } from 'react';

const DATES = ['Сегодня', 'Вчера', 'Позавчера'] as const;

interface DateSelectorProps {
    activeColor?: string;
}

export const DateSelector = ({ activeColor = 'var(--color-expense)' }: DateSelectorProps) => {
    const [active, setActive] = useState('Сегодня');
    return (
        <div className="flex gap-2">
            {DATES.map((d) => (
                <button key={d} type="button" onClick={() => setActive(d)}
                    className="flex-1 py-2.5 rounded-[12px] text-[13px] font-semibold border transition-colors"
                    style={{
                        background: active === d ? activeColor : 'var(--color-surface)',
                        color: active === d ? '#fff' : 'var(--color-text-secondary)',
                        borderColor: active === d ? activeColor : 'var(--color-border)',
                    }}>
                    {d}
                </button>
            ))}
        </div>
    );
};
