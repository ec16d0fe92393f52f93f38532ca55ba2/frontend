import { useState } from 'react';

const DATES = ['Сегодня', 'Вчера', 'Позавчера'] as const;
export type DateOption = typeof DATES[number];

interface DateSelectorProps {
    activeColor?: string;
    value?: DateOption;
    onChange?: (v: DateOption) => void;
}

export const DateSelector = ({ activeColor = 'var(--color-primary)', value: controlledValue, onChange }: DateSelectorProps) => {
    const [internal, setInternal] = useState<DateOption>('Сегодня');
    const active = controlledValue !== undefined ? controlledValue : internal;

    const handleClick = (d: DateOption) => {
        if (controlledValue !== undefined) {
            onChange?.(d);
        } else {
            setInternal(d);
        }
    };

    return (
        <div className="flex gap-2">
            {DATES.map((d) => (
                <button key={d} type="button" onClick={() => handleClick(d)}
                    className="flex-1 py-2.5 rounded-[12px] text-[13px] font-semibold border transition-colors btn-press"
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
